export default function presentValue(
  future: number,
  annualRate: number,
  years: number,
): number {
  return future / Math.pow(1 + annualRate / 100, years);
}
