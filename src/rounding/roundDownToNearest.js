export default function roundDownToNearest(value, multiple) {
  if (multiple === 0) {
    throw new Error("multiple cannot be zero.");
  }

  return Math.floor(value / multiple) * multiple;
}