export default function previousMultiple(
  value: number,
  multiple: number,
): number {
  if (multiple === 0) {
    throw new Error("Multiple cannot be zero.");
  }

  return Math.floor(value / multiple) * multiple;
}
