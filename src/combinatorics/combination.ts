export default function combination(n: number, r: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(r)) {
    throw new Error("n and r must be integers.");
  }

  if (n < 0 || r < 0) {
    throw new Error("n and r must be non-negative.");
  }

  if (r > n) {
    throw new Error("r cannot be greater than n.");
  }

  r = Math.min(r, n - r);

  let result = 1;

  for (let i = 1; i <= r; i++) {
    result *= n - r + i;
    result /= i;
  }

  return result;
}
