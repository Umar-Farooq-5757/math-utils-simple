/**
 * Computes the Extended Euclidean Algorithm.
 *
 * Returns integers x and y such that:
 * ax + by = gcd(a, b)
 *
 * @param a - First integer.
 * @param b - Second integer.
 * @returns Object containing gcd, x, and y.
 */
export default function extendedGCD(
  a: number,
  b: number,
): {
  gcd: number;
  x: number;
  y: number;
} {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError("Inputs must be integers.");
  }

  let oldR = Math.abs(a);
  let r = Math.abs(b);

  let oldS = 1;
  let s = 0;

  let oldT = 0;
  let t = 1;

  while (r !== 0) {
    const quotient = Math.floor(oldR / r);

    [oldR, r] = [r, oldR - quotient * r];
    [oldS, s] = [s, oldS - quotient * s];
    [oldT, t] = [t, oldT - quotient * t];
  }

  return {
    gcd: oldR,
    x: a < 0 ? -oldS : oldS,
    y: b < 0 ? -oldT : oldT,
  };
}
