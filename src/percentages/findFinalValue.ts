export default function findFinalValue(
  original: number,
  percent: number,
): number {
  return original * (1 + percent / 100);
}
