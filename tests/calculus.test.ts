import test from "node:test";
import assert from "node:assert/strict";

import {
  numericalDerivative,
  integrate,
  secondDerivative,
  simpsonsRule,
  newtonRaphson,
  bisectionMethod,
  gradient,
  partialDerivative,
} from "../src/index.js";

const EPSILON = 1e-4;

test("derivative of x²", () => {
  const result = numericalDerivative((x) => x * x, 3);

  assert.ok(Math.abs(result - 6) < EPSILON);
});

test("derivative of sin(x)", () => {
  const result = numericalDerivative(Math.sin, 0);

  assert.ok(Math.abs(result - 1) < EPSILON);
});

test("integral of x", () => {
  const result = integrate((x) => x, 0, 2);

  assert.ok(Math.abs(result - 2) < EPSILON);
});

test("integral of constant", () => {
  const result = integrate(() => 5, 0, 4);

  assert.ok(Math.abs(result - 20) < EPSILON);
});

test("integrate throws", () => {
  assert.throws(() => integrate((x) => x, 0, 1, 0), /positive integer/);
});

test("secondDerivative", () => {
  const result = secondDerivative((x) => x * x, 2);

  assert.ok(Math.abs(result - 2) < 1e-4);
});

test("simpsonsRule", () => {
  const result = simpsonsRule((x) => x * x, 0, 1);

  assert.ok(Math.abs(result - 1 / 3) < 1e-5);
});

test("simpsonsRule odd intervals", () => {
  assert.throws(() => simpsonsRule((x) => x, 0, 1, 5));
});

test("simpsonsRule invalid intervals", () => {
  assert.throws(() => simpsonsRule((x) => x, 0, 1, 0));
});

test("newtonRaphson", () => {
  const result = newtonRaphson(
    (x) => x * x - 2,
    (x) => 2 * x,
    1,
  );

  assert.ok(Math.abs(result - Math.sqrt(2)) < 1e-6);
});

test("newtonRaphson derivative zero", () => {
  assert.throws(() =>
    newtonRaphson(
      () => 1,
      () => 0,
      1,
    ),
  );
});

test("bisectionMethod", () => {
  const result = bisectionMethod((x) => x * x - 4, 0, 3);

  assert.ok(Math.abs(result - 2) < 1e-6);
});

test("bisectionMethod invalid interval", () => {
  assert.throws(() => bisectionMethod((x) => x * x + 1, -1, 1));
});

test("gradient", () => {
  const result = gradient(([x, y]) => x * x + y * y, [3, 4]);

  assert.ok(Math.abs(result[0] - 6) < 1e-4);
  assert.ok(Math.abs(result[1] - 8) < 1e-4);
});

test("partialDerivative x", () => {
  const pd = partialDerivative(([x, y]) => x * x + y * y, 0);

  const result = pd([3, 4]);

  assert.ok(Math.abs(result - 6) < 1e-4);
});

test("partialDerivative y", () => {
  const pd = partialDerivative(([x, y]) => x * x + y * y, 1);

  const result = pd([3, 4]);

  assert.ok(Math.abs(result - 8) < 1e-4);
});

test("partialDerivative invalid index", () => {
  const pd = partialDerivative(([x]) => x * x, 2);

  assert.throws(() => pd([3]));
});
