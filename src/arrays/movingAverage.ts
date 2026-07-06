export default function movingAverage(array: number[], window: number): number[] {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (window <= 0 || window > array.length) {
    throw new Error("Invalid window size.");
  }

  const result: number[] = [];

  for (let i = 0; i <= array.length - window; i++) {
    let sum = 0;

    for (let j = 0; j < window; j++) {
      sum += array[i + j];
    }

    result.push(sum / window);
  }

  return result;
}