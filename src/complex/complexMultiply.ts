type ComplexNumber = {
  real: number;
  imaginary: number;
};

export default function complexMultiply(
  a: ComplexNumber,
  b: ComplexNumber,
): ComplexNumber {
  return {
    real: a.real * b.real - a.imaginary * b.imaginary,

    imaginary: a.real * b.imaginary + a.imaginary * b.real,
  };
}
