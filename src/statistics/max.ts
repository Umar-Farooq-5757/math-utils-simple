export default function max(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (array.length === 0) {
    throw new Error("Cannot find maximum of an empty array.");
  }

  let largest = array[0];

  for (const value of array) {
    if (value > largest) {
      largest = value;
    }
  }

  return largest;
}
