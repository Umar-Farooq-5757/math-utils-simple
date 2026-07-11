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
  randomNormal,
  randomExponential,
  randomPoisson,
  randomBinomial,
  randomTriangular,
  randomWeightedShuffle,
  uuidV4,
  randomPassword,
  randomPrime,
  randomPermutation,
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
  assert.throws(() => randomInt(10, 5), /Minimum cannot be greater/);
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
  assert.throws(() => randomChoice([]), /empty array/);
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

  assert.equal(new Set(values).size, values.length);
});

test("sample count zero", () => {
  assert.deepEqual(sample([1, 2, 3], 0), []);
});

test("sample throws when count exceeds length", () => {
  assert.throws(() => sample([1, 2], 3), /Count cannot exceed/);
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
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
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
    randomDate(new Date("2021-01-01"), new Date("2020-01-01")),
  );
});

test("weightedChoice", () => {
  const value = weightedChoice(["A", "B", "C"], [1, 2, 3]);

  assert.ok(["A", "B", "C"].includes(value));
});

test("weightedChoice empty array", () => {
  assert.throws(() => weightedChoice([], []));
});

test("weightedChoice mismatched lengths", () => {
  assert.throws(() => weightedChoice(["A"], [1, 2]));
});

test("weightedChoice negative weight", () => {
  assert.throws(() => weightedChoice(["A", "B"], [1, -2]));
});

test("weightedChoice zero total weight", () => {
  assert.throws(() => weightedChoice(["A", "B"], [0, 0]));
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

test("randomNormal default", () => {
  const value = randomNormal();

  assert.equal(typeof value, "number");
  assert.ok(Number.isFinite(value));
});

test("randomNormal custom", () => {
  const value = randomNormal(100, 15);

  assert.equal(typeof value, "number");
});

test("randomNormal invalid deviation", () => {
  assert.throws(() => randomNormal(0, 0));
});

test("randomExponential", () => {
  const value = randomExponential();

  assert.ok(value >= 0);
});

test("randomExponential custom", () => {
  const value = randomExponential(2);

  assert.ok(value >= 0);
});

test("randomExponential invalid", () => {
  assert.throws(() => randomExponential(0));
});

test("randomPoisson", () => {
  const value = randomPoisson(4);

  assert.ok(Number.isInteger(value));
  assert.ok(value >= 0);
});

test("randomPoisson invalid", () => {
  assert.throws(() => randomPoisson(0));
});

test("randomBinomial", () => {
  const value = randomBinomial(20, 0.5);

  assert.ok(Number.isInteger(value));
  assert.ok(value >= 0);
  assert.ok(value <= 20);
});

test("randomBinomial invalid trials", () => {
  assert.throws(() => randomBinomial(-1, 0.5));
});

test("randomBinomial invalid probability", () => {
  assert.throws(() => randomBinomial(10, 2));
});

test("randomTriangular", () => {
  const value = randomTriangular(10, 20, 30);

  assert.ok(value >= 10);
  assert.ok(value <= 30);
});

test("randomTriangular invalid", () => {
  assert.throws(() => randomTriangular(10, 40, 30));
});

test("randomWeightedShuffle", () => {
  const result = randomWeightedShuffle(["a", "b", "c"], [5, 2, 1]);

  assert.equal(result.length, 3);

  assert.deepEqual([...result].sort(), ["a", "b", "c"]);
});

test("randomWeightedShuffle invalid", () => {
  assert.throws(() => randomWeightedShuffle(["a"], [1, 2]));
});

test("uuidV4", () => {
  const id = uuidV4();

  assert.match(
    id,
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  );
});

test("randomPassword default", () => {
  const password = randomPassword();

  assert.equal(password.length, 12);
});

test("randomPassword custom length", () => {
  const password = randomPassword({
    length: 20,
  });

  assert.equal(password.length, 20);
});

test("randomPassword invalid length", () => {
  assert.throws(() => randomPassword({ length: 0 }));
});

test("randomPassword no charset", () => {
  assert.throws(() =>
    randomPassword({
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
    }),
  );
});

test("randomPrime", () => {
  const value = randomPrime(10, 30);

  assert.ok([11, 13, 17, 19, 23, 29].includes(value));
});

test("randomPrime no primes", () => {
  assert.throws(() => randomPrime(14, 16));
});

test("randomPermutation", () => {
  const original = [1, 2, 3, 4, 5];

  const shuffled = randomPermutation(original);

  assert.equal(shuffled.length, original.length);

  assert.deepEqual(
    [...shuffled].sort((a, b) => a - b),
    [...original],
  );
});
