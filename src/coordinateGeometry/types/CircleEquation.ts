import type Point from "./Point.js";

/**
 * Represents a circle in standard form.
 */
export interface CircleEquation {
  center: Point;
  radius: number;
  equation: string;
}

export default CircleEquation;
