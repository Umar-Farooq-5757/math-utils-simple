export default function nthGeometricTerm(
  a: number,
  r: number,
  n: number,
): number {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  return a * Math.pow(r, n - 1);
}
