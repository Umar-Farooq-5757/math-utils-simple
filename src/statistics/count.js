export default function count(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  return array.length;
}