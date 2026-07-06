import min from "./min.js";
import max from "./max.js";

export default function range(array: number[]): number {
  return max(array) - min(array);
}
