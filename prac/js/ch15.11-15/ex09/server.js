import WebSocket, { WebSocketServer } from "ws";

// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;
// 1秒当たりの更新頻度
const FRAME_RATE = 10;

// WebSocketのポート
const port = 3003;
const wss = new WebSocketServer({ port });

// ライフゲームのセル (true or false) をランダムに初期化する
let grid = new Array(ROWS)
.fill(null)
.map(() =>
  new Array(COLS).fill(null).map(() => !!Math.floor(Math.random() * 2))
);
// 停止状態
let paused = true;

wss.on("connection", (ws) => {
  // 接続されたクライアントに初期のグリッドを送信
  ws.send(JSON.stringify({ type: "update", grid }));

  ws.on("message", (message) => {
    const data = JSON.parse(message.toString());
    switch (data.type) {
      case "toggle": // セルの反転
        grid[data.row][data.col] = !grid[data.row][data.col];
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: "update", grid }));
          }
        });
        break;
      case "pause": // 停止
        paused = true;
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: "pause" }));
          }
        });
        break;
      case "start": // 開始・再開
        paused = false;
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: "start" }));
          }
        });
        break;
    }
  });
});

// Life Game のルールに従ってセルを更新する
function updateGrid(grid) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する
      //（15.04-10.10の実装を利用）
      const aroundSell = [
        row > 0 && col > 0 ? grid[row - 1][col - 1] : false,      // 左上
        row > 0 ? grid[row - 1][col] : false,                     // 上
        row > 0 && col < COLS - 1 ? grid[row - 1][col + 1] : false, // 右上
        col > 0 ? grid[row][col - 1] : false,                     // 左
        col < COLS - 1 ? grid[row][col + 1] : false,              // 右
        row < ROWS - 1 && col > 0 ? grid[row + 1][col - 1] : false, // 左下
        row < ROWS - 1 ? grid[row + 1][col] : false,              // 下
        row < ROWS - 1 && col < COLS - 1 ? grid[row + 1][col + 1] : false // 右下
      ];

      const trueCount = aroundSell.filter(value => value === true).length;
      if (grid[row][col] === false) {
        if (trueCount == 3) {
          nextGrid[row][col] = true
        } else {
          nextGrid[row][col] = false
        }
      } else {
        switch (trueCount) {
          case 0:
          case 1:
            nextGrid[row][col] = false
            break;
          case 2:
          case 3:
            nextGrid[row][col] = true
            break;
          default:
            nextGrid[row][col] = false
        }
      }

    }
  }
  return nextGrid;
}

// 全クライアントにグリッドの状態をブロードキャストする
function broadcast(grid) {
  const message = JSON.stringify({ type: "update", grid });
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// 1秒に10回グリッドを更新し、クライアントに送信する
setInterval(() => {
  if (paused) {
    return;
  }
  grid = updateGrid(grid);
  broadcast(grid);
}, 1000 / FRAME_RATE);
