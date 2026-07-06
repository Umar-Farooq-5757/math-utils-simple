export default function transpose(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];

  for (let col = 0; col < cols; col++) {
    result[col] = [];

    for (let row = 0; row < rows; row++) {
      result[col][row] = matrix[row][col];
    }
  }

  return result;
}