export function updateGrid(grid, ROWS, COLS) {
    const nextGrid = grid.map((arr) => [...arr]);

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const aroundSell = [
                row > 0 && col > 0 ? grid[row - 1][col - 1] : false,
                row > 0 ? grid[row - 1][col] : false,
                row > 0 && col < COLS - 1 ? grid[row - 1][col + 1] : false,
                col > 0 ? grid[row][col - 1] : false,
                col < COLS - 1 ? grid[row][col + 1] : false,
                row < ROWS - 1 && col > 0 ? grid[row + 1][col - 1] : false,
                row < ROWS - 1 ? grid[row + 1][col] : false,
                row < ROWS - 1 && col < COLS - 1 ? grid[row + 1][col + 1] : false,
            ];

            const trueCount = aroundSell.filter((value) => value === true).length;
            if (grid[row][col] === false) {
                nextGrid[row][col] = trueCount === 3;
            } else {
                nextGrid[row][col] = trueCount === 2 || trueCount === 3;
            }
        }
    }
    return nextGrid;
}
