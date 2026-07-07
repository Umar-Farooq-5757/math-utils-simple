type Matrix = number[][];
import validateSquareMatrix from "./utils/validateSquareMatrix.js";

export default function trace(matrix: Matrix): number {
  validateSquareMatrix(matrix);

  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }

  return sum;
}
