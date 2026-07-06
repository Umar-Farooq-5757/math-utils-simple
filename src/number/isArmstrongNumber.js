export default function isArmstrongNumber(n) {
  const digits = Math.abs(n).toString().split("");

  const power = digits.length;

  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), power),
    0
  );

  return sum === Math.abs(n);
}