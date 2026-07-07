import gcd from "./gcd.js";

export default function coprime(a: number, b: number): boolean {
  return gcd(a, b) === 1;
}
