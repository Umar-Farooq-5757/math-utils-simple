export default function wrap(value, min, max) {
  if (min >= max) {
    throw new Error("min must be less than max.");
  }

  const range = max - min;

  return ((((value - min) % range) + range) % range) + min;
}