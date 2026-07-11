import isPrime from "../number/isPrime.js";

export default function randomPrime(min: number, max: number): number {
  if (min > max) {
    throw new Error("min cannot be greater than max.");
  }

  const primes: number[] = [];

  for (let i = Math.max(2, Math.ceil(min)); i <= Math.floor(max); i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  if (primes.length === 0) {
    throw new Error("No prime numbers found in the given range.");
  }

  return primes[Math.floor(Math.random() * primes.length)];
}
