import { ComplexNumber } from "./types/complexNumber.js";

export default function complexLog(z: ComplexNumber): ComplexNumber {
  if (z.real === 0 && z.imaginary === 0) {
    throw new Error("Logarithm of zero is undefined.");
  }

  return {
    real: Math.log(Math.hypot(z.real, z.imaginary)),
    imaginary: Math.atan2(z.imaginary, z.real),
  };
}
