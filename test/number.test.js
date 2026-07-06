import test from "node:test";
import assert from "node:assert/strict";

import {
  isEven,
  isOdd,
  isPrime,
  nextPrime,
  previousPrime,
  primeFactors,
  factors,
  divisors,
  isPerfectSquare,
  isPerfectCube,
  isPerfectNumber,
  isPalindromeNumber,
  isArmstrongNumber,
  isLeapYear,
  digitCount,
  sumOfDigits,
  reverseNumber,
  digitalRoot,
} from "../src/index.js";

test("isEven", () => {
  assert.equal(isEven(8), true);
  assert.equal(isEven(5), false);
});

test("isOdd", () => {
  assert.equal(isOdd(5), true);
  assert.equal(isOdd(8), false);
});

test("isPrime", () => {
  assert.equal(isPrime(2), true);
  assert.equal(isPrime(17), true);
  assert.equal(isPrime(25), false);
  assert.equal(isPrime(1), false);
});

test("nextPrime", () => {
  assert.equal(nextPrime(10), 11);
  assert.equal(nextPrime(17), 19);
});

test("previousPrime", () => {
  assert.equal(previousPrime(20), 19);
  assert.equal(previousPrime(11), 7);
  assert.equal(previousPrime(2), null);
});

test("primeFactors", () => {
  assert.deepEqual(primeFactors(60), [2, 2, 3, 5]);
  assert.deepEqual(primeFactors(13), [13]);
});

test("factors", () => {
  assert.deepEqual(factors(12), [1, 2, 3, 4, 6, 12]);
  assert.deepEqual(factors(13), [1, 13]);
});

test("divisors", () => {
  assert.deepEqual(divisors(18), [1, 2, 3, 6, 9, 18]);
});

test("isPerfectSquare", () => {
  assert.equal(isPerfectSquare(25), true);
  assert.equal(isPerfectSquare(24), false);
});

test("isPerfectCube", () => {
  assert.equal(isPerfectCube(27), true);
  assert.equal(isPerfectCube(26), false);
});

test("isPerfectNumber", () => {
  assert.equal(isPerfectNumber(6), true);
  assert.equal(isPerfectNumber(28), true);
  assert.equal(isPerfectNumber(12), false);
});

test("isPalindromeNumber", () => {
  assert.equal(isPalindromeNumber(121), true);
  assert.equal(isPalindromeNumber(123), false);
});

test("isArmstrongNumber", () => {
  assert.equal(isArmstrongNumber(153), true);
  assert.equal(isArmstrongNumber(9474), true);
  assert.equal(isArmstrongNumber(100), false);
});

test("isLeapYear", () => {
  assert.equal(isLeapYear(2024), true);
  assert.equal(isLeapYear(1900), false);
  assert.equal(isLeapYear(2000), true);
});

test("digitCount", () => {
  assert.equal(digitCount(12345), 5);
});

test("sumOfDigits", () => {
  assert.equal(sumOfDigits(12345), 15);
});

test("reverseNumber", () => {
  assert.equal(reverseNumber(12345), 54321);
  assert.equal(reverseNumber(-987), -789);
});

test("digitalRoot", () => {
  assert.equal(digitalRoot(9875), 2);
});