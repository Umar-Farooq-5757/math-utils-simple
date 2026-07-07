import validateMatrix from "./validateMatrix.js";
type Matrix = number[][];

export default function validateSquareMatrix(matrix: Matrix): void {
  validateMatrix(matrix);

  if (matrix.length !== matrix[0].length) {
    throw new Error("Matrix must be square.");
  }
}
