import test from "node:test";
import assert from "node:assert/strict";

import {
  metersToFeet,
  feetToMeters,
  celsiusToKelvin,
  fahrenheitToCelsius,
  kmhToMph,
  mphToKmh,
  bytesToKB,
  kbToMB,
  litersToGallons,
  gramsToOunces,
} from "../src/index.js";

/* -------------------------------------------------------------------------- */
/* Length                                                                      */
/* -------------------------------------------------------------------------- */

test("metersToFeet", () => {
  assert.ok(Math.abs(metersToFeet(1) - 3.280839895) < 1e-10);
});

test("metersToFeet zero", () => {
  assert.equal(metersToFeet(0), 0);
});

test("metersToFeet invalid", () => {
  assert.throws(() => metersToFeet(Number.NaN));
});

test("feetToMeters", () => {
  assert.ok(Math.abs(feetToMeters(1) - 0.3048) < 1e-10);
});

test("feetToMeters zero", () => {
  assert.equal(feetToMeters(0), 0);
});

test("feetToMeters invalid", () => {
  assert.throws(() => feetToMeters(Number.POSITIVE_INFINITY));
});

/* -------------------------------------------------------------------------- */
/* Temperature                                                                 */
/* -------------------------------------------------------------------------- */

test("celsiusToKelvin", () => {
  assert.equal(celsiusToKelvin(0), 273.15);
});

test("celsiusToKelvin boiling point", () => {
  assert.equal(celsiusToKelvin(100), 373.15);
});

test("celsiusToKelvin invalid", () => {
  assert.throws(() => celsiusToKelvin(Number.NaN));
});

test("fahrenheitToCelsius", () => {
  assert.equal(fahrenheitToCelsius(32), 0);
});

test("fahrenheitToCelsius boiling point", () => {
  assert.equal(fahrenheitToCelsius(212), 100);
});

test("fahrenheitToCelsius invalid", () => {
  assert.throws(() => fahrenheitToCelsius(Number.NEGATIVE_INFINITY));
});

/* -------------------------------------------------------------------------- */
/* Speed                                                                       */
/* -------------------------------------------------------------------------- */

test("kmhToMph", () => {
  assert.ok(Math.abs(kmhToMph(100) - 62.1371192237334) < 1e-10);
});

test("kmhToMph zero", () => {
  assert.equal(kmhToMph(0), 0);
});

test("kmhToMph invalid", () => {
  assert.throws(() => kmhToMph(Number.NaN));
});

test("mphToKmh", () => {
  assert.equal(mphToKmh(60), 96.56064);
});

test("mphToKmh zero", () => {
  assert.equal(mphToKmh(0), 0);
});

test("mphToKmh invalid", () => {
  assert.throws(() => mphToKmh(Number.POSITIVE_INFINITY));
});

/* -------------------------------------------------------------------------- */
/* Digital Storage                                                             */
/* -------------------------------------------------------------------------- */

test("bytesToKB", () => {
  assert.equal(bytesToKB(1024), 1);
});

test("bytesToKB zero", () => {
  assert.equal(bytesToKB(0), 0);
});

test("bytesToKB invalid", () => {
  assert.throws(() => bytesToKB(Number.NaN));
});

test("kbToMB", () => {
  assert.equal(kbToMB(1024), 1);
});

test("kbToMB zero", () => {
  assert.equal(kbToMB(0), 0);
});

test("kbToMB invalid", () => {
  assert.throws(() => kbToMB(Number.POSITIVE_INFINITY));
});

/* -------------------------------------------------------------------------- */
/* Volume                                                                      */
/* -------------------------------------------------------------------------- */

test("litersToGallons", () => {
  assert.ok(Math.abs(litersToGallons(1) - 0.2641720523581484) < 1e-10);
});

test("litersToGallons zero", () => {
  assert.equal(litersToGallons(0), 0);
});

test("litersToGallons invalid", () => {
  assert.throws(() => litersToGallons(Number.NaN));
});

/* -------------------------------------------------------------------------- */
/* Mass                                                                        */
/* -------------------------------------------------------------------------- */

test("gramsToOunces", () => {
  assert.ok(Math.abs(gramsToOunces(100) - 3.527396194958041) < 1e-10);
});

test("gramsToOunces zero", () => {
  assert.equal(gramsToOunces(0), 0);
});

test("gramsToOunces invalid", () => {
  assert.throws(() => gramsToOunces(Number.NEGATIVE_INFINITY));
});