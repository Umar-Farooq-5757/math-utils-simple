import isPrime from "./isPrime.js";

export default function previousPrime(n) {
  let candidate = Math.floor(n) - 1;

  while (candidate >= 2) {
    if (isPrime(candidate)) return candidate;
    candidate--;
  }

  return null;
}