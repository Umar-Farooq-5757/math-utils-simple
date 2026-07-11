/**
 * Generates a random number from a triangular distribution.
 *
 * @param min Minimum value
 * @param mode Most likely value
 * @param max Maximum value
 */
export default function randomTriangular(
  min: number,
  mode: number,
  max: number,
): number {
  if (!(min <= mode && mode <= max)) {
    throw new Error("Expected min <= mode <= max.");
  }

  const u = Math.random();
  const c = (mode - min) / (max - min);

  if (u < c) {
    return min + Math.sqrt(u * (max - min) * (mode - min));
  }

  return max - Math.sqrt((1 - u) * (max - min) * (max - mode));
}
