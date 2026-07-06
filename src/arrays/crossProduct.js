export default function crossProduct(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new TypeError("Expected two arrays.");
  }

  if (a.length !== 3 || b.length !== 3) {
    throw new Error("Cross product requires two 3-dimensional vectors.");
  }

  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}