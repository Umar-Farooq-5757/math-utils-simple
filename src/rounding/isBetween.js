export default function isBetween(value, min, max, inclusive = true) {
  if (min > max) {
    throw new Error("min cannot be greater than max.");
  }

  if (inclusive) {
    return value >= min && value <= max;
  }

  return value > min && value < max;
}