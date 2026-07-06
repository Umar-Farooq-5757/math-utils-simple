export default function randomFloat(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new TypeError("Expected numeric bounds.");
  }

  if (min > max) {
    throw new Error("Minimum cannot be greater than maximum.");
  }

  return Math.random() * (max - min) + min;
}