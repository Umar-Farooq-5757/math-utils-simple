import test from "node:test";
import assert from "node:assert/strict";

import {
  simpleInterest,
  compoundInterest,
  loanEMI,
  futureValue,
  presentValue,
} from "../src/index.js";

const EPSILON = 0.01;

test("simpleInterest", () => {
  assert.equal(
    simpleInterest(1000, 10, 2),
    200
  );
});

test("compoundInterest", () => {
  const result = compoundInterest(
    1000,
    10,
    2
  );

  assert.ok(
    Math.abs(result - 210) < EPSILON
  );
});

test("futureValue", () => {
  const result = futureValue(
    1000,
    10,
    2
  );

  assert.ok(
    Math.abs(result - 1210) < EPSILON
  );
});

test("presentValue", () => {
  const result = presentValue(
    1210,
    10,
    2
  );

  assert.ok(
    Math.abs(result - 1000) < EPSILON
  );
});

test("loanEMI", () => {
  const emi = loanEMI(
    100000,
    12,
    12
  );

  assert.ok(emi > 8800);
  assert.ok(emi < 8900);
});

test("loanEMI with zero interest", () => {
  assert.equal(
    loanEMI(12000, 0, 12),
    1000
  );
});

test("loanEMI throws", () => {
  assert.throws(
    () => loanEMI(1000, 10, 0),
    /Months/
  );
});