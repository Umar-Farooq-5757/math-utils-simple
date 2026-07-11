/**
 * Generates the Collatz sequence.
 *
 * Rules:
 * n even -> n / 2
 * n odd  -> 3n + 1
 *
 * Sequence always ends at 1.
 *
 * @param n Positive integer
 * @returns Collatz sequence
 */
export default function collatz(n: number): number[] {
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
