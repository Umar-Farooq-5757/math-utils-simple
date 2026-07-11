export default function lawOfSines(
  knownSide: number,
  knownAngle: number,
  targetAngle: number,
): number {
  const knownRad = (knownAngle * Math.PI) / 180;
  const targetRad = (targetAngle * Math.PI) / 180;

  const denominator = Math.sin(knownRad);

  if (Math.abs(denominator) < Number.EPSILON) {
    throw new Error("Known angle cannot have zero sine.");
  }

  return (knownSide * Math.sin(targetRad)) / denominator;
}
