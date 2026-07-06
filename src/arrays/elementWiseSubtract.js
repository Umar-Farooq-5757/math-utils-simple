export default function elementWiseSubtract(a, b) {
  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length.");
  }

  return a.map((value, index) => value - b[index]);
}