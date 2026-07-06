export default function sumOfDigits(n: number): number {
  return Math.abs(Math.trunc(n))
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}
