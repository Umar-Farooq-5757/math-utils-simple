export default function atanh(value: number): number {
  if (value <= -1 || value >= 1) {
    throw new Error("atanh() domain is -1 < x < 1.");
  }

  return Math.atanh(value);
}
