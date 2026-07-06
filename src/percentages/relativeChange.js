export default function relativeChange(a, b) {
  if (b === 0) {
    throw new Error("Reference value cannot be zero.");
  }

  return ((a - b) / b) * 100;
}