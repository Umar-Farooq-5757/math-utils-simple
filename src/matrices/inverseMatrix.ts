type Matrix = number[][];
import validateSquareMatrix from "./utils/validateSquareMatrix.js";

export default function inverseMatrix(matrix: Matrix): Matrix {
  validateSquareMatrix(matrix);

  const n = matrix.length;

  // Create augmented matrix [A | I]
  const augmented: Matrix = matrix.map((row, i) => [
    ...row,
    ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)),
  ]);

  for (let col = 0; col < n; col++) {
    // Find pivot row
    let pivot = col;

    while (pivot < n && Math.abs(augmented[pivot][col]) < Number.EPSILON) {
      pivot++;
    }

    if (pivot === n) {
      throw new Error("Matrix is singular and cannot be inverted.");
    }

    // Swap rows
    if (pivot !== col) {
      [augmented[col], augmented[pivot]] = [augmented[pivot], augmented[col]];
    }

    // Normalize pivot row
    const pivotValue = augmented[col][col];

    for (let j = 0; j < 2 * n; j++) {
      augmented[col][j] /= pivotValue;
    }

    // Eliminate all other rows
    for (let row = 0; row < n; row++) {
      if (row === col) continue;

      const factor = augmented[row][col];

      for (let j = 0; j < 2 * n; j++) {
        augmented[row][j] -= factor * augmented[col][j];
      }
    }
  }

  // Extract inverse
  return augmented.map((row) => row.slice(n));
}
