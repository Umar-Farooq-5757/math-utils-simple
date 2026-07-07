export default function sumArithmeticSeries(
  a: number,
  d: number,
  n: number,
): number {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  return (n / 2) * (2 * a + (n - 1) * d);
}
