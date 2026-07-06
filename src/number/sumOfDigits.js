export default function sumOfDigits(n) {
  return Math.abs(Math.trunc(n))
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}