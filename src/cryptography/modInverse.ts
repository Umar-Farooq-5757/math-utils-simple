import extendedGCD from "./extendedGCD.js";

/**
 * Computes the modular multiplicative inverse.
 *
 * Finds x such that:
 * (a × x) mod m = 1
 *
 * @param a - Integer.
 * @param m - Modulus (must be > 1).
 * @returns Modular inverse.
 */
export default function modInverse(a: number, m: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(m)) {
    throw new TypeError("Arguments must be integers.");
  }

  if (m <= 1) {
    throw new RangeError("Modulus must be greater than 1.");
  }

  const { gcd, x } = extendedGCD(a, m);

  if (gcd !== 1) {
    throw new Error("Modular inverse does not exist.");
  }

  return ((x % m) + m) % m;
}
