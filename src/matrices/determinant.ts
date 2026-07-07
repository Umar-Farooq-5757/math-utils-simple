type Matrix = number[][];
import validateSquareMatrix from "./utils/validateSquareMatrix.js";

export default function determinant(matrix: Matrix): number {
  validateSquareMatrix(matrix);

  const n = matrix.length;

  // Copy so the original matrix isn't modified
  const m: Matrix = matrix.map((row) => [...row]);

  let det = 1;
  let sign = 1;

  for (let i = 0; i < n; i++) {
    // Find pivot row
    let pivot = i;

    while (pivot < n && Math.abs(m[pivot][i]) < Number.EPSILON) {
      pivot++;
    }

    // Singular matrix
    if (pivot === n) {
      return 0;
    }

    // Swap rows if necessary
    if (pivot !== i) {
      [m[i], m[pivot]] = [m[pivot], m[i]];
      sign *= -1;
    }

    const pivotValue = m[i][i];
    det *= pivotValue;

    // Eliminate below
    for (let row = i + 1; row < n; row++) {
      const factor = m[row][i] / pivotValue;

      for (let col = i; col < n; col++) {
        m[row][col] -= factor * m[i][col];
      }
    }
  }

  return det * sign;
}
