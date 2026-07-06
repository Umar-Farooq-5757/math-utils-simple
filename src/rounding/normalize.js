export default function normalize(value, min, max) {
  if (min === max) {
    throw new Error("min and max cannot be equal.");
  }

  return (value - min) / (max - min);
}