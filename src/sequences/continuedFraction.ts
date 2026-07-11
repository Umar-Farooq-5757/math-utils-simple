/**
 * Computes the simple continued fraction representation of a number.
 *
 * Example:
 * continuedFraction(3.245)
 * -> [3, 4, 12, ...]
 *
 * The algorithm stops when:
 * - the remainder becomes sufficiently small, or
 * - maxIterations is reached.
 *
 * @param value Number to convert
 * @param maxIterations Maximum iterations (default 20)
 * @param tolerance Precision threshold (default 1e-12)
 * @returns Continued fraction coefficients
 */
export default function continuedFraction(
  value: number,
  maxIterations = 20,
  tolerance = 1e-12,
): number[] {
  if (!Number.isFinite(value)) {
    throw new Error("value must be a finite number.");
  }

  if (!Number.isInteger(maxIterations) || maxIterations <= 0) {
    throw new Error("maxIterations must be a positive integer.");
  }

  if (tolerance <= 0) {
    throw new Error("tolerance must be positive.");
  }

  const coefficients: number[] = [];

  let x = value;

  for (let i = 0; i < maxIterations; i++) {
    const integer = Math.floor(x);
    coefficients.push(integer);

    const fractional = x - integer;

    if (Math.abs(fractional) < tolerance) {
      break;
    }

    x = 1 / fractional;
  }

  return coefficients;
}
