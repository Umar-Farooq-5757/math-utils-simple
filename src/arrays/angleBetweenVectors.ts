import cosineSimilarity from "./cosineSimilarity.js";

export default function angleBetweenVectors(a: number[], b: number[]): number {
  const cosine: number = cosineSimilarity(a, b);

  return Math.acos(Math.min(1, Math.max(-1, cosine)));
}
