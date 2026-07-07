import test from "node:test";
import assert from "node:assert/strict";

import {
  ln,
  log10,
  log2,
  log,
} from "../src/index.js";

const EPSILON = 1e-10;

test("ln", () => {
  assert.ok(
    Math.abs(ln(Math.E) - 1) < EPSILON
  );
});

test("log10", () => {
  assert.ok(
    Math.abs(log10(1000) - 3) < EPSILON
  );
});

test("log2", () => {
  assert.ok(
    Math.abs(log2(32) - 5) < EPSILON
  );
});

test("log", () => {
  assert.ok(
    Math.abs(log(3, 81) - 4) < EPSILON
  );
});

test("ln throws", () => {
  assert.throws(
    () => ln(0),
    /greater than zero/
  );
});

test("log throws for invalid base", () => {
  assert.throws(
    () => log(1, 10),
    /Base/
  );
});