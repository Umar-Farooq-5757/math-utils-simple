export default function polynomialIntegral(
  coefficients: number[],
  constant = 0,
): number[] {
  if (coefficients.length === 0) {
    throw new Error("Coefficient array cannot be empty.");
  }

  const degree = coefficients.length;
  const integral: number[] = [];

  for (let i = 0; i < coefficients.length; i++) {
    integral.push(coefficients[i] / (degree - i));
  }

  integral.push(constant);

  return integral;
}
