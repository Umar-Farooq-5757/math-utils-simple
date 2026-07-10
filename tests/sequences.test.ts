import test from "node:test";
import assert from "node:assert/strict";

import {
  arithmeticSequence,
  geometricSequence,
  sumArithmeticSeries,
  sumGeometricSeries,
  nthArithmeticTerm,
  nthGeometricTerm,
  harmonicSequence,
  harmonicMean,
  fibonacci,
  lucas,
  tribonacci,
  pell,
} from "../src/index.js";

test("arithmeticSequence", () => {
  assert.deepEqual(arithmeticSequence(2, 3, 5), [2, 5, 8, 11, 14]);
});

test("geometricSequence", () => {
  assert.deepEqual(geometricSequence(2, 2, 5), [2, 4, 8, 16, 32]);
});

test("sumArithmeticSeries", () => {
  assert.equal(sumArithmeticSeries(2, 3, 5), 40);
});

test("sumGeometricSeries", () => {
  assert.equal(sumGeometricSeries(2, 2, 5), 62);
});

test("sumGeometricSeries ratio 1", () => {
  assert.equal(sumGeometricSeries(5, 1, 4), 20);
});

test("invalid n", () => {
  assert.throws(() => arithmeticSequence(1, 1, 0), /positive integer/);

  assert.throws(() => geometricSequence(1, 2, -1), /positive integer/);
});

test("nthArithmeticTerm", () => {
  assert.equal(nthArithmeticTerm(2, 3, 5), 14);
});

test("nthArithmeticTerm invalid n", () => {
  assert.throws(() => nthArithmeticTerm(2, 3, 0));
});

test("nthGeometricTerm", () => {
  assert.equal(nthGeometricTerm(2, 3, 4), 54);
});

test("nthGeometricTerm invalid n", () => {
  assert.throws(() => nthGeometricTerm(2, 3, -1));
});

test("harmonicSequence", () => {
  assert.deepEqual(harmonicSequence(12, 4), [12, 6, 4, 3]);
});

test("harmonicSequence zero first term", () => {
  assert.throws(() => harmonicSequence(0, 5));
});

test("harmonicSequence invalid n", () => {
  assert.throws(() => harmonicSequence(5, 0));
});

test("harmonicMean", () => {
  assert.equal(harmonicMean([1, 2, 4]), 12 / 7);
});

test("harmonicMean empty array", () => {
  assert.throws(() => harmonicMean([]));
});

test("harmonicMean contains zero", () => {
  assert.throws(() => harmonicMean([1, 0, 2]));
});

test("fibonacci", () => {
  assert.equal(fibonacci(10), 55);
});

test("fibonacci base cases", () => {
  assert.equal(fibonacci(0), 0);
  assert.equal(fibonacci(1), 1);
});

test("fibonacci invalid n", () => {
  assert.throws(() => fibonacci(-1));
});

test("lucas", () => {
  assert.equal(lucas(10), 123);
});

test("lucas base cases", () => {
  assert.equal(lucas(0), 2);
  assert.equal(lucas(1), 1);
});

test("lucas invalid n", () => {
  assert.throws(() => lucas(-5));
});

test("tribonacci", () => {
  assert.equal(tribonacci(10), 81);
});

test("tribonacci base cases", () => {
  assert.equal(tribonacci(0), 0);
  assert.equal(tribonacci(1), 0);
  assert.equal(tribonacci(2), 1);
});

test("tribonacci invalid n", () => {
  assert.throws(() => tribonacci(-1));
});

test("pell", () => {
  assert.equal(pell(10), 2378);
});

test("pell base cases", () => {
  assert.equal(pell(0), 0);
  assert.equal(pell(1), 1);
});

test("pell invalid n", () => {
  assert.throws(() => pell(-2));
});
