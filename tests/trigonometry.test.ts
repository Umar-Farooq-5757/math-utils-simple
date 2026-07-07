import test from "node:test";
import assert from "node:assert/strict";

import {
  degreesToRadians,
  radiansToDegrees,
  sin,
  cos,
  tan,
  asin,
  acos,
  atan,
  hypotenuse,
} from "../src/index.js";

const EPSILON = 1e-10;

test("degreesToRadians", () => {
  assert.ok(
    Math.abs(degreesToRadians(180) - Math.PI) < EPSILON
  );
});

test("radiansToDegrees", () => {
  assert.ok(
    Math.abs(radiansToDegrees(Math.PI) - 180) < EPSILON
  );
});

test("sin", () => {
  assert.ok(Math.abs(sin(30) - 0.5) < EPSILON);
  assert.ok(Math.abs(sin(90) - 1) < EPSILON);
});

test("cos", () => {
  assert.ok(Math.abs(cos(60) - 0.5) < EPSILON);
  assert.ok(Math.abs(cos(180) + 1) < EPSILON);
});

test("tan", () => {
  assert.ok(
    Math.abs(tan(45) - 1) < EPSILON
  );
});

test("asin", () => {
  assert.ok(
    Math.abs(asin(0.5) - 30) < EPSILON
  );
});

test("acos", () => {
  assert.ok(
    Math.abs(acos(0.5) - 60) < EPSILON
  );
});

test("atan", () => {
  assert.ok(
    Math.abs(atan(1) - 45) < EPSILON
  );
});

test("hypotenuse", () => {
  assert.equal(
    hypotenuse(3, 4),
    5
  );
});

test("asin throws", () => {
  assert.throws(
    () => asin(2),
    /between -1 and 1/
  );
});

test("acos throws", () => {
  assert.throws(
    () => acos(-2),
    /between -1 and 1/
  );
});