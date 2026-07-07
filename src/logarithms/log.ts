export default function log(base: number, n: number): number {
  if (base <= 0 || base === 1) {
    throw new Error("Base must be greater than zero and not equal to 1.");
  }

  if (n <= 0) {
    throw new Error("Input must be greater than zero.");
  }

  return Math.log(n) / Math.log(base);
}
