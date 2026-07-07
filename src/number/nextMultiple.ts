export default function nextMultiple(value: number, multiple: number): number {
  if (multiple === 0) {
    throw new Error("Multiple cannot be zero.");
  }

  return Math.ceil(value / multiple) * multiple;
}
