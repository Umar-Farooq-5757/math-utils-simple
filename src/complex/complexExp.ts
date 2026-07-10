import { ComplexNumber } from "./types/complexNumber.js";

export default function complexExp(z: ComplexNumber): ComplexNumber {
  const expReal = Math.exp(z.real);

  return {
    real: expReal * Math.cos(z.imaginary),
    imaginary: expReal * Math.sin(z.imaginary),
  };
}
