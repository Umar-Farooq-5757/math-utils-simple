import quartiles from "./quartiles.js";

export default function interQuartileRange(array: number[]): number {
  const { q1, q3 } = quartiles(array);

  return q3 - q1;
}
