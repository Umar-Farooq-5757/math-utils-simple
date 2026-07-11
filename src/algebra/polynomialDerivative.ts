export default function polynomialDerivative(coefficients: number[]): number[] {
  if (coefficients.length === 0) {
    throw new Error("Coefficient array cannot be empty.");
  }

  if (coefficients.length === 1) {
    return [0];
  }

  const degree = coefficients.length - 1;
  const derivative: number[] = [];

  for (let i = 0; i < degree; i++) {
    derivative.push(coefficients[i] * (degree - i));
  }

  return derivative;
}
