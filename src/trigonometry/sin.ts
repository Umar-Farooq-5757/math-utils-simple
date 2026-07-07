import degreesToRadians from "./degreesToRadians.js";

export default function sin(degrees: number): number {
  return Math.sin(degreesToRadians(degrees));
}
