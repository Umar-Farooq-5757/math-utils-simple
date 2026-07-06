import variance from "./variance.js";

export default function standardDeviation(array: number[]): number {
  return Math.sqrt(variance(array));
}
