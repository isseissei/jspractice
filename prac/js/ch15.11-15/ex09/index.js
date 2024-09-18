
// WebSocket接続の初期化
const ws = new WebSocket('ws://localhost:3003');
const gridElement = document.getElementById('grid');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');

function createGrid(grid) {
  gridElement.innerHTML = '';
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      if (cell) {
        cellElement.classList.add('alive');
      }
      cellElement.addEventListener('click', () => {
        ws.send(JSON.stringify({ type: 'toggle', row: rowIndex, col: colIndex }));
      });
      gridElement.appendChild(cellElement);
    });
  });
}

// サーバからのメッセージを受信
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  switch (data.type) {
    case 'update':
      createGrid(data.grid);
      break;
    case 'pause':
      console.log('Game paused');
      break;
    case 'start':
      console.log('Game started');
      break;
  }
};

// ゲームの開始・再開
startButton.addEventListener('click', () => {
  ws.send(JSON.stringify({ type: 'start' }));
  console.log("start")
});

// ゲームの一時停止
pauseButton.addEventListener('click', () => {
  ws.send(JSON.stringify({ type: 'pause' }));
});
