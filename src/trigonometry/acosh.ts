export default function acosh(value: number): number {
  if (value < 1) {
    throw new Error("acosh() domain is x >= 1.");
  }

  return Math.acosh(value);
}
