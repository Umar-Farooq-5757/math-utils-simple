export default function permutation(n: number, r: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(r)) {
    throw new Error("n and r must be integers.");
  }

  if (n < 0 || r < 0) {
    throw new Error("n and r must be non-negative.");
  }

  if (r > n) {
    throw new Error("r cannot be greater than n.");
  }

  if (r === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 0; i < r; i++) {
    result *= n - i;
  }

  return result;
}
