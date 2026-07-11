/**
 * Computes the nth Bell number.
 *
 * Bell numbers count the number of partitions of a set.
 *
 * Uses the Bell Triangle algorithm.
 *
 * @param n Non-negative integer
 * @returns nth Bell number
 */
export default function bell(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer.");
  }

  const bellTriangle: number[][] = Array.from({ length: n + 1 }, () => []);

  bellTriangle[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    bellTriangle[i][0] = bellTriangle[i - 1][i - 1];

    for (let j = 1; j <= i; j++) {
      bellTriangle[i][j] = bellTriangle[i - 1][j - 1] + bellTriangle[i][j - 1];
    }
  }

  return bellTriangle[n][0];
}
