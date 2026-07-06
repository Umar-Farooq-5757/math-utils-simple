export default function margin(cost, sellingPrice) {
  if (sellingPrice === 0) {
    throw new Error("Selling price cannot be zero.");
  }

  return ((sellingPrice - cost) / sellingPrice) * 100;
}