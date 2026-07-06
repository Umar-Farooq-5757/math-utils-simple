import isPrime from "./isPrime.js";

export default function nextPrime(n: number): number {
  let candidate = Math.floor(n) + 1;

  while (!isPrime(candidate)) {
    candidate++;
  }

  return candidate;
}
