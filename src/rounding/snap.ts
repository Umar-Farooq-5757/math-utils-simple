export default function snap(value: number, step: number): number {
  if (step === 0) {
    throw new Error("step cannot be zero.");
  }

  return Math.round(value / step) * step;
}
