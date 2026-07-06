export default function solveLinear(
  a: number,
  b: number
): number {
  if (a === 0) {
    throw new Error("Coefficient 'a' cannot be zero.");
  }

  return -b / a;
}