import LineEquation from "./types/LineEquation.js";
import Point from "./types/Point.js";

/**
 * Computes the equation of the line passing through two points.
 *
 * Returns coefficients for:
 *
 * ax + by + c = 0
 *
 * @param p1 First point.
 * @param p2 Second point.
 * @returns Line coefficients.
 */
export default function lineEquation(p1: Point, p2: Point): LineEquation {
  if (
    !Number.isFinite(p1.x) ||
    !Number.isFinite(p1.y) ||
    !Number.isFinite(p2.x) ||
    !Number.isFinite(p2.y)
  ) {
    throw new TypeError("Point coordinates must be finite numbers.");
  }

  if (p1.x === p2.x && p1.y === p2.y) {
    throw new Error("Points must be distinct.");
  }

  const a = p1.y - p2.y;
  const b = p2.x - p1.x;
  const c = p1.x * p2.y - p2.x * p1.y;

  return { a, b, c };
}
