export default function cot(angle: number): number {
  const radians = (angle * Math.PI) / 180;
  const tanValue = Math.tan(radians);

  if (Math.abs(tanValue) < Number.EPSILON) {
    throw new Error("Cotangent is undefined for this angle.");
  }

  return 1 / tanValue;
}
