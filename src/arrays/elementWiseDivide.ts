export default function elementWiseDivide(a: number[], b: number[]): number[] {
  if (a.length !== b.length) {
    throw new Error("Arrays must have the same length.");
  }

  return a.map((value, index) => {
    if (b[index] === 0) {
      throw new Error("Division by zero.");
    }

    return value / b[index];
  });
}
