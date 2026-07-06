export default function roundToNearest(
  value: number,
  multiple: number,
): number {
  if (multiple === 0) {
    throw new Error("multiple cannot be zero.");
  }

  return Math.round(value / multiple) * multiple;
}
