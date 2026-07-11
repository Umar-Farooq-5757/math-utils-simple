import Point from "./types/Point.js";

/**
 * Rotates a point about the origin.
 *
 * Positive angle = counterclockwise.
 *
 * @param point Point to rotate.
 * @param angle Angle in degrees.
 * @returns Rotated point.
 */
export default function rotatePoint(
  point: Point,
  angle: number
): Point {
  if (
    !Number.isFinite(point.x) ||
    !Number.isFinite(point.y)
  ) {
    throw new TypeError("Point coordinates must be finite numbers.");
  }

  if (!Number.isFinite(angle)) {
    throw new TypeError("Angle must be a finite number.");
  }

  const radians = (angle * Math.PI) / 180;

  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  return {
    x: point.x * cos - point.y * sin,
    y: point.x * sin + point.y * cos,
  };
}