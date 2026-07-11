export default function sec(angle: number): number {
  const radians = (angle * Math.PI) / 180;
  const cosValue = Math.cos(radians);

  if (Math.abs(cosValue) < Number.EPSILON) {
    throw new Error("Secant is undefined for this angle.");
  }

  return 1 / cosValue;
}
