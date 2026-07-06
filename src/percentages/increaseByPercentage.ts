export default function increaseByPercentage(
  value: number,
  percent: number,
): number {
  return value * (1 + percent / 100);
}
