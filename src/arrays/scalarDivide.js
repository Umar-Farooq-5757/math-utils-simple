export default function scalarDivide(array, scalar) {
  if (scalar === 0) {
    throw new Error("Division by zero.");
  }

  return array.map(value => value / scalar);
}