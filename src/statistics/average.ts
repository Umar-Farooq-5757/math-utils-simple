import sum from "./sum.js";

export default function average(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (array.length === 0) {
    throw new Error("Cannot calculate average of an empty array.");
  }

  return sum(array) / array.length;
}
