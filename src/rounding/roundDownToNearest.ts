export default function roundDownToNearest(
  value: number,
  multiple: number,
): number {
  if (multiple === 0) {
    throw new Error("multiple cannot be zero.");
  }

  return Math.floor(value / multiple) * multiple;
}
