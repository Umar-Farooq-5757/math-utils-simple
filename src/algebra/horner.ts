export default function horner(coefficients: number[], x: number): number {
  if (coefficients.length === 0) {
    throw new Error("Coefficient array cannot be empty.");
  }

  let result = coefficients[0];

  for (let i = 1; i < coefficients.length; i++) {
    result = result * x + coefficients[i];
  }

  return result;
}
