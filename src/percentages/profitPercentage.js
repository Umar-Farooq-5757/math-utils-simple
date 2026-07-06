export default function profitPercentage(cost, sellingPrice) {
  if (cost === 0) {
    throw new Error("Cost cannot be zero.");
  }

  return ((sellingPrice - cost) / cost) * 100;
}