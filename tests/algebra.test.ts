import test from "node:test";
import assert from "node:assert/strict";

import {
  solveLinear,
  solveQuadratic,
  discriminant,
} from "../src/index.js";

test("discriminant", () => {
  assert.equal(
    discriminant(1, -3, 2),
    1
  );

  assert.equal(
    discriminant(1, 2, 1),
    0
  );

  assert.equal(
    discriminant(1, 0, 1),
    -4
  );
});

test("solveLinear", () => {
  assert.equal(
    solveLinear(2, -8),
    4
  );

  assert.equal(
    solveLinear(-5, 10),
    2
  );
});

test("solveLinear throws", () => {
  assert.throws(
    () => solveLinear(0, 5),
    /cannot be zero/i
  );
});

test("solveQuadratic with repeated root", () => {
  assert.deepEqual(
    solveQuadratic(1, 2, 1),
    {
      root1: -1,
      root2: -1,
    }
  );
});

test("solveQuadratic throws when a is zero", () => {
  assert.throws(
    () => solveQuadratic(0, 2, 1),
    /solveLinear/i
  );
});

test("quadratic with two real roots", () => {
  assert.deepEqual(
    solveQuadratic(1, -3, 2),
    {
      root1: 2,
      root2: 1,
    }
  );
});

test("quadratic with one repeated root", () => {
  assert.deepEqual(
    solveQuadratic(1, 2, 1),
    {
      root1: -1,
      root2: -1,
    }
  );
});

test("quadratic with complex roots", () => {
  assert.deepEqual(
    solveQuadratic(1, 0, 1),
    {
      root1: {
        real: 0,
        imaginary: 1,
      },
      root2: {
        real: 0,
        imaginary: -1,
      },
    }
  );
});