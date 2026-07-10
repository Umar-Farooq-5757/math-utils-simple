import { ComplexNumber } from "./types/complexNumber.js";

export default function complexArgument(z: ComplexNumber): number {
  return Math.atan2(z.imaginary, z.real);
}
