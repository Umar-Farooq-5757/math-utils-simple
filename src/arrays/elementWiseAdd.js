export default function elementWiseAdd(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new TypeError("Expected two arrays.");
  }

  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length.");
  }

  return a.map((value, index) => value + b[index]);
}