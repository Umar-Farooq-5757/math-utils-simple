import test from "node:test";
import assert from "node:assert/strict";

import {
  matrixAdd,
  matrixSubtract,
  matrixMultiply,
  transpose,
  identityMatrix,
  determinant,
  trace,
  inverseMatrix,
} from "../src/index.js";

test("matrixAdd", () => {
  assert.deepEqual(
    matrixAdd(
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5, 6],
        [7, 8],
      ],
    ),
    [
      [6, 8],
      [10, 12],
    ],
  );
});

test("matrixSubtract", () => {
  assert.deepEqual(
    matrixSubtract(
      [
        [5, 6],
        [7, 8],
      ],
      [
        [1, 2],
        [3, 4],
      ],
    ),
    [
      [4, 4],
      [4, 4],
    ],
  );
});

test("matrixMultiply (2x2)", () => {
  assert.deepEqual(
    matrixMultiply(
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5, 6],
        [7, 8],
      ],
    ),
    [
      [19, 22],
      [43, 50],
    ],
  );
});

test("matrixMultiply (2x3 × 3x2)", () => {
  assert.deepEqual(
    matrixMultiply(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      [
        [7, 8],
        [9, 10],
        [11, 12],
      ],
    ),
    [
      [58, 64],
      [139, 154],
    ],
  );
});

test("transpose square matrix", () => {
  assert.deepEqual(
    transpose([
      [1, 2],
      [3, 4],
    ]),
    [
      [1, 3],
      [2, 4],
    ],
  );
});

test("transpose rectangular matrix", () => {
  assert.deepEqual(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
    ]),
    [
      [1, 4],
      [2, 5],
      [3, 6],
    ],
  );
});

test("identityMatrix", () => {
  assert.deepEqual(identityMatrix(4), [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]);
});

test("matrixAdd throws", () => {
  assert.throws(
    () =>
      matrixAdd(
        [[1]],
        [
          [1, 2],
          [3, 4],
        ],
      ),
    /same dimensions/,
  );
});

test("matrixMultiply throws", () => {
  assert.throws(
    () =>
      matrixMultiply(
        [
          [1, 2],
          [3, 4],
        ],
        [[1, 2]],
      ),
    /columns/,
  );
});

test("identityMatrix throws", () => {
  assert.throws(() => identityMatrix(0), /positive integer/);
});

test("determinant 1x1", () => {
  assert.equal(determinant([[7]]), 7);
});

test("determinant 2x2", () => {
  assert.equal(
    determinant([
      [1, 2],
      [3, 4],
    ]),
    -2,
  );
});

test("determinant 3x3", () => {
  assert.equal(
    determinant([
      [6, 1, 1],
      [4, -2, 5],
      [2, 8, 7],
    ]),
    -306,
  );
});

test("determinant singular matrix", () => {
  assert.equal(
    determinant([
      [1, 2],
      [2, 4],
    ]),
    0,
  );
});

test("determinant row swap", () => {
  assert.equal(
    determinant([
      [0, 1],
      [1, 0],
    ]),
    -1,
  );
});

test("trace 2x2", () => {
  assert.equal(
    trace([
      [1, 2],
      [3, 4],
    ]),
    5,
  );
});

test("trace 4x4", () => {
  assert.equal(
    trace([
      [1, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 3, 0],
      [0, 0, 0, 4],
    ]),
    10,
  );
});

test("trace throws", () => {
  assert.throws(
    () =>
      trace([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    /square/,
  );
});

test("determinant throws", () => {
  assert.throws(
    () =>
      determinant([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
    /square/,
  );
});

test("inverseMatrix 2x2", () => {
  const result = inverseMatrix([
    [4, 7],
    [2, 6],
  ]);

  const expected = [
    [0.6, -0.7],
    [-0.2, 0.4],
  ];

  const EPSILON = 1e-10;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      assert.ok(Math.abs(result[i][j] - expected[i][j]) < EPSILON);
    }
  }
});

test("inverse identity matrix", () => {
  assert.deepEqual(inverseMatrix(identityMatrix(4)), identityMatrix(4));
});

test("A * inverse(A) = I", () => {
  const matrix = [
    [2, 1],
    [5, 3],
  ];

  const inverse = inverseMatrix(matrix);

  const result = matrixMultiply(matrix, inverse);

  const EPSILON = 1e-10;

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (i === j) {
        assert.ok(Math.abs(result[i][j] - 1) < EPSILON);
      } else {
        assert.ok(Math.abs(result[i][j]) < EPSILON);
      }
    }
  }
});

test("inverse singular matrix", () => {
  assert.throws(
    () =>
      inverseMatrix([
        [1, 2],
        [2, 4],
      ]),
    /singular/,
  );
});

test("inverseMatrix throws for non-square matrix", () => {
  assert.throws(
    () =>
      inverseMatrix([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    /square/,
  );
});
