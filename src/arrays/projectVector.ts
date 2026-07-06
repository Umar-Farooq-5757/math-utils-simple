import dotProduct from "./dotProduct.js";

export default function projectVector(a: number[], b: number[]): number[] {
  const denominator = dotProduct(b, b);

  if (denominator === 0) {
    throw new Error("Cannot project onto a zero vector.");
  }

  const scalar = dotProduct(a, b) / denominator;

  return b.map(value => scalar * value);
}