import Point from "./types/Point.js";

export type ReflectionAxis = "x" | "y" | "origin";

/**
 * Reflects a point across the x-axis, y-axis, or origin.
 *
 * @param point Point to reflect.
 * @param axis Reflection axis.
 * @returns Reflected point.
 */
export default function reflectPoint(
  point: Point,
  axis: ReflectionAxis,
): Point {
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
    throw new TypeError("Point coordinates must be finite numbers.");
  }

  switch (axis) {
    case "x":
      return {
        x: point.x,
        y: -point.y,
      };

    case "y":
      return {
        x: -point.x,
        y: point.y,
      };

    case "origin":
      return {
        x: -point.x,
        y: -point.y,
      };

    default:
      throw new Error("Invalid reflection axis.");
  }
}
