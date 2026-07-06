export default function lossPercentage(
  cost: number,
  sellingPrice: number,
): number {
  if (cost === 0) {
    throw new Error("Cost cannot be zero.");
  }

  if (sellingPrice >= cost) {
    return 0;
  }

  return ((cost - sellingPrice) / cost) * 100;
}
