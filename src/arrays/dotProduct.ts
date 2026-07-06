export default function dotProduct(a: number[], b: number[]): number {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new TypeError("Expected two arrays.");
  }

  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length.");
  }

  let result: number = 0;

  for (let i: number = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}