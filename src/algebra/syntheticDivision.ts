export interface SyntheticDivisionResult {
  quotient: number[];
  remainder: number;
}

export default function syntheticDivision(
  coefficients: number[],
  divisor: number,
): SyntheticDivisionResult {
  if (coefficients.length < 2) {
    throw new Error("Polynomial must have degree of at least 1.");
  }

  const quotient: number[] = [];
  let current = coefficients[0];

  quotient.push(current);

  for (let i = 1; i < coefficients.length - 1; i++) {
    current = coefficients[i] + current * divisor;
    quotient.push(current);
  }

  const remainder = coefficients[coefficients.length - 1] + current * divisor;

  return {
    quotient,
    remainder,
  };
}
