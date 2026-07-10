import { ComplexNumber } from "./types/complexNumber.js";

export default function complexToPolar(z: ComplexNumber): {
  radius: number;
  theta: number;
} {
  return {
    radius: Math.hypot(z.real, z.imaginary),
    theta: Math.atan2(z.imaginary, z.real),
  };
}
