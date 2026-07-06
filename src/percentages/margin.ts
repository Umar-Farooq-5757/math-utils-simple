export default function margin(cost: number, sellingPrice: number): number {
  if (sellingPrice === 0) {
    throw new Error("Selling price cannot be zero.");
  }

  return ((sellingPrice - cost) / sellingPrice) * 100;
}
