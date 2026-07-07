export default function arithmeticSequence(
  a: number,
  d: number,
  n: number,
): number[] {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    result.push(a + i * d);
  }

  return result;
}
