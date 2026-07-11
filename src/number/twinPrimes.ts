import isPrime from "./isPrime.js";

export default function twinPrimes(limit: number): number[][] {
  if (!Number.isInteger(limit) || limit < 3) {
    return [];
  }

  const result: number[][] = [];

  for (let i = 3; i <= limit - 2; i++) {
    if (isPrime(i) && isPrime(i + 2)) {
      result.push([i, i + 2]);
    }
  }

  return result;
}
