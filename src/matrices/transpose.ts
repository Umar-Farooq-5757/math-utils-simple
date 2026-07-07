import validateMatrix from "./utils/validateMatrix.js";

export default function transpose(matrix: number[][]): number[][] {
  validateMatrix(matrix);

  const rows = matrix.length;
  const cols = matrix[0].length;

  const result: number[][] = [];

  for (let col = 0; col < cols; col++) {
    result[col] = [];

    for (let row = 0; row < rows; row++) {
      result[col][row] = matrix[row][col];
    }
  }

  return result;
}
