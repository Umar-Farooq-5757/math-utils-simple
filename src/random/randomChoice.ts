export default function randomChoice<T>(array: T[]): T {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (array.length === 0) {
    throw new Error("Cannot choose from an empty array.");
  }

  return array[Math.floor(Math.random() * array.length)];
}