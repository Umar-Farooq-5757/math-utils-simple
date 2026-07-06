import quartiles from "./quartiles.js";

export default function interQuartileRange(array) {
  const { q1, q3 } = quartiles(array);

  return q3 - q1;
}