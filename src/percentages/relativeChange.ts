export default function relativeChange(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Reference value cannot be zero.");
  }

  return ((a - b) / b) * 100;
}
