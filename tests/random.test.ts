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
  randomSign,
  randomHexColor,
  randomRGB,
  randomUUID,
  randomString,
  randomDate,
  weightedChoice,
  randomGaussian,
  randomSeed,
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

test("randomSign", () => {
  const value = randomSign();
  assert.ok(value === -1 || value === 1);
});

test("randomHexColor", () => {
  const color = randomHexColor();
  assert.match(color, /^#[0-9a-fA-F]{6}$/);
});

test("randomRGB", () => {
  const rgb = randomRGB();
  assert.match(rgb, /^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
});

test("randomUUID", () => {
  const id = randomUUID();

  assert.match(
    id,
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  );
});

test("randomString default charset", () => {
  const str = randomString(20);

  assert.equal(str.length, 20);
});

test("randomString custom charset", () => {
  const str = randomString(50, "ABC");

  assert.match(str, /^[ABC]+$/);
});

test("randomString negative length", () => {
  assert.throws(() => randomString(-1));
});

test("randomString empty charset", () => {
  assert.throws(() => randomString(5, ""));
});

test("randomDate", () => {
  const start = new Date("2020-01-01");
  const end = new Date("2020-12-31");

  const date = randomDate(start, end);

  assert.ok(date >= start);
  assert.ok(date <= end);
});

test("randomDate invalid range", () => {
  assert.throws(() =>
    randomDate(new Date("2021-01-01"), new Date("2020-01-01"))
  );
});

test("weightedChoice", () => {
  const value = weightedChoice(
    ["A", "B", "C"],
    [1, 2, 3]
  );

  assert.ok(["A", "B", "C"].includes(value));
});

test("weightedChoice empty array", () => {
  assert.throws(() =>
    weightedChoice([], [])
  );
});

test("weightedChoice mismatched lengths", () => {
  assert.throws(() =>
    weightedChoice(["A"], [1, 2])
  );
});

test("weightedChoice negative weight", () => {
  assert.throws(() =>
    weightedChoice(["A", "B"], [1, -2])
  );
});

test("weightedChoice zero total weight", () => {
  assert.throws(() =>
    weightedChoice(["A", "B"], [0, 0])
  );
});

test("randomGaussian", () => {
  const value = randomGaussian();

  assert.equal(typeof value, "number");
});

test("randomGaussian custom parameters", () => {
  const value = randomGaussian(10, 5);

  assert.equal(typeof value, "number");
});

test("randomGaussian negative stdDev", () => {
  assert.throws(() => randomGaussian(0, -1));
});

test("randomSeed reproducible sequence", () => {
  const rng1 = randomSeed(12345);
  const rng2 = randomSeed(12345);

  assert.equal(rng1(), rng2());
  assert.equal(rng1(), rng2());
  assert.equal(rng1(), rng2());
  assert.equal(rng1(), rng2());
});

test("randomSeed different seeds", () => {
  const rng1 = randomSeed(1);
  const rng2 = randomSeed(2);

  assert.notEqual(rng1(), rng2());
});

test("randomSeed output range", () => {
  const rng = randomSeed(42);

  for (let i = 0; i < 100; i++) {
    const value = rng();

    assert.ok(value >= 0);
    assert.ok(value < 1);
  }
});