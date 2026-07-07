import test from "node:test";
import assert from "node:assert/strict";

import {
  arithmeticSequence,
  geometricSequence,
  sumArithmeticSeries,
  sumGeometricSeries,
} from "../src/index.js";

test("arithmeticSequence", () => {
  assert.deepEqual(
    arithmeticSequence(2, 3, 5),
    [2, 5, 8, 11, 14]
  );
});

test("geometricSequence", () => {
  assert.deepEqual(
    geometricSequence(2, 2, 5),
    [2, 4, 8, 16, 32]
  );
});

test("sumArithmeticSeries", () => {
  assert.equal(
    sumArithmeticSeries(2, 3, 5),
    40
  );
});

test("sumGeometricSeries", () => {
  assert.equal(
    sumGeometricSeries(2, 2, 5),
    62
  );
});

test("sumGeometricSeries ratio 1", () => {
  assert.equal(
    sumGeometricSeries(5, 1, 4),
    20
  );
});

test("invalid n", () => {
  assert.throws(
    () => arithmeticSequence(1, 1, 0),
    /positive integer/
  );

  assert.throws(
    () => geometricSequence(1, 2, -1),
    /positive integer/
  );
});