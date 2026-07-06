import vectorMagnitude from "./vectorMagnitude.js";

export default function vectorDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error("Vectors must have the same length.");
  }

  const difference = a.map((value, index) => value - b[index]);

  return vectorMagnitude(difference);
}