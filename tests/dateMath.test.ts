import test from "node:test";
import assert from "node:assert/strict";

import {
  daysBetween,
  weeksBetween,
  monthsBetween,
  isWeekend,
  isBusinessDay,
  addBusinessDays,
  age,
  dayOfYear,
} from "../src/index.js";

/* -------------------------------------------------------------------------- */
/* daysBetween                                                                 */
/* -------------------------------------------------------------------------- */

test("daysBetween", () => {
  const d1 = new Date("2025-01-01");
  const d2 = new Date("2025-01-11");

  assert.equal(daysBetween(d1, d2), 10);
});

test("daysBetween same date", () => {
  const d = new Date("2025-05-10");

  assert.equal(daysBetween(d, d), 0);
});

test("daysBetween reverse order", () => {
  const d1 = new Date("2025-01-11");
  const d2 = new Date("2025-01-01");

  assert.equal(daysBetween(d1, d2), 10);
});

test("daysBetween invalid", () => {
  assert.throws(() => daysBetween(new Date("invalid"), new Date()));
});

/* -------------------------------------------------------------------------- */
/* weeksBetween                                                                */
/* -------------------------------------------------------------------------- */

test("weeksBetween", () => {
  const d1 = new Date("2025-01-01");
  const d2 = new Date("2025-01-29");

  assert.equal(weeksBetween(d1, d2), 4);
});

test("weeksBetween partial week", () => {
  const d1 = new Date("2025-01-01");
  const d2 = new Date("2025-01-10");

  assert.equal(weeksBetween(d1, d2), 1);
});

test("weeksBetween invalid", () => {
  assert.throws(() => weeksBetween(new Date(), new Date("invalid")));
});

/* -------------------------------------------------------------------------- */
/* monthsBetween                                                               */
/* -------------------------------------------------------------------------- */

test("monthsBetween", () => {
  assert.equal(
    monthsBetween(new Date("2025-01-15"), new Date("2025-04-15")),
    3,
  );
});

test("monthsBetween incomplete month", () => {
  assert.equal(
    monthsBetween(new Date("2025-01-15"), new Date("2025-02-14")),
    0,
  );
});

test("monthsBetween reverse order", () => {
  assert.equal(
    monthsBetween(new Date("2025-05-01"), new Date("2025-01-01")),
    4,
  );
});

test("monthsBetween invalid", () => {
  assert.throws(() => monthsBetween(new Date("invalid"), new Date()));
});

/* -------------------------------------------------------------------------- */
/* isWeekend                                                                   */
/* -------------------------------------------------------------------------- */

test("isWeekend Saturday", () => {
  assert.equal(isWeekend(new Date("2025-07-12")), true);
});

test("isWeekend Sunday", () => {
  assert.equal(isWeekend(new Date("2025-07-13")), true);
});

test("isWeekend weekday", () => {
  assert.equal(isWeekend(new Date("2025-07-14")), false);
});

test("isWeekend invalid", () => {
  assert.throws(() => isWeekend(new Date("invalid")));
});

/* -------------------------------------------------------------------------- */
/* isBusinessDay                                                               */
/* -------------------------------------------------------------------------- */

test("isBusinessDay weekday", () => {
  assert.equal(isBusinessDay(new Date("2025-07-14")), true);
});

test("isBusinessDay Saturday", () => {
  assert.equal(isBusinessDay(new Date("2025-07-12")), false);
});

test("isBusinessDay Sunday", () => {
  assert.equal(isBusinessDay(new Date("2025-07-13")), false);
});

test("isBusinessDay invalid", () => {
  assert.throws(() => isBusinessDay(new Date("invalid")));
});

/* -------------------------------------------------------------------------- */
/* addBusinessDays                                                             */
/* -------------------------------------------------------------------------- */

test("addBusinessDays forward", () => {
  const result = addBusinessDays(
    new Date("2025-07-11"), // Saturday
    2,
  );

  assert.equal(result.toISOString().slice(0, 10), "2025-07-15");
});

test("addBusinessDays backward", () => {
  const result = addBusinessDays(
    new Date("2025-07-14"), // Monday
    -1,
  );

  assert.equal(result.toISOString().slice(0, 10), "2025-07-11");
});

test("addBusinessDays zero", () => {
  const original = new Date("2025-07-14");
  const result = addBusinessDays(original, 0);

  assert.notEqual(result, original);
  assert.equal(result.getTime(), original.getTime());
});

test("addBusinessDays invalid date", () => {
  assert.throws(() => addBusinessDays(new Date("invalid"), 5));
});

test("addBusinessDays invalid businessDays", () => {
  assert.throws(() => addBusinessDays(new Date(), 2.5));
});

/* -------------------------------------------------------------------------- */
/* age                                                                         */
/* -------------------------------------------------------------------------- */

test("age", () => {
  assert.equal(age(new Date("2000-06-10"), new Date("2025-06-10")), 25);
});

test("age before birthday", () => {
  assert.equal(age(new Date("2000-06-10"), new Date("2025-06-09")), 24);
});

test("age invalid", () => {
  assert.throws(() => age(new Date("invalid")));
});

test("age future birth date", () => {
  assert.throws(() => age(new Date("2030-01-01"), new Date("2025-01-01")));
});

/* -------------------------------------------------------------------------- */
/* dayOfYear                                                                   */
/* -------------------------------------------------------------------------- */

test("dayOfYear first day", () => {
  assert.equal(dayOfYear(new Date("2025-01-01")), 1);
});

test("dayOfYear normal year", () => {
  assert.equal(dayOfYear(new Date("2025-12-31")), 365);
});

test("dayOfYear leap year", () => {
  assert.equal(dayOfYear(new Date("2024-12-31")), 366);
});

test("dayOfYear leap day", () => {
  assert.equal(dayOfYear(new Date("2024-02-29")), 60);
});

test("dayOfYear invalid", () => {
  assert.throws(() => dayOfYear(new Date("invalid")));
});
