export default function scalarDivide(array: number[], scalar: number): number[] {
  if (scalar === 0) {
    throw new Error("Division by zero.");
  }

  return array.map(value => value / scalar);
}