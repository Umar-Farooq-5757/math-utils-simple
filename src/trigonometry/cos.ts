import degreesToRadians from "./degreesToRadians.js";

export default function cos(degrees: number): number {
  return Math.cos(degreesToRadians(degrees));
}
