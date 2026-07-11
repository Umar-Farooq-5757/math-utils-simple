export default function isComposite(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return true;
    }
  }

  return false;
}
