import isPerfectSquare from "./isPerfectSquare.js";

export default function isFibonacciNumber(n: number): boolean {
  if (!Number.isInteger(n) || n < 0) {
    return false;
  }

  return (
    isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4)
  );
}