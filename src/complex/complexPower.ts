import { ComplexNumber } from "./types/complexNumber.js";

export default function complexPower(
  z: ComplexNumber,
  n: number,
): ComplexNumber {
  if (!Number.isInteger(n)) {
    throw new Error("Exponent must be an integer.");
  }

  const r = Math.hypot(z.real, z.imaginary);
  const theta = Math.atan2(z.imaginary, z.real);

  const magnitude = Math.pow(r, n);
  const angle = theta * n;

  return {
    real: magnitude * Math.cos(angle),
    imaginary: magnitude * Math.sin(angle),
  };
}
