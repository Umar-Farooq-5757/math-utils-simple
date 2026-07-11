import Point from "./types/Point.js";

/**
 * Scales a point relative to the origin.
 *
 * @param point Point to scale.
 * @param scaleX Horizontal scale factor.
 * @param scaleY Vertical scale factor.
 * @returns Scaled point.
 */
export default function scalePoint(
  point: Point,
  scaleX: number,
  scaleY: number = scaleX,
): Point {
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
    throw new TypeError("Point coordinates must be finite numbers.");
  }

  if (!Number.isFinite(scaleX) || !Number.isFinite(scaleY)) {
    throw new TypeError("Scale factors must be finite numbers.");
  }

  return {
    x: point.x * scaleX,
    y: point.y * scaleY,
  };
}
