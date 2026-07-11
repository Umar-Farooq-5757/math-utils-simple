import Point from "./types/Point.js";

/**
 * Calculates the midpoint of two points.
 *
 * Formula:
 * ((x₁+x₂)/2, (y₁+y₂)/2)
 *
 * @param p1 First point.
 * @param p2 Second point.
 * @returns Midpoint.
 */
export default function midpoint(p1: Point, p2: Point): Point {
  if (
    !Number.isFinite(p1.x) ||
    !Number.isFinite(p1.y) ||
    !Number.isFinite(p2.x) ||
    !Number.isFinite(p2.y)
  ) {
    throw new TypeError("Point coordinates must be finite numbers.");
  }

  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  };
}
