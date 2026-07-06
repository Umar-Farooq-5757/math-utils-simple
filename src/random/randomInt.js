export default function randomInt(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError("Expected integer bounds.");
  }

  if (min > max) {
    throw new Error("Minimum cannot be greater than maximum.");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}