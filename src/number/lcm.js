import gcd from "./gcd.js";

export default function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}