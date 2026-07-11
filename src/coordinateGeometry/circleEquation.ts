import CircleEquation from "./types/CircleEquation.js";
import Point from "./types/Point.js";

/**
 * Computes the standard equation of a circle.
 *
 * (x - h)^2 + (y - k)^2 = r^2
 *
 * @param center Center of the circle.
 * @param radius Circle radius.
 * @returns Circle information and formatted equation.
 */
export default function circleEquation(
  center: Point,
  radius: number,
): CircleEquation {
  if (!Number.isFinite(center.x) || !Number.isFinite(center.y)) {
    throw new TypeError("Center coordinates must be finite numbers.");
  }

  if (!Number.isFinite(radius)) {
    throw new TypeError("Radius must be a finite number.");
  }

  if (radius <= 0) {
    throw new RangeError("Radius must be greater than zero.");
  }

  const h = center.x >= 0 ? `(x - ${center.x})` : `(x + ${Math.abs(center.x)})`;

  const k = center.y >= 0 ? `(y - ${center.y})` : `(y + ${Math.abs(center.y)})`;

  return {
    center,
    radius,
    equation: `${h}² + ${k}² = ${radius ** 2}`,
  };
}
