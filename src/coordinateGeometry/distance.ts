import Point from "./types/Point.js";

/**
 * Calculates the Euclidean distance between two points.
 *
 * Formula:
 * √((x₂-x₁)² + (y₂-y₁)²)
 *
 * @param p1 First point.
 * @param p2 Second point.
 * @returns Distance between the points.
 */
export default function distance(p1: Point, p2: Point): number {
  if (
    !Number.isFinite(p1.x) ||
    !Number.isFinite(p1.y) ||
    !Number.isFinite(p2.x) ||
    !Number.isFinite(p2.y)
  ) {
    throw new TypeError("Point coordinates must be finite numbers.");
  }

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  return Math.sqrt(dx * dx + dy * dy);
}
