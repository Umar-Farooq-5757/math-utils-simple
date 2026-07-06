export default function reciprocal(n: number): number {
  if (n === 0) throw new Error("Cannot calculate reciprocal of zero.");
  return 1 / n;
}
