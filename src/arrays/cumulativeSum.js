export default function cumulativeSum(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  const result = [];
  let sum = 0;

  for (const value of array) {
    sum += value;
    result.push(sum);
  }

  return result;
}