import average from "./average.js";

export default function variance(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (array.length === 0) {
    throw new Error("Cannot calculate variance of an empty array.");
  }

  const mean = average(array);

  let sum = 0;

  for (const value of array) {
    sum += (value - mean) ** 2;
  }

  return sum / array.length;
}
