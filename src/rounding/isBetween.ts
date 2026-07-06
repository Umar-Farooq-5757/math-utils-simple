export default function isBetween(
  value: number,
  min: number,
  max: number,
  inclusive: boolean = true,
): boolean {
  if (min > max) {
    throw new Error("min cannot be greater than max.");
  }

  if (inclusive) {
    return value >= min && value <= max;
  }

  return value > min && value < max;
}
