export default function asec(value: number): number {
  if (Math.abs(value) < 1) {
    throw new Error("asec() domain is |x| >= 1.");
  }

  return (Math.acos(1 / value) * 180) / Math.PI;
}
