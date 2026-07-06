export default function wrap(value: number, min: number, max: number): number {
  if (min >= max) {
    throw new Error("min must be less than max.");
  }

  const range = max - min;

  return ((((value - min) % range) + range) % range) + min;
}
