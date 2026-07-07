export default function sumGeometricSeries(
  a: number,
  r: number,
  n: number,
): number {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  if (r === 1) {
    return a * n;
  }

  return (a * (1 - Math.pow(r, n))) / (1 - r);
}
