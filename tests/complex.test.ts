import test from "node:test";
import assert from "node:assert/strict";

import {
  complexAdd,
  complexSubtract,
  complexMultiply,
  complexDivide,
  complexMagnitude,
  complexConjugate,
  complexArgument,
  complexFromPolar,
  complexToPolar,
  complexEquals,
  complexPower,
  complexSqrt,
  complexExp,
  complexLog,
} from "../src/index.js";

const EPSILON = 1e-10;

test("complexAdd", () => {
  assert.deepEqual(
    complexAdd({ real: 2, imaginary: 3 }, { real: 4, imaginary: 5 }),
    {
      real: 6,
      imaginary: 8,
    },
  );
});

test("complexSubtract", () => {
  assert.deepEqual(
    complexSubtract({ real: 5, imaginary: 7 }, { real: 2, imaginary: 3 }),
    {
      real: 3,
      imaginary: 4,
    },
  );
});

test("complexMultiply", () => {
  assert.deepEqual(
    complexMultiply({ real: 2, imaginary: 3 }, { real: 4, imaginary: 5 }),
    {
      real: -7,
      imaginary: 22,
    },
  );
});

test("complexDivide", () => {
  const result = complexDivide(
    { real: 1, imaginary: 2 },
    { real: 3, imaginary: 4 },
  );

  assert.ok(Math.abs(result.real - 0.44) < EPSILON);

  assert.ok(Math.abs(result.imaginary - 0.08) < EPSILON);
});

test("complexMagnitude", () => {
  assert.equal(
    complexMagnitude({
      real: 3,
      imaginary: 4,
    }),
    5,
  );
});

test("divide by zero complex number", () => {
  assert.throws(
    () => complexDivide({ real: 1, imaginary: 2 }, { real: 0, imaginary: 0 }),
    /zero complex number/,
  );
});

test("multiply by zero", () => {
  assert.deepEqual(
    complexMultiply({ real: 5, imaginary: 7 }, { real: 0, imaginary: 0 }),
    {
      real: 0,
      imaginary: 0,
    },
  );
});

test("magnitude of zero", () => {
  assert.equal(
    complexMagnitude({
      real: 0,
      imaginary: 0,
    }),
    0,
  );
});

test("complexConjugate", () => {
  assert.deepEqual(complexConjugate({ real: 3, imaginary: 4 }), {
    real: 3,
    imaginary: -4,
  });
});

test("complexArgument", () => {
  assert.ok(
    Math.abs(complexArgument({ real: 1, imaginary: 1 }) - Math.PI / 4) < 1e-10,
  );
});

test("complexFromPolar", () => {
  const z = complexFromPolar(2, Math.PI / 2);

  assert.ok(Math.abs(z.real) < 1e-10);
  assert.ok(Math.abs(z.imaginary - 2) < 1e-10);
});

test("complexFromPolar negative radius", () => {
  assert.throws(() => complexFromPolar(-1, 0));
});

test("complexToPolar", () => {
  const polar = complexToPolar({
    real: 3,
    imaginary: 4,
  });

  assert.equal(polar.radius, 5);
  assert.ok(Math.abs(polar.theta - Math.atan2(4, 3)) < 1e-10);
});

test("complexEquals true", () => {
  assert.equal(
    complexEquals(
      { real: 1, imaginary: 2 },
      { real: 1 + 1e-12, imaginary: 2 - 1e-12 },
    ),
    true,
  );
});

test("complexEquals false", () => {
  assert.equal(
    complexEquals({ real: 1, imaginary: 2 }, { real: 2, imaginary: 2 }),
    false,
  );
});

test("complexPower", () => {
  const z = complexPower({ real: 1, imaginary: 1 }, 2);

  assert.ok(Math.abs(z.real) < 1e-10);
  assert.ok(Math.abs(z.imaginary - 2) < 1e-10);
});

test("complexPower non-integer exponent", () => {
  assert.throws(() => complexPower({ real: 1, imaginary: 1 }, 2.5));
});

test("complexSqrt", () => {
  const z = complexSqrt({
    real: -1,
    imaginary: 0,
  });

  assert.ok(Math.abs(z.real) < 1e-10);
  assert.ok(Math.abs(z.imaginary - 1) < 1e-10);
});

test("complexExp", () => {
  const z = complexExp({
    real: 0,
    imaginary: Math.PI,
  });

  assert.ok(Math.abs(z.real + 1) < 1e-10);
  assert.ok(Math.abs(z.imaginary) < 1e-10);
});

test("complexLog", () => {
  const z = complexLog({
    real: 1,
    imaginary: 0,
  });

  assert.ok(Math.abs(z.real) < 1e-10);
  assert.ok(Math.abs(z.imaginary) < 1e-10);
});

test("complexLog zero", () => {
  assert.throws(() =>
    complexLog({
      real: 0,
      imaginary: 0,
    }),
  );
});
