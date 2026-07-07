type Matrix = number[][];

export default function identityMatrix(size: number): Matrix {
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error("Size must be a positive integer.");
  }

  const matrix: Matrix = [];

  for (let i = 0; i < size; i++) {
    matrix[i] = [];

    for (let j = 0; j < size; j++) {
      matrix[i][j] = i === j ? 1 : 0;
    }
  }

  return matrix;
}
