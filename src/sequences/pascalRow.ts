/**
 * Generates the nth row of Pascal's Triangle.
 *
 * Row numbering starts at 0.
 *
 * Example:
 * pascalRow(4) -> [1, 4, 6, 4, 1]
 *
 * @param n Non-negative integer
 * @returns nth row of Pascal's Triangle
 */
export default function pascalRow(n: number): number[] {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer.");
  }

  const row: number[] = [1];

  for (let k = 1; k <= n; k++) {
    row[k] = (row[k - 1] * (n - k + 1)) / k;
  }

  return row;
}
