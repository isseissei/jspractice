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

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  switch (data.type) {
    case 'update':
      createGrid(data.grid);
      break;
    case 'pause':
      break;
    case 'start':
      break;
  }
};

startButton.addEventListener('click', () => {
  ws.send(JSON.stringify({ type: 'start' }));
  console.log("start")
});

pauseButton.addEventListener('click', () => {
  ws.send(JSON.stringify({ type: 'pause' }));
});
