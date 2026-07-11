/**
 * Computes the signed Stirling number of the first kind s(n, k).
 *
 * Recurrence:
 * s(n,k) = s(n-1,k-1) - (n-1)s(n-1,k)
 *
 * @param n Non-negative integer
 * @param k Non-negative integer
 * @returns Signed Stirling number of the first kind
 */
export default function stirlingFirstKind(n: number, k: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer.");
  }

  if (!Number.isInteger(k) || k < 0) {
    throw new Error("k must be a non-negative integer.");
  }

  if (k > n) {
    return 0;
  }

  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    new Array(k + 1).fill(0),
  );

  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    const limit = Math.min(i, k);

    for (let j = 1; j <= limit; j++) {
      dp[i][j] = dp[i - 1][j - 1] - (i - 1) * dp[i - 1][j];
    }
  }

  return dp[n][k];
}
