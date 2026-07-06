export default function frequency(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  const result = {};

  for (const value of array) {
    result[value] = (result[value] || 0) + 1;
  }

  return result;
}