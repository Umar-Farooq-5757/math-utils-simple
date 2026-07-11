import isPrime from "./isPrime.js";

export default function nthPrime(n: number): number {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  let count = 0;
  let current = 1;

  while (count < n) {
    current++;

    if (isPrime(current)) {
      count++;
    }
  }

  return current;
}