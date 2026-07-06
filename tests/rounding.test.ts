import test from "node:test";
import assert from "node:assert/strict";

import {
  round,
  floor,
  ceil,
  truncate,
  roundTo,
  clamp,
  roundUpToNearest,
  roundDownToNearest,
  roundToNearest,
  snap,
  isBetween,
  wrap,
  normalize,
} from "../src/index.js";

test("round", () => {
  assert.equal(round(4.4), 4);
  assert.equal(round(4.5), 5);
  assert.equal(round(-4.5), -4);
});

test("floor", () => {
  assert.equal(floor(4.9), 4);
  assert.equal(floor(-4.1), -5);
});

test("ceil", () => {
  assert.equal(ceil(4.1), 5);
  assert.equal(ceil(-4.9), -4);
});

test("truncate", () => {
  assert.equal(truncate(4.9), 4);
  assert.equal(truncate(-4.9), -4);
});

test("roundTo", () => {
  assert.equal(roundTo(3.14159, 2), 3.14);
  assert.equal(roundTo(3.14159, 3), 3.142);
  assert.equal(roundTo(123.456, 0), 123);
});

test("clamp", () => {
  assert.equal(clamp(5, 1, 10), 5);
  assert.equal(clamp(-2, 1, 10), 1);
  assert.equal(clamp(20, 1, 10), 10);
});

test("clamp throws if min > max", () => {
  assert.throws(() => clamp(5, 10, 1), /min cannot be greater than max/);
});

test("roundUpToNearest", () => {
  assert.equal(roundUpToNearest(13, 5), 15);
  assert.equal(roundUpToNearest(20, 5), 20);
});

test("roundDownToNearest", () => {
  assert.equal(roundDownToNearest(13, 5), 10);
  assert.equal(roundDownToNearest(20, 5), 20);
});

test("roundToNearest", () => {
  assert.equal(roundToNearest(13, 5), 15);
  assert.equal(roundToNearest(12, 5), 10);
  assert.equal(roundToNearest(17, 5), 15);
});

test("snap", () => {
  assert.equal(snap(23, 10), 20);
  assert.equal(snap(27, 10), 30);
});

test("isBetween inclusive", () => {
  assert.equal(isBetween(5, 1, 10), true);
  assert.equal(isBetween(1, 1, 10), true);
  assert.equal(isBetween(10, 1, 10), true);
});

test("isBetween exclusive", () => {
  assert.equal(isBetween(5, 1, 10, false), true);
  assert.equal(isBetween(1, 1, 10, false), false);
  assert.equal(isBetween(10, 1, 10, false), false);
});

test("wrap", () => {
  assert.equal(wrap(12, 0, 10), 2);
  assert.equal(wrap(-3, 0, 10), 7);
  assert.equal(wrap(5, 0, 10), 5);
});

test("normalize", () => {
  assert.equal(normalize(50, 0, 100), 0.5);
  assert.equal(normalize(25, 0, 100), 0.25);
  assert.equal(normalize(100, 0, 100), 1);
});
