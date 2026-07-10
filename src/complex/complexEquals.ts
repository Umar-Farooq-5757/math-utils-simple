import { ComplexNumber } from "./types/complexNumber.js";

export default function complexEquals(
  a: ComplexNumber,
  b: ComplexNumber,
  epsilon: number = 1e-10,
): boolean {
  return (
    Math.abs(a.real - b.real) <= epsilon &&
    Math.abs(a.imaginary - b.imaginary) <= epsilon
  );
}
