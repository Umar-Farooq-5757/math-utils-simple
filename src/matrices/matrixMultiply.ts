import validateMatrix from "./utils/validateMatrix.js";

type Matrix = number[][];

export default function matrixMultiply(a: Matrix, b: Matrix): Matrix {
  validateMatrix(a);
  validateMatrix(b);
  const aCols = a[0].length;
  const bRows = b.length;
  const bCols = b[0].length;

  if (aCols !== bRows) {
    throw new Error(
      "Number of columns in the first matrix must equal the number of rows in the second matrix.",
    );
  }

  const result: Matrix = [];

  for (let i = 0; i < a.length; i++) {
    result[i] = [];

    for (let j = 0; j < bCols; j++) {
      let sum = 0;

      for (let k = 0; k < aCols; k++) {
        sum += a[i][k] * b[k][j];
      }

      result[i][j] = sum;
    }
  }

  return result;
}
