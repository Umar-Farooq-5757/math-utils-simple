export default function frequency(
  array: (string | number)[],
): Record<string | number, number> {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  const result: Record<string | number, number> = {};

  for (const value of array) {
    result[value] = (result[value] || 0) + 1;
  }

  return result;
}
