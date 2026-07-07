type ComplexNumber = {
  real: number;
  imaginary: number;
};

export default function complexDivide(
  a: ComplexNumber,
  b: ComplexNumber,
): ComplexNumber {
  const denominator = b.real * b.real + b.imaginary * b.imaginary;

  if (denominator === 0) {
    throw new Error("Cannot divide by the zero complex number.");
  }

  return {
    real: (a.real * b.real + a.imaginary * b.imaginary) / denominator,

    imaginary: (a.imaginary * b.real - a.real * b.imaginary) / denominator,
  };
}
