import test from "node:test";
import assert from "node:assert/strict";

import {
  percentage,
  increaseByPercentage,
  decreaseByPercentage,
  percentageDifference,
  percentageChange,
  findOriginalValue,
  findFinalValue,
  discount,
  markup,
  profitPercentage,
  lossPercentage,
  margin,
  relativeChange,
} from "../src/index.js";

test("percentage", () => {
  assert.equal(percentage(25, 200), 12.5);
  assert.equal(percentage(50, 100), 50);
});

test("percentage throws when total is zero", () => {
  assert.throws(
    () => percentage(10, 0),
    /Total cannot be zero/
  );
});

test("increaseByPercentage", () => {
  assert.equal(increaseByPercentage(100, 20), 120);
  assert.equal(increaseByPercentage(80, 50), 120);
  assert.equal(increaseByPercentage(500, 0), 500);
});

test("decreaseByPercentage", () => {
  assert.equal(decreaseByPercentage(100, 20), 80);
  assert.equal(decreaseByPercentage(500, 10), 450);
  assert.equal(decreaseByPercentage(250, 0), 250);
});

test("percentageDifference", () => {
  assert.equal(percentageDifference(100, 120), 18.181818181818183);
  assert.equal(percentageDifference(50, 75), 40);
  assert.equal(percentageDifference(0, 0), 0);
});

test("percentageChange increase", () => {
  assert.equal(percentageChange(100, 120), 20);
});

test("percentageChange decrease", () => {
  assert.equal(percentageChange(100, 80), -20);
});

test("percentageChange throws when old value is zero", () => {
  assert.throws(
    () => percentageChange(0, 100),
    /Old value cannot be zero/
  );
});

test("findOriginalValue", () => {
  assert.equal(findOriginalValue(120, 20), 100);
});

test("findFinalValue", () => {
  assert.equal(findFinalValue(100, 20), 120);
});

test("discount", () => {
  assert.equal(discount(500, 10), 450);
});

test("markup", () => {
  assert.equal(markup(200, 50), 300);
});

test("profitPercentage", () => {
  assert.equal(profitPercentage(100, 130), 30);
});

test("lossPercentage", () => {
  assert.equal(lossPercentage(100, 80), 20);
  assert.equal(lossPercentage(100, 120), 0);
});

test("margin", () => {
  assert.equal(margin(70, 100), 30);
});

test("relativeChange", () => {
  assert.equal(relativeChange(120, 100), 20);
  assert.equal(relativeChange(80, 100), -20);
});

test("findOriginalValue throws", () => {
  assert.throws(
    () => findOriginalValue(100, -100),
    /Percent increase cannot be -100/
  );
});

test("profitPercentage throws", () => {
  assert.throws(
    () => profitPercentage(0, 100),
    /Cost cannot be zero/
  );
});

test("margin throws", () => {
  assert.throws(
    () => margin(100, 0),
    /Selling price cannot be zero/
  );
});

test("relativeChange throws", () => {
  assert.throws(
    () => relativeChange(100, 0),
    /Reference value cannot be zero/
  );
});