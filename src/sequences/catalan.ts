/**
 * Computes the nth Catalan number.
 *
 * Formula:
 * C(n) = (2n)! / ((n + 1)! * n!)
 *
 * Uses dynamic programming for efficiency.
 *
 * @param n Non-negative integer
 * @returns nth Catalan number
 */
export default function catalan(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer.");
  }

  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }

  return dp[n];
}
