export default function lucas(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer.");
  }

  if (n === 0) return 2;
  if (n === 1) return 1;

  let previous = 2;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}
