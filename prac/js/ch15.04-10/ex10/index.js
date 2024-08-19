// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;
// 1セルのサイズ
const RESOLUTION = 10;

const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

canvas.width = ROWS * RESOLUTION;
canvas.height = COLS * RESOLUTION;

// https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame が返す ID
let animationId = null;

// NOTE: download from https://soundeffect-lab.info/sound/button/mp3/decision1.mp3
const sound = new Audio("/ch15.04-10/ex10/decision1.mp3");

// ライフゲームのセル (true or false) をランダムに初期化する
let grid = new Array(ROWS)
  .fill(null)
  .map(() =>
    new Array(COLS).fill(null).map(() => !!Math.floor(Math.random() * 2))
  );

// grid を canvas に描画する
function renderGrid(grid) {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = grid[row][col];
      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
}

// Life Game のルールに従ってセルを更新する
function updateGrid(grid) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する (実装してね)
      //メモ：
      //falseの時:生存3ならtrue
      //trueの時:生存2or3ならtrue
      //生存0or1ならfalse
      //生存4,5,6,7,8ならfalse
      //newGrid[row][col]

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

// canvas がクリックされたときの処理 (セルの値を反転する)
canvas.addEventListener("click", function (evt) {
  const rect = canvas.getBoundingClientRect();
  const pos = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };

  const row = Math.floor(pos.y / RESOLUTION);
  const col = Math.floor(pos.x / RESOLUTION);
  grid[row][col] = !grid[row][col];
  sound.cloneNode().play();
  renderGrid(grid);
});

// requestAnimationFrame によって一定間隔で更新・描画を行う
// NOTE: リフレッシュレートの高い画面では速く実行される (これを防ぐ場合は下記の例を参照)
// https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame
let lastTime = 0;
const fps = 60;
const interval = 10000 / fps;
function update(timestamp) {
  if (!lastTime) lastTime = timestamp;
  const deltaTime = timestamp - lastTime;

  if (deltaTime >= interval) {
    grid = updateGrid(grid);
    renderGrid(grid);
    lastTime = timestamp;
  }

  animationId = requestAnimationFrame(update);
}

startButton.addEventListener("click", () => {
  // 既にアニメーションが動いている場合は何もしない
  if (animationId) {
    return;
  }
  update();
});

pauseButton.addEventListener("click", () => {
  // アニメーションが停止している場合は何もしない
  if (!animationId) {
    return;
  }
  cancelAnimationFrame(animationId);
  animationId = null;
});

renderGrid(grid);
