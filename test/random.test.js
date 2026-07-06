import test from "node:test";
import assert from "node:assert/strict";

import {
  random,
  randomInt,
  randomFloat,
  randomBoolean,
  randomChoice,
  shuffle,
  sample,
} from "../src/index.js";

test("random", () => {
  const value = random();

  assert.ok(value >= 0);
  assert.ok(value < 1);
});

test("randomInt", () => {
  for (let i = 0; i < 100; i++) {
    const value = randomInt(5, 10);

    assert.ok(Number.isInteger(value));
    assert.ok(value >= 5);
    assert.ok(value <= 10);
  }
});

test("randomInt throws", () => {
  assert.throws(
    () => randomInt(10, 5),
    /Minimum cannot be greater/
  );
});

test("randomFloat", () => {
  for (let i = 0; i < 100; i++) {
    const value = randomFloat(1.5, 2.5);

    assert.ok(value >= 1.5);
    assert.ok(value < 2.5);
  }
});

test("randomBoolean", () => {
  const value = randomBoolean();

  assert.equal(typeof value, "boolean");
});

test("randomChoice", () => {
  const array = [10, 20, 30, 40];

  const value = randomChoice(array);

  assert.ok(array.includes(value));
});

test("randomChoice throws", () => {
  assert.throws(
    () => randomChoice([]),
    /empty array/
  );
});

test("shuffle", () => {
  const original = [1, 2, 3, 4, 5];
  const shuffled = shuffle(original);

  assert.equal(shuffled.length, original.length);

  for (const value of original) {
    assert.ok(shuffled.includes(value));
  }
});

test("shuffle does not modify original array", () => {
  const original = [1, 2, 3];
  const copy = [...original];

  shuffle(original);

  assert.deepEqual(original, copy);
});

test("sample", () => {
  const values = sample([1, 2, 3, 4, 5], 3);

  assert.equal(values.length, 3);

  for (const value of values) {
    assert.ok([1, 2, 3, 4, 5].includes(value));
  }

  assert.equal(
    new Set(values).size,
    values.length
  );
});

test("sample count zero", () => {
  assert.deepEqual(
    sample([1, 2, 3], 0),
    []
  );
});

test("sample throws when count exceeds length", () => {
  assert.throws(
    () => sample([1, 2], 3),
    /Count cannot exceed/
  );
});