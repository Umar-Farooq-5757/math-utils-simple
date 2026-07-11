/**
 * Computes the Stirling number of the second kind S(n, k).
 *
 * Recurrence:
 * S(n,k) = k*S(n-1,k) + S(n-1,k-1)
 *
 * @param n Non-negative integer
 * @param k Non-negative integer
 * @returns Stirling number of the second kind
 */
export default function stirlingSecondKind(n: number, k: number): number {
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
      dp[i][j] = j * dp[i - 1][j] + dp[i - 1][j - 1];
    }
  }

  return dp[n][k];
}
