import radiansToDegrees from "./radiansToDegrees.js";

export default function acos(value: number): number {
  if (value < -1 || value > 1) {
    throw new Error("Input must be between -1 and 1.");
  }

  return radiansToDegrees(Math.acos(value));
}
