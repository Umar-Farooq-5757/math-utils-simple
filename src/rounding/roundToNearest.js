export default function roundToNearest(value, multiple) {
  if (multiple === 0) {
    throw new Error("multiple cannot be zero.");
  }

  return Math.round(value / multiple) * multiple;
}