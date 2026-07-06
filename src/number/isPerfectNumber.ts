export default function isPerfectNumber(n: number): boolean {
  if (n <= 1) return false;

  let sum = 1;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;

      if (i !== n / i) {
        sum += n / i;
      }
    }
  }

  return sum === n;
}
