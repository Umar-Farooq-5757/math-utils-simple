import test from "node:test";
import assert from "node:assert/strict";

import {
  dotProduct,
  crossProduct,
  elementWiseAdd,
  elementWiseMultiply,
  normalizeVector,
  cumulativeSum,
  movingAverage, elementWiseSubtract,
  elementWiseDivide,
  scalarMultiply,
  scalarDivide,
  vectorMagnitude,
  vectorDistance,
  cosineSimilarity,
  angleBetweenVectors,
  projectVector,
} from "../src/index.js";

test("dotProduct", () => {
  assert.equal(
    dotProduct([1,2,3], [4,5,6]),
    32
  );
});

test("dotProduct throws", () => {
  assert.throws(
    () => dotProduct([1,2], [1]),
    /same length/
  );
});

test("crossProduct", () => {
  assert.deepEqual(
    crossProduct([1,0,0], [0,1,0]),
    [0,0,1]
  );
});

test("crossProduct throws", () => {
  assert.throws(
    () => crossProduct([1,2], [3,4]),
    /3-dimensional/
  );
});

test("elementWiseAdd", () => {
  assert.deepEqual(
    elementWiseAdd([1,2,3], [4,5,6]),
    [5,7,9]
  );
});

test("elementWiseMultiply", () => {
  assert.deepEqual(
    elementWiseMultiply([1,2,3], [4,5,6]),
    [4,10,18]
  );
});

test("normalizeVector", () => {
  const result = normalizeVector([3,4]);

  assert.equal(result[0], 0.6);
  assert.equal(result[1], 0.8);
});

test("normalizeVector throws", () => {
  assert.throws(
    () => normalizeVector([0,0]),
    /zero vector/
  );
});

test("cumulativeSum", () => {
  assert.deepEqual(
    cumulativeSum([1,2,3,4]),
    [1,3,6,10]
  );
});

test("movingAverage", () => {
  assert.deepEqual(
    movingAverage([1,2,3,4,5], 3),
    [2,3,4]
  );
});

test("movingAverage window 1", () => {
  assert.deepEqual(
    movingAverage([5,6,7], 1),
    [5,6,7]
  );
});

test("movingAverage throws", () => {
  assert.throws(
    () => movingAverage([1,2], 3),
    /Invalid window/
  );
});

test("elementWiseSubtract", () => {
  assert.deepEqual(
    elementWiseSubtract([5, 7, 9], [1, 2, 3]),
    [4, 5, 6]
  );
});

test("elementWiseDivide", () => {
  assert.deepEqual(
    elementWiseDivide([10, 20, 30], [2, 4, 5]),
    [5, 5, 6]
  );
});

test("scalarMultiply", () => {
  assert.deepEqual(
    scalarMultiply([1, 2, 3], 3),
    [3, 6, 9]
  );
});

test("scalarDivide", () => {
  assert.deepEqual(
    scalarDivide([6, 9, 12], 3),
    [2, 3, 4]
  );
});

test("vectorMagnitude", () => {
  assert.equal(
    vectorMagnitude([3, 4]),
    5
  );
});

test("vectorDistance", () => {
  assert.equal(
    vectorDistance([1, 2], [4, 6]),
    5
  );
});

test("cosineSimilarity", () => {
  assert.equal(
    cosineSimilarity([1, 0], [0, 1]),
    0
  );
});

test("angleBetweenVectors", () => {
  assert.equal(
    angleBetweenVectors([1, 0], [0, 1]),
    Math.PI / 2
  );
});

test("projectVector", () => {
  assert.deepEqual(
    projectVector([3, 4], [1, 0]),
    [3, 0]
  );
});