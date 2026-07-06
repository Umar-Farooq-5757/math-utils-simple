export default function min(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (array.length === 0) {
    throw new Error("Cannot find minimum of an empty array.");
  }

  let smallest = array[0];

  for (const value of array) {
    if (value < smallest) {
      smallest = value;
    }
  }

  return smallest;
}