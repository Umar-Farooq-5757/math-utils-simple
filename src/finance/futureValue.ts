export default function futureValue(
  principal: number,
  annualRate: number,
  years: number,
): number {
  return principal * Math.pow(1 + annualRate / 100, years);
}
