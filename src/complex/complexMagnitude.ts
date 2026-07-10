import { ComplexNumber } from "./types/complexNumber.js";

export default function complexMagnitude(z: ComplexNumber): number {
  return Math.hypot(z.real, z.imaginary);
}
