import { ComplexNumber } from "./types/complexNumber.js";

export default function complexFromPolar(
  radius: number,
  theta: number,
): ComplexNumber {
  if (radius < 0) {
    throw new Error("Radius cannot be negative.");
  }

  return {
    real: radius * Math.cos(theta),
    imaginary: radius * Math.sin(theta),
  };
}
