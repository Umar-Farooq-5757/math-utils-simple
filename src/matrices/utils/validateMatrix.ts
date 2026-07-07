type Matrix = number[][];

export default function validateMatrix(matrix: Matrix): void {
  if (!Array.isArray(matrix)) {
    throw new TypeError("Expected a matrix.");
  }

  if (matrix.length === 0) {
    throw new Error("Matrix cannot be empty.");
  }

  if (!Array.isArray(matrix[0])) {
    throw new TypeError("Expected a 2-dimensional matrix.");
  }

  const columns = matrix[0].length;

  if (columns === 0) {
    throw new Error("Matrix cannot have empty rows.");
  }

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    if (!Array.isArray(row)) {
      throw new TypeError("Expected a 2-dimensional matrix.");
    }

    if (row.length !== columns) {
      throw new Error(
        "All rows in the matrix must have the same number of columns.",
      );
    }

    for (let j = 0; j < row.length; j++) {
      const value = row[j];

      if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new TypeError(`Invalid number at row ${i}, column ${j}.`);
      }
    }
  }
}
