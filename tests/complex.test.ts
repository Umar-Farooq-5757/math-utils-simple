import test from "node:test";
import assert from "node:assert/strict";

import {
  complexAdd,
  complexSubtract,
  complexMultiply,
  complexDivide,
  complexMagnitude,
} from "../src/index.js";

const EPSILON = 1e-10;

test("complexAdd", () => {
  assert.deepEqual(
    complexAdd(
      { real: 2, imaginary: 3 },
      { real: 4, imaginary: 5 }
    ),
    {
      real: 6,
      imaginary: 8,
    }
  );
});

test("complexSubtract", () => {
  assert.deepEqual(
    complexSubtract(
      { real: 5, imaginary: 7 },
      { real: 2, imaginary: 3 }
    ),
    {
      real: 3,
      imaginary: 4,
    }
  );
});

test("complexMultiply", () => {
  assert.deepEqual(
    complexMultiply(
      { real: 2, imaginary: 3 },
      { real: 4, imaginary: 5 }
    ),
    {
      real: -7,
      imaginary: 22,
    }
  );
});

test("complexDivide", () => {
  const result = complexDivide(
    { real: 1, imaginary: 2 },
    { real: 3, imaginary: 4 }
  );

  assert.ok(
    Math.abs(result.real - 0.44) < EPSILON
  );

  assert.ok(
    Math.abs(result.imaginary - 0.08) < EPSILON
  );
});

test("complexMagnitude", () => {
  assert.equal(
    complexMagnitude({
      real: 3,
      imaginary: 4,
    }),
    5
  );
});

test("divide by zero complex number", () => {
  assert.throws(
    () =>
      complexDivide(
        { real: 1, imaginary: 2 },
        { real: 0, imaginary: 0 }
      ),
    /zero complex number/
  );
});

test("multiply by zero", () => {
  assert.deepEqual(
    complexMultiply(
      { real: 5, imaginary: 7 },
      { real: 0, imaginary: 0 }
    ),
    {
      real: 0,
      imaginary: 0,
    }
  );
});

test("magnitude of zero", () => {
  assert.equal(
    complexMagnitude({
      real: 0,
      imaginary: 0,
    }),
    0
  );
});