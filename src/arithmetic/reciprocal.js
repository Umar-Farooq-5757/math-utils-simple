export default function reciprocal(n) {
  if (n === 0) throw new Error("Cannot calculate reciprocal of zero.");
  return 1 / n;
}