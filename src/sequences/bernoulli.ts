/**
 * Computes the nth Bernoulli number.
 *
 * Uses the Akiyama–Tanigawa algorithm.
 *
 * @param n Non-negative integer
 * @returns nth Bernoulli number
 */
export default function bernoulli(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer.");
  }

  const A: number[] = new Array(n + 1).fill(0);

  for (let m = 0; m <= n; m++) {
    A[m] = 1 / (m + 1);

    for (let j = m; j >= 1; j--) {
      A[j - 1] = j * (A[j - 1] - A[j]);
    }
  }

  return n === 1 ? -A[0] : A[0];
}
