export default function cumulativeSum(array: unknown): number[] {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  const result: number[] = [];
  let sum: number = 0;

  for (const value of array) {
    if (typeof value !== "number") {
      throw new TypeError("Expected an array of numbers.");
    }
    sum += value;
    result.push(sum);
  }

  return result;
}