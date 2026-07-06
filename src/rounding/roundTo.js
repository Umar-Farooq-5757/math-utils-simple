export default function roundTo(n, decimals = 0) {
  const factor = 10 ** decimals;
  return Math.round(n * factor) / factor;
}