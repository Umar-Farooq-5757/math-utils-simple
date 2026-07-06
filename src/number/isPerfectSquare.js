export default function isPerfectSquare(n) {
  if (n < 0) return false;

  return Number.isInteger(Math.sqrt(n));
}