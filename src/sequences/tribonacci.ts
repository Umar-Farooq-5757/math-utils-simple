export default function tribonacci(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer.");
  }

  if (n === 0) return 0;
  if (n === 1) return 0;
  if (n === 2) return 1;

  let a = 0;
  let b = 0;
  let c = 1;

  for (let i = 3; i <= n; i++) {
    const next = a + b + c;
    a = b;
    b = c;
    c = next;
  }

  return c;
}
