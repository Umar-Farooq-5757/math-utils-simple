export default function log2(n: number): number {
  if (n <= 0) {
    throw new Error("Input must be greater than zero.");
  }

  return Math.log2(n);
}
