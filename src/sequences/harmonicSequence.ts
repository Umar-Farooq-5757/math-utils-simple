export default function harmonicSequence(a: number, n: number): number[] {
  if (a === 0) {
    throw new Error("First term cannot be zero.");
  }

  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  const result: number[] = [];

  for (let i = 1; i <= n; i++) {
    result.push(a / i);
  }

  return result;
}
