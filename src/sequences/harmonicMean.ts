export default function harmonicMean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty.");
  }

  let reciprocalSum = 0;

  for (const number of numbers) {
    if (number === 0) {
      throw new Error("Array cannot contain zero.");
    }

    reciprocalSum += 1 / number;
  }

  return numbers.length / reciprocalSum;
}
