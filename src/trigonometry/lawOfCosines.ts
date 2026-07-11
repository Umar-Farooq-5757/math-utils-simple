export default function lawOfCosines(
  sideA: number,
  sideB: number,
  includedAngle: number,
): number {
  const radians = (includedAngle * Math.PI) / 180;

  return Math.sqrt(
    sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(radians),
  );
}
