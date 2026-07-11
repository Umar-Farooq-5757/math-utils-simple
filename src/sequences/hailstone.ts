/**
 * Generates the Hailstone sequence.
 *
 * This is mathematically identical to the Collatz sequence.
 *
 * @param n Positive integer
 * @returns Hailstone sequence
 */
export default function hailstone(n: number): number[] {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  const sequence: number[] = [];

  while (true) {
    sequence.push(n);

    if (n === 1) {
      break;
    }

    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
  }

  return sequence;
}
