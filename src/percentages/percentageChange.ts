export default function percentageChange(
  oldValue: number,
  newValue: number,
): number {
  if (oldValue === 0) {
    throw new Error("Old value cannot be zero.");
  }

  return ((newValue - oldValue) / oldValue) * 100;
}
