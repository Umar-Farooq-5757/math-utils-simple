export default function normalizeVector(array: number[]): number[] {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  const magnitude = Math.sqrt(
    array.reduce((sum, value) => sum + value * value, 0)
  );

  if (magnitude === 0) {
    throw new Error("Cannot normalize a zero vector.");
  }

  return array.map(value => value / magnitude);
}