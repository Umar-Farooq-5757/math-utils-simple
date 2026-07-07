import degreesToRadians from "./degreesToRadians.js";

export default function tan(degrees: number): number {
  return Math.tan(degreesToRadians(degrees));
}
