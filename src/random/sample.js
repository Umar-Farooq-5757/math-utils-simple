import shuffle from "./shuffle.js";

export default function sample(array, count) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (!Number.isInteger(count) || count < 0) {
    throw new Error("Count must be a non-negative integer.");
  }

  if (count > array.length) {
    throw new Error("Count cannot exceed array length.");
  }

  return shuffle(array).slice(0, count);
}