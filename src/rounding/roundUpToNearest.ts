export default function roundUpToNearest(
  value: number,
  multiple: number,
): number {
  if (multiple === 0) {
    throw new Error("multiple cannot be zero.");
  }

  return Math.ceil(value / multiple) * multiple;
}
