type ComplexNumber = {
  real: number;
  imaginary: number;
};

export default function complexMagnitude(z: ComplexNumber): number {
  return Math.hypot(z.real, z.imaginary);
}
