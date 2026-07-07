export default function ln(n: number): number {
  if (n <= 0) {
    throw new Error("Input must be greater than zero.");
  }

  return Math.log(n);
}
