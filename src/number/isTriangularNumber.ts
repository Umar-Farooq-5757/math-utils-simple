export default function isTriangularNumber(n: number): boolean {
  if (!Number.isInteger(n) || n < 0) {
    return false;
  }

  return Number.isInteger((Math.sqrt(8 * n + 1) - 1) / 2);
}
