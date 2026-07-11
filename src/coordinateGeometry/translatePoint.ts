import Point from "./types/Point.js";

/**
 * Translates a point.
 *
 * @param point Original point.
 * @param dx Horizontal translation.
 * @param dy Vertical translation.
 * @returns Translated point.
 */
export default function translatePoint(
  point: Point,
  dx: number,
  dy: number,
): Point {
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
    throw new TypeError("Point coordinates must be finite numbers.");
  }

  if (!Number.isFinite(dx) || !Number.isFinite(dy)) {
    throw new TypeError("Translation values must be finite numbers.");
  }

  return {
    x: point.x + dx,
    y: point.y + dy,
  };
}
