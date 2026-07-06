export default function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;

  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
