import test from "node:test";
import assert from "node:assert/strict";

import {
  numericalDerivative,
  integrate,
} from "../src/index.js";

const EPSILON = 1e-4;

test("derivative of x²", () => {
  const result = numericalDerivative(
    x => x * x,
    3
  );

  assert.ok(
    Math.abs(result - 6) < EPSILON
  );
});

test("derivative of sin(x)", () => {
  const result = numericalDerivative(
    Math.sin,
    0
  );

  assert.ok(
    Math.abs(result - 1) < EPSILON
  );
});

test("integral of x", () => {
  const result = integrate(
    x => x,
    0,
    2
  );

  assert.ok(
    Math.abs(result - 2) < EPSILON
  );
});

test("integral of constant", () => {
  const result = integrate(
    () => 5,
    0,
    4
  );

  assert.ok(
    Math.abs(result - 20) < EPSILON
  );
});

test("integrate throws", () => {
  assert.throws(
    () => integrate(x => x, 0, 1, 0),
    /positive integer/
  );
});