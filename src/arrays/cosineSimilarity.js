import dotProduct from "./dotProduct.js";
import vectorMagnitude from "./vectorMagnitude.js";

export default function cosineSimilarity(a, b) {
  const magA = vectorMagnitude(a);
  const magB = vectorMagnitude(b);

  if (magA === 0 || magB === 0) {
    throw new Error("Cannot calculate similarity for a zero vector.");
  }

  return dotProduct(a, b) / (magA * magB);
}