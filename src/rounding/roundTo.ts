export default function roundTo(n: number, decimals: number = 0): number {
  const factor = 10 ** decimals;
  return Math.round(n * factor) / factor;
}
