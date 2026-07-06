import test from "node:test";
import assert from "node:assert/strict";

import {
 sum,
  average,
  median,
  mode,
  range,
  variance,
  standardDeviation,
  max,
  min,
  count,
  frequency,
  quartiles,
  interQuartileRange,
} from "../src/index.js";

test("sum", () => {
  assert.equal(sum([1, 2, 3, 4]), 10);
  assert.equal(sum([-1, 1]), 0);
  assert.equal(sum([]), 0);
});

test("average", () => {
  assert.equal(average([2, 4, 6, 8]), 5);
  assert.equal(average([5]), 5);
});

test("average throws for empty array", () => {
  assert.throws(() => average([]), /Cannot calculate average/);
});

test("count", () => {
  assert.equal(count([]), 0);
  assert.equal(count([1]), 1);
  assert.equal(count([1, 2, 3, 4]), 4);
});

test("min", () => {
  assert.equal(min([4, 8, 2, 10]), 2);
  assert.equal(min([-5, -1, -10]), -10);
});

test("min throws for empty array", () => {
  assert.throws(() => min([]), /Cannot find minimum/);
});

test("max", () => {
  assert.equal(max([4, 8, 2, 10]), 10);
  assert.equal(max([-5, -1, -10]), -1);
});

test("max throws for empty array", () => {
  assert.throws(() => max([]), /Cannot find maximum/);
});

test("range", () => {
  assert.equal(range([2, 4, 6, 8]), 6);
  assert.equal(range([5]), 0);
  assert.equal(range([-10, 10]), 20);
});

test("median with odd number of elements", () => {
  assert.equal(median([3, 1, 2]), 2);
});

test("median with even number of elements", () => {
  assert.equal(median([4, 1, 3, 2]), 2.5);
});

test("median with one element", () => {
  assert.equal(median([10]), 10);
});

test("median throws on empty array", () => {
  assert.throws(() => median([]), /Cannot calculate median/);
});

test("mode with one mode", () => {
  assert.deepEqual(mode([1, 2, 2, 3, 4]), [2]);
});

test("mode with multiple modes", () => {
  assert.deepEqual(mode([1, 1, 2, 2, 3]), [1, 2]);
});

test("mode with no mode", () => {
  assert.deepEqual(mode([1, 2, 3, 4]), []);
});

test("mode with strings", () => {
  assert.deepEqual(mode(["a", "b", "a", "c"]), ["a"]);
});

test("frequency numbers", () => {
  const result = frequency([1, 2, 2, 3, 3, 3]);

  assert.equal(result[1], 1);
  assert.equal(result[2], 2);
  assert.equal(result[3], 3);
});

test("frequency strings", () => {
  const result = frequency([
    "apple",
    "banana",
    "apple"
  ]);

  assert.equal(result.apple, 2);
  assert.equal(result.banana, 1);
});
test("quartiles", () => {
  assert.deepEqual(
    quartiles([1,2,3,4,5,6,7,8]),
    {
      q1: 2.5,
      q2: 4.5,
      q3: 6.5,
    }
  );
});

test("interQuartileRange", () => {
  assert.equal(
    interQuartileRange([1,2,3,4,5,6,7,8]),
    4
  );
});

test("variance", () => {
  assert.equal(variance([2, 4, 4, 4, 5, 5, 7, 9]), 4);
});

test("standardDeviation", () => {
  assert.equal(
    standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]),
    2
  );
});