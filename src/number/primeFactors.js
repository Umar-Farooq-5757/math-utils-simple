export default function primeFactors(n) {
  const factors = [];

  if (n < 2) return factors;

  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  if (n > 2) {
    factors.push(n);
  }

  return factors;
}