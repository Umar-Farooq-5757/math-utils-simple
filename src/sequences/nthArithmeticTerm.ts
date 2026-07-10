export default function nthArithmeticTerm(
  a: number,
  d: number,
  n: number,
): number {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  return a + (n - 1) * d;
}
