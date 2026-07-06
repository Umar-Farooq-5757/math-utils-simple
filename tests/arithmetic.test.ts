import test from "node:test";
import assert from "node:assert/strict";

import {
  add,
  subtract,
  multiply,
  divide,
  mod,
  power,
  sqrt,
  cubeRoot,
  nthRoot,
  abs,
  negate,
  increment,
  decrement,
  square,
  cube,
  reciprocal,
} from "../src/index.js";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("subtract", () => {
  assert.equal(subtract(10, 4), 6);
});

test("multiply", () => {
  assert.equal(multiply(3, 5), 15);
});

test("divide", () => {
  assert.equal(divide(10, 2), 5);
});

test("divide by zero", () => {
  assert.throws(() => divide(10, 0));
});

test("mod", () => {
  assert.equal(mod(10, 3), 1);
});

test("mod by zero", () => {
  assert.throws(() => mod(10, 0));
});

test("power", () => {
  assert.equal(power(2, 5), 32);
});

test("sqrt", () => {
  assert.equal(sqrt(49), 7);
});

test("sqrt negative", () => {
  assert.throws(() => sqrt(-1));
});

test("cubeRoot", () => {
  assert.equal(cubeRoot(27), 3);
});

test("nthRoot", () => {
  assert.equal(nthRoot(81, 4), 3);
});

test("abs", () => {
  assert.equal(abs(-15), 15);
});

test("negate", () => {
  assert.equal(negate(7), -7);
});

test("increment", () => {
  assert.equal(increment(9), 10);
});

test("decrement", () => {
  assert.equal(decrement(9), 8);
});

test("square", () => {
  assert.equal(square(8), 64);
});

test("cube", () => {
  assert.equal(cube(4), 64);
});

test("reciprocal", () => {
  assert.equal(reciprocal(4), 0.25);
});

test("reciprocal zero", () => {
  assert.throws(() => reciprocal(0));
});