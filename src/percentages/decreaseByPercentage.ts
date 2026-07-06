export default function decreaseByPercentage(
  value: number,
  percent: number,
): number {
  return value * (1 - percent / 100);
}
