export default function sqrt(n: number): number {
  if (n < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(n);
}
