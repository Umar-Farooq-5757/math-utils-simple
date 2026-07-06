import isPrime from "./isPrime.js";

export default function nextPrime(n) {
  let candidate = Math.floor(n) + 1;

  while (!isPrime(candidate)) {
    candidate++;
  }

  return candidate;
}