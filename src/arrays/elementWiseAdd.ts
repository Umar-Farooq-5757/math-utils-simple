export default function elementWiseAdd(a: number[], b: number[]): number[] {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new TypeError("Expected two arrays.");
  }

  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length.");
  }

  return a.map((value: number, index: number): number => value + b[index]);
}