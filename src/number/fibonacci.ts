export default function fibonacci(count: number): number[] {
  if (!Number.isInteger(count) || count < 1) {
    throw new Error("Count must be a positive integer.");
  }

  if (count === 1) return [0];

  const sequence = [0, 1];

  while (sequence.length < count) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2],
    );
  }

  return sequence;
}
