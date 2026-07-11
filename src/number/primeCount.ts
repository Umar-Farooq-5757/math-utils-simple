export default function primeCount(limit: number): number {
  if (!Number.isInteger(limit) || limit < 2) {
    return 0;
  }

  const sieve = new Array(limit + 1).fill(true);

  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  return sieve.filter(Boolean).length;
}
