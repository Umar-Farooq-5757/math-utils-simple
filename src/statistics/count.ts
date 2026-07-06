export default function count(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  return array.length;
}
