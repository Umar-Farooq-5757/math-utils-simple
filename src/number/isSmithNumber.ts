import isPrime from "./isPrime.js";
import sumOfDigits from "./sumOfDigits.js";

export default function isSmithNumber(n: number): boolean {
  if (!Number.isInteger(n) || n < 4 || isPrime(n)) {
    return false;
  }

  let value = n;
  let factorDigitSum = 0;

  for (let i = 2; i <= value; i++) {
    while (value % i === 0) {
      factorDigitSum += sumOfDigits(i);
      value /= i;
    }
  }

  return sumOfDigits(n) === factorDigitSum;
}
