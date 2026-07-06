export default function findOriginalValue(finalValue, percentIncrease) {
  if (percentIncrease === -100) {
    throw new Error("Percent increase cannot be -100.");
  }

  return finalValue / (1 + percentIncrease / 100);
}