export default function depreciationStraightLine(
  cost: number,
  salvageValue: number,
  usefulLife: number,
): number {
  if (usefulLife <= 0) {
    throw new Error("Useful life must be greater than zero.");
  }

  if (salvageValue > cost) {
    throw new Error("Salvage value cannot exceed cost.");
  }

  return (cost - salvageValue) / usefulLife;
}
