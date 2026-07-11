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
  catalan,
  bell,
  bernoulli,
  stirlingFirstKind,
  stirlingSecondKind,
  pascalRow,
  lookAndSay,
  collatz,
  hailstone,
  fareySequence,
  continuedFraction,
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

test("catalan", () => {
  assert.equal(catalan(0), 1);
  assert.equal(catalan(5), 42);
});

test("catalan invalid", () => {
  assert.throws(() => catalan(-1));
});

test("bell", () => {
  assert.equal(bell(0), 1);
  assert.equal(bell(5), 52);
});

test("bell invalid", () => {
  assert.throws(() => bell(-2));
});

test("bernoulli", () => {
  assert.equal(bernoulli(0), 1);
  assert.ok(Math.abs(bernoulli(1) + 0.5) < 1e-10);
});

test("bernoulli invalid", () => {
  assert.throws(() => bernoulli(-1));
});

test("stirlingFirstKind", () => {
  assert.equal(stirlingFirstKind(5, 2), -50);
  assert.equal(stirlingFirstKind(4, 4), 1);
});

test("stirlingFirstKind invalid", () => {
  assert.throws(() => stirlingFirstKind(-1, 2));
});

test("stirlingSecondKind", () => {
  assert.equal(stirlingSecondKind(5, 2), 15);
  assert.equal(stirlingSecondKind(4, 4), 1);
});

test("stirlingSecondKind invalid", () => {
  assert.throws(() => stirlingSecondKind(-1, 2));
});

test("pascalRow", () => {
  assert.deepEqual(pascalRow(0), [1]);
  assert.deepEqual(pascalRow(4), [1, 4, 6, 4, 1]);
});

test("pascalRow invalid", () => {
  assert.throws(() => pascalRow(-3));
});

test("lookAndSay", () => {
  assert.equal(lookAndSay(1), "1");
  assert.equal(lookAndSay(5), "111221");
});

test("lookAndSay invalid", () => {
  assert.throws(() => lookAndSay(0));
});

test("collatz", () => {
  assert.deepEqual(collatz(6), [6, 3, 10, 5, 16, 8, 4, 2, 1]);
});

test("collatz invalid", () => {
  assert.throws(() => collatz(0));
});

test("hailstone", () => {
  assert.deepEqual(hailstone(6), [6, 3, 10, 5, 16, 8, 4, 2, 1]);
});

test("hailstone invalid", () => {
  assert.throws(() => hailstone(-2));
});

test("fareySequence", () => {
  const result = fareySequence(3);

  assert.deepEqual(result, [
    { numerator: 0, denominator: 1 },
    { numerator: 1, denominator: 3 },
    { numerator: 1, denominator: 2 },
    { numerator: 2, denominator: 3 },
    { numerator: 1, denominator: 1 },
  ]);
});

test("fareySequence invalid", () => {
  assert.throws(() => fareySequence(0));
});

test("continuedFraction integer", () => {
  assert.deepEqual(continuedFraction(5), [5]);
});

test("continuedFraction rational", () => {
  assert.deepEqual(continuedFraction(3.25), [3, 4]);
});

test("continuedFraction invalid", () => {
  assert.throws(() => continuedFraction(Number.POSITIVE_INFINITY));
});
