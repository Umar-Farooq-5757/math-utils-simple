export default function evaluatePolynomial(
  coefficients: number[],
  x: number,
): number {
  if (coefficients.length === 0) {
    throw new Error("Coefficient array cannot be empty.");
  }

  let result = 0;
  const degree = coefficients.length - 1;

  for (let i = 0; i < coefficients.length; i++) {
    result += coefficients[i] * Math.pow(x, degree - i);
  }

  return result;
}
