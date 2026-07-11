export default function acsc(value: number): number {
  if (Math.abs(value) < 1) {
    throw new Error("acsc() domain is |x| >= 1.");
  }

  return (Math.asin(1 / value) * 180) / Math.PI;
}
