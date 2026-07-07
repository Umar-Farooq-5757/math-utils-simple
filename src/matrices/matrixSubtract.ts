import validateMatrix from "./utils/validateMatrix.js";

type Matrix = number[][];

export default function matrixSubtract(a: Matrix, b: Matrix): Matrix {
  validateMatrix(a);
  validateMatrix(b);

  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new Error("Matrices must have the same dimensions.");
  }

  if (a.length === 0) {
    return [];
  }

  if (a[0].length !== b[0].length) {
    throw new Error("Matrices must have the same dimensions.");
  }

  return a.map((row, i) => row.map((value, j) => value - b[i][j]));
}
