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
  hypotenuse,  cot,
  sec,
  csc,
  acot,
  asec,
  acsc,
  sinh,
  cosh,
  tanh,
  asinh,
  acosh,
  atanh,
  lawOfCosines,
  lawOfSines,
  bearing,
  greatCircleDistance,
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

test("cot", () => {
  assert.ok(Math.abs(cot(45) - 1) < 1e-10);
});

test("cot undefined", () => {
  assert.throws(() => cot(0));
});

test("sec", () => {
  assert.ok(Math.abs(sec(60) - 2) < 1e-10);
});

test("sec undefined", () => {
  assert.throws(() => sec(90));
});

test("csc", () => {
  assert.ok(Math.abs(csc(30) - 2) < 1e-10);
});

test("csc undefined", () => {
  assert.throws(() => csc(0));
});

test("acot", () => {
  assert.ok(Math.abs(acot(1) - 45) < 1e-10);
});

test("asec", () => {
  assert.ok(Math.abs(asec(2) - 60) < 1e-10);
});

test("asec invalid", () => {
  assert.throws(() => asec(0.5));
});

test("acsc", () => {
  assert.ok(Math.abs(acsc(2) - 30) < 1e-10);
});

test("acsc invalid", () => {
  assert.throws(() => acsc(0.5));
});

test("sinh", () => {
  assert.equal(sinh(0), 0);
});

test("cosh", () => {
  assert.equal(cosh(0), 1);
});

test("tanh", () => {
  assert.equal(tanh(0), 0);
});

test("asinh", () => {
  assert.equal(asinh(0), 0);
});

test("acosh", () => {
  assert.equal(acosh(1), 0);
});

test("acosh invalid", () => {
  assert.throws(() => acosh(0));
});

test("atanh", () => {
  assert.equal(atanh(0), 0);
});

test("atanh invalid", () => {
  assert.throws(() => atanh(1));
});

test("lawOfCosines", () => {
  assert.ok(Math.abs(lawOfCosines(3, 4, 90) - 5) < 1e-10);
});

test("lawOfSines", () => {
  assert.ok(Math.abs(lawOfSines(10, 30, 90) - 20) < 1e-10);
});

test("bearing", () => {
  assert.ok(Math.abs(bearing(0, 0, 1, 0)) < 1e-10);
});

test("greatCircleDistance", () => {
  assert.ok(
    Math.abs(greatCircleDistance(0, 0, 0, 1) - 111.195) < 0.5
  );
});