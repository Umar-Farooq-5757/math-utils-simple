export default function nominalRate(
  effectiveRate: number,
  compoundsPerYear: number,
): number {
  if (compoundsPerYear <= 0) {
    throw new Error("Compounds per year must be greater than zero.");
  }

  return (
    compoundsPerYear *
    (Math.pow(1 + effectiveRate / 100, 1 / compoundsPerYear) - 1) *
    100
  );
}
