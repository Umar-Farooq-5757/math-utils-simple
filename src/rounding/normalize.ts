export default function normalize(
  value: number,
  min: number,
  max: number,
): number {
  if (min === max) {
    throw new Error("min and max cannot be equal.");
  }

  return (value - min) / (max - min);
}
