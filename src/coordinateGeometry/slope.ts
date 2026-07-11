import Point from "./types/Point.js";

/**
 * Calculates the slope of the line joining two points.
 *
 * Formula:
 * m = (y₂ - y₁) / (x₂ - x₁)
 *
 * @param p1 First point.
 * @param p2 Second point.
 * @returns Slope of the line.
 */
export default function slope(p1: Point, p2: Point): number {
  if (
    !Number.isFinite(p1.x) ||
    !Number.isFinite(p1.y) ||
    !Number.isFinite(p2.x) ||
    !Number.isFinite(p2.y)
  ) {
    throw new TypeError("Point coordinates must be finite numbers.");
  }

  if (p1.x === p2.x) {
    throw new Error("Slope is undefined for a vertical line.");
  }

  return (p2.y - p1.y) / (p2.x - p1.x);
}
