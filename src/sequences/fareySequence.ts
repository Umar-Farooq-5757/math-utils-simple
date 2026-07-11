/**
 * Represents a fraction.
 */
export interface Fraction {
  numerator: number;
  denominator: number;
}

/**
 * Computes the Farey sequence of order n.
 *
 * Example (n = 5):
 * 0/1, 1/5, 1/4, 1/3, 2/5, ...
 *
 * @param n Positive integer
 * @returns Farey sequence
 */
export default function fareySequence(n: number): Fraction[] {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  const result: Fraction[] = [];

  let a = 0;
  let b = 1;
  let c = 1;
  let d = n;

  result.push({ numerator: a, denominator: b });

  while (c <= n) {
    result.push({ numerator: c, denominator: d });

    const k = Math.floor((n + b) / d);

    const e = k * c - a;
    const f = k * d - b;

    a = c;
    b = d;
    c = e;
    d = f;
  }

  return result;
}
