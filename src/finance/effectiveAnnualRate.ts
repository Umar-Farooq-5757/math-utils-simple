export default function effectiveAnnualRate(
  nominalRate: number,
  compoundsPerYear: number,
): number {
  if (compoundsPerYear <= 0) {
    throw new Error("Compounds per year must be greater than zero.");
  }

  return (
    (Math.pow(1 + nominalRate / 100 / compoundsPerYear, compoundsPerYear) - 1) *
    100
  );
}
