import test from "node:test";
import assert from "node:assert/strict";

import {
  permutation,
  combination,
  binomialCoefficient,
} from "../src/index.js";

test("permutation", () => {
  assert.equal(
    permutation(5, 2),
    20
  );

  assert.equal(
    permutation(6, 6),
    720
  );
});

test("combination", () => {
  assert.equal(
    combination(5, 2),
    10
  );

  assert.equal(
    combination(6, 6),
    1
  );
});

test("binomialCoefficient", () => {
  assert.equal(
    binomialCoefficient(5, 2),
    10
  );

  assert.equal(
    binomialCoefficient(10, 3),
    120
  );
});

test("permutation throws", () => {
  assert.throws(
    () => permutation(3, 5),
    /greater than n/
  );
});

test("combination throws", () => {
  assert.throws(
    () => combination(2, 5),
    /greater than n/
  );
});