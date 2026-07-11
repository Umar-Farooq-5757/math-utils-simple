import test from "node:test";
import assert from "node:assert/strict";

import {
  solveLinear,
  solveQuadratic,
  discriminant,
  evaluatePolynomial,
  polynomialDerivative,
  polynomialIntegral,
  horner,
  syntheticDivision,
  lagrangeInterpolation,
  newtonInterpolation,
  quadraticVertex,
  lineIntersection,
  distancePointToLine,
} from "../src/index.js";

test("discriminant", () => {
  assert.equal(discriminant(1, -3, 2), 1);

  assert.equal(discriminant(1, 2, 1), 0);

  assert.equal(discriminant(1, 0, 1), -4);
});

test("solveLinear", () => {
  assert.equal(solveLinear(2, -8), 4);

  assert.equal(solveLinear(-5, 10), 2);
});

test("solveLinear throws", () => {
  assert.throws(() => solveLinear(0, 5), /cannot be zero/i);
});

test("solveQuadratic with repeated root", () => {
  assert.deepEqual(solveQuadratic(1, 2, 1), {
    root1: -1,
    root2: -1,
  });
});

test("solveQuadratic throws when a is zero", () => {
  assert.throws(() => solveQuadratic(0, 2, 1), /solveLinear/i);
});

test("quadratic with two real roots", () => {
  assert.deepEqual(solveQuadratic(1, -3, 2), {
    root1: 2,
    root2: 1,
  });
});

test("quadratic with one repeated root", () => {
  assert.deepEqual(solveQuadratic(1, 2, 1), {
    root1: -1,
    root2: -1,
  });
});

test("quadratic with complex roots", () => {
  assert.deepEqual(solveQuadratic(1, 0, 1), {
    root1: {
      real: 0,
      imaginary: 1,
    },
    root2: {
      real: 0,
      imaginary: -1,
    },
  });
});

test("evaluatePolynomial cubic", () => {
  // 2x² + 3x + 1 at x = 2
  assert.equal(evaluatePolynomial([2, 3, 1], 2), 15);
});

test("evaluatePolynomial constant", () => {
  assert.equal(evaluatePolynomial([7], 100), 7);
});

test("evaluatePolynomial empty", () => {
  assert.throws(() => evaluatePolynomial([], 2));
});

test("polynomialDerivative quadratic", () => {
  assert.deepEqual(polynomialDerivative([2, 3, 1]), [4, 3]);
});

test("polynomialDerivative constant", () => {
  assert.deepEqual(polynomialDerivative([10]), [0]);
});

test("polynomialDerivative empty", () => {
  assert.throws(() => polynomialDerivative([]));
});

test("polynomialIntegral quadratic", () => {
  assert.deepEqual(polynomialIntegral([4, 3], 7), [2, 3, 7]);
});

test("polynomialIntegral default constant", () => {
  assert.deepEqual(polynomialIntegral([2]), [2, 0]);
});

test("polynomialIntegral empty", () => {
  assert.throws(() => polynomialIntegral([]));
});

test("horner cubic", () => {
  assert.equal(horner([2, 3, 1], 2), 15);
});

test("horner constant", () => {
  assert.equal(horner([12], 50), 12);
});

test("horner empty", () => {
  assert.throws(() => horner([], 5));
});

test("horner matches evaluatePolynomial", () => {
  const coefficients = [5, -3, 8, 10];

  for (let x = -5; x <= 5; x++) {
    assert.equal(horner(coefficients, x), evaluatePolynomial(coefficients, x));
  }
});

test("syntheticDivision exact division", () => {
  // x² - 3x + 2
  // divide by (x - 1)

  const result = syntheticDivision([1, -3, 2], 1);

  assert.deepEqual(result.quotient, [1, -2]);
  assert.equal(result.remainder, 0);
});

test("syntheticDivision remainder", () => {
  const result = syntheticDivision([1, 0, 1], 1);

  assert.equal(result.remainder, 2);
});

test("syntheticDivision invalid", () => {
  assert.throws(() => syntheticDivision([5], 2));
});

test("lagrangeInterpolation linear", () => {
  const x = [0, 1];
  const y = [1, 3];

  assert.equal(lagrangeInterpolation(x, y, 0.5), 2);
});

test("lagrangeInterpolation quadratic", () => {
  const x = [0, 1, 2];
  const y = [1, 4, 9];

  assert.equal(lagrangeInterpolation(x, y, 3), 16);
});

test("lagrangeInterpolation invalid", () => {
  assert.throws(() => lagrangeInterpolation([1], [2, 3], 1));
});

test("newtonInterpolation linear", () => {
  const x = [0, 1];
  const y = [1, 3];

  assert.equal(newtonInterpolation(x, y, 0.5), 2);
});

test("newtonInterpolation quadratic", () => {
  const x = [0, 1, 2];
  const y = [1, 4, 9];

  assert.equal(newtonInterpolation(x, y, 3), 16);
});

test("newtonInterpolation invalid", () => {
  assert.throws(() => newtonInterpolation([1], [1, 2], 0));
});

test("lagrange equals newton", () => {
  const x = [1, 2, 3, 4];
  const y = [2, 5, 10, 17];

  const a = lagrangeInterpolation(x, y, 2.5);

  const b = newtonInterpolation(x, y, 2.5);

  assert.ok(Math.abs(a - b) < 1e-10);
});

test("quadraticVertex upward parabola", () => {
  const vertex = quadraticVertex(1, -4, 3);

  assert.equal(vertex.x, 2);
  assert.equal(vertex.y, -1);
});

test("quadraticVertex downward parabola", () => {
  const vertex = quadraticVertex(-1, 4, -3);

  assert.equal(vertex.x, 2);
  assert.equal(vertex.y, 1);
});

test("quadraticVertex invalid", () => {
  assert.throws(() => quadraticVertex(0, 2, 3));
});

test("lineIntersection simple", () => {
  const point = lineIntersection(0, 0, 4, 4, 0, 4, 4, 0);

  assert.ok(Math.abs(point.x - 2) < 1e-10);
  assert.ok(Math.abs(point.y - 2) < 1e-10);
});

test("lineIntersection vertical/horizontal", () => {
  const point = lineIntersection(2, 0, 2, 5, 0, 3, 5, 3);

  assert.equal(point.x, 2);
  assert.equal(point.y, 3);
});

test("lineIntersection parallel", () => {
  assert.throws(() => lineIntersection(0, 0, 2, 2, 1, 1, 3, 3));
});

test("distancePointToLine horizontal", () => {
  assert.equal(distancePointToLine(2, 5, 0, 0, 5, 0), 5);
});

test("distancePointToLine vertical", () => {
  assert.equal(distancePointToLine(4, 2, 0, 0, 0, 5), 4);
});

test("distancePointToLine diagonal", () => {
  const distance = distancePointToLine(1, 0, 0, 0, 1, 1);

  assert.ok(Math.abs(distance - Math.sqrt(2) / 2) < 1e-10);
});

test("distancePointToLine invalid", () => {
  assert.throws(() => distancePointToLine(1, 1, 2, 2, 2, 2));
});
