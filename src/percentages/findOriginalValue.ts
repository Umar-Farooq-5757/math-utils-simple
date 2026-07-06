export default function findOriginalValue(
  finalValue: number,
  percentIncrease: number,
): number {
  if (percentIncrease === -100) {
    throw new Error("Percent increase cannot be -100.");
  }

  return finalValue / (1 + percentIncrease / 100);
}
