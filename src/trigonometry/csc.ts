export default function csc(angle: number): number {
  const radians = (angle * Math.PI) / 180;
  const sinValue = Math.sin(radians);

  if (Math.abs(sinValue) < Number.EPSILON) {
    throw new Error("Cosecant is undefined for this angle.");
  }

  return 1 / sinValue;
}
