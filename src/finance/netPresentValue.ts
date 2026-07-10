export default function netPresentValue(
  rate: number,
  cashFlows: number[],
): number {
  return cashFlows.reduce(
    (sum, cashFlow, index) => sum + cashFlow / Math.pow(1 + rate / 100, index),
    0,
  );
}
