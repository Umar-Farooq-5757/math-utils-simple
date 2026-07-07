import radiansToDegrees from "./radiansToDegrees.js";

export default function atan(value: number): number {
  return radiansToDegrees(Math.atan(value));
}
