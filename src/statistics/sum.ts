export default function sum(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  return array.reduce((total, value) => total + value, 0);
}
