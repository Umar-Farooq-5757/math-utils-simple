export default function snap(value, step) {
  if (step === 0) {
    throw new Error("step cannot be zero.");
  }

  return Math.round(value / step) * step;
}