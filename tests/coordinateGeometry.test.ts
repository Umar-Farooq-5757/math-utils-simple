import test from "node:test";
import assert from "node:assert/strict";

import {
  slope,
  distance,
  midpoint,
  lineEquation,
  circleEquation,
  reflectPoint,
  rotatePoint,
  translatePoint,
  scalePoint,
} from "../src/index.js";

test("slope", () => {
  assert.equal(slope({ x: 1, y: 2 }, { x: 5, y: 10 }), 2);
});

test("slope negative", () => {
  assert.equal(slope({ x: 1, y: 5 }, { x: 3, y: 1 }), -2);
});

test("slope vertical line", () => {
  assert.throws(() => slope({ x: 2, y: 1 }, { x: 2, y: 8 }));
});

test("distance", () => {
  assert.equal(distance({ x: 0, y: 0 }, { x: 3, y: 4 }), 5);
});

test("distance identical points", () => {
  assert.equal(distance({ x: 2, y: 2 }, { x: 2, y: 2 }), 0);
});

test("midpoint", () => {
  assert.deepEqual(midpoint({ x: 2, y: 4 }, { x: 6, y: 8 }), {
    x: 4,
    y: 6,
  });
});

test("lineEquation", () => {
  const line = lineEquation({ x: 1, y: 2 }, { x: 3, y: 6 });

  assert.equal(line.a, -4);
  assert.equal(line.b, 2);
  assert.equal(line.c, 0);
});

test("lineEquation identical points", () => {
  assert.throws(() => lineEquation({ x: 2, y: 2 }, { x: 2, y: 2 }));
});

test("circleEquation", () => {
  const circle = circleEquation({ x: 2, y: -3 }, 5);

  assert.equal(circle.radius, 5);
  assert.deepEqual(circle.center, {
    x: 2,
    y: -3,
  });

  assert.equal(circle.equation, "(x - 2)² + (y + 3)² = 25");
});

test("circleEquation invalid radius", () => {
  assert.throws(() => circleEquation({ x: 0, y: 0 }, 0));
});

test("reflectPoint x-axis", () => {
  assert.deepEqual(reflectPoint({ x: 3, y: -5 }, "x"), {
    x: 3,
    y: 5,
  });
});

test("reflectPoint y-axis", () => {
  assert.deepEqual(reflectPoint({ x: 3, y: -5 }, "y"), {
    x: -3,
    y: -5,
  });
});

test("reflectPoint origin", () => {
  assert.deepEqual(reflectPoint({ x: 3, y: -5 }, "origin"), {
    x: -3,
    y: 5,
  });
});

test("rotatePoint 90 degrees", () => {
  const point = rotatePoint({ x: 1, y: 0 }, 90);

  assert.ok(Math.abs(point.x) < 1e-10);
  assert.ok(Math.abs(point.y - 1) < 1e-10);
});

test("rotatePoint 180 degrees", () => {
  const point = rotatePoint({ x: 2, y: 3 }, 180);

  assert.ok(Math.abs(point.x + 2) < 1e-10);
  assert.ok(Math.abs(point.y + 3) < 1e-10);
});

test("translatePoint", () => {
  assert.deepEqual(translatePoint({ x: 2, y: 3 }, 4, -1), {
    x: 6,
    y: 2,
  });
});

test("scalePoint uniform", () => {
  assert.deepEqual(scalePoint({ x: 2, y: 3 }, 2), {
    x: 4,
    y: 6,
  });
});

test("scalePoint non-uniform", () => {
  assert.deepEqual(scalePoint({ x: 2, y: 3 }, 2, 3), {
    x: 4,
    y: 9,
  });
});
