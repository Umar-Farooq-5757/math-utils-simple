import { ComplexNumber } from "./types/complexNumber.js";

export default function complexSqrt(z: ComplexNumber): ComplexNumber {
  const r = Math.hypot(z.real, z.imaginary);
  const theta = Math.atan2(z.imaginary, z.real);

  const rootR = Math.sqrt(r);
  const rootTheta = theta / 2;

  return {
    real: rootR * Math.cos(rootTheta),
    imaginary: rootR * Math.sin(rootTheta),
  };
}
