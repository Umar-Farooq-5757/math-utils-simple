import { ComplexNumber } from "./types/complexNumber.js";

export default function complexConjugate(z: ComplexNumber): ComplexNumber {
  return {
    real: z.real,
    imaginary: -z.imaginary,
  };
}
