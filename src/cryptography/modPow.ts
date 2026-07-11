/**
 * Performs fast modular exponentiation.
 *
 * Computes:
 * (base^exponent) mod modulus
 *
 * using binary exponentiation.
 *
 * @param base - Base integer.
 * @param exponent - Non-negative exponent.
 * @param modulus - Positive modulus.
 * @returns Modular exponentiation result.
 */
export default function modPow(
  base: number,
  exponent: number,
  modulus: number,
): number {
  if (
    !Number.isInteger(base) ||
    !Number.isInteger(exponent) ||
    !Number.isInteger(modulus)
  ) {
    throw new TypeError("Arguments must be integers.");
  }

  if (modulus <= 0) {
    throw new RangeError("Modulus must be positive.");
  }

  if (exponent < 0) {
    throw new RangeError("Exponent must be non-negative.");
  }

  if (modulus === 1) {
    return 0;
  }

  let result = 1;
  let b = ((base % modulus) + modulus) % modulus;
  let e = exponent;

  while (e > 0) {
    if (e & 1) {
      result = (result * b) % modulus;
    }

    b = (b * b) % modulus;
    e >>= 1;
  }

  return result;
}
