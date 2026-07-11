export default function isHappyNumber(n: number): boolean {
  if (!Number.isInteger(n) || n <= 0) {
    return false;
  }

  const seen = new Set<number>();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);

    n = n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit) ** 2, 0);
  }

  return n === 1;
}
