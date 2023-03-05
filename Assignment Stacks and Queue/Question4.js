function findShortPath(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const queue = [];
    const visited = [];

    for (let i = 0; i < row; i++) {
        visited[i] = [];
        for (let j = 0; j < col; j++) {
          visited[i][j] = false;
        }
      }
}  