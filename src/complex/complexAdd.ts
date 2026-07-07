type ComplexNumber = {
  real: number;
  imaginary: number;
};

export default function complexAdd(
  a: ComplexNumber,
  b: ComplexNumber
): ComplexNumber {
  return {
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary,
  };
}