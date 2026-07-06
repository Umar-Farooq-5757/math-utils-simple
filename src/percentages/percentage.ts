export default function percentage(value: number, total: number): number {
  if (total === 0) {
    throw new Error("Total cannot be zero.");
  }

  return (value / total) * 100;
}
