export default function isPerfectSquare(n: number): boolean {
  if (n < 0) return false;

  return Number.isInteger(Math.sqrt(n));
}
