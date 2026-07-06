import dotProduct from "./dotProduct.js";
import vectorMagnitude from "./vectorMagnitude.js";

type Vector = number[];

export default function cosineSimilarity(a: Vector, b: Vector): number {
  const magA: number = vectorMagnitude(a);
  const magB: number = vectorMagnitude(b);

  if (magA === 0 || magB === 0) {
    throw new Error("Cannot calculate similarity for a zero vector.");
  }

  return dotProduct(a, b) / (magA * magB);
}