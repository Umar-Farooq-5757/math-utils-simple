export default function isDeficientNumber(n: number): boolean {
  if (!Number.isInteger(n) || n <= 0) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  let sum = 1;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;

      if (i !== n / i) {
        sum += n / i;
      }
    }
  }

  return sum < n;
}
