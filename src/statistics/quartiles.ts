import median from "./median.js";

interface QuartilesResult {
  q1: number;
  q2: number;
  q3: number;
}

export default function quartiles(array: number[]): QuartilesResult {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (array.length === 0) {
    throw new Error("Cannot calculate quartiles of an empty array.");
  }

  const sorted = [...array].sort((a, b) => a - b);

  const q2 = median(sorted);

  const middle = Math.floor(sorted.length / 2);

  let lowerHalf: number[];
  let upperHalf: number[];

  if (sorted.length % 2 === 0) {
    lowerHalf = sorted.slice(0, middle);
    upperHalf = sorted.slice(middle);
  } else {
    lowerHalf = sorted.slice(0, middle);
    upperHalf = sorted.slice(middle + 1);
  }

  const q1 = median(lowerHalf);
  const q3 = median(upperHalf);

  return {
    q1,
    q2,
    q3,
  };
}
