import cosineSimilarity from "./cosineSimilarity.js";

export default function angleBetweenVectors(a, b) {
  const cosine = cosineSimilarity(a, b);

  return Math.acos(
    Math.min(1, Math.max(-1, cosine))
  );
}