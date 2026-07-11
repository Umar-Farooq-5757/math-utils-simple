export default function isHarshadNumber(n: number): boolean {
  if (!Number.isInteger(n) || n <= 0) {
    return false;
  }

  const sum = n
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);

  return n % sum === 0;
}
