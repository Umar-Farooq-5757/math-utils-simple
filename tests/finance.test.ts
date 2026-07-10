import test from "node:test";
import assert from "node:assert/strict";

import {
  simpleInterest,
  compoundInterest,
  loanEMI,
  futureValue,
  presentValue,
  amortizationSchedule,
  annuityPayment,
  netPresentValue,
  internalRateOfReturn,
  effectiveAnnualRate,
  nominalRate,
  paybackPeriod,
  depreciationStraightLine,
  depreciationDecliningBalance,
} from "../src/index.js";

const EPSILON = 0.01;

test("simpleInterest", () => {
  assert.equal(simpleInterest(1000, 10, 2), 200);
});

test("compoundInterest", () => {
  const result = compoundInterest(1000, 10, 2);

  assert.ok(Math.abs(result - 210) < EPSILON);
});

test("futureValue", () => {
  const result = futureValue(1000, 10, 2);

  assert.ok(Math.abs(result - 1210) < EPSILON);
});

test("presentValue", () => {
  const result = presentValue(1210, 10, 2);

  assert.ok(Math.abs(result - 1000) < EPSILON);
});

test("loanEMI", () => {
  const emi = loanEMI(100000, 12, 12);

  assert.ok(emi > 8800);
  assert.ok(emi < 8900);
});

test("loanEMI with zero interest", () => {
  assert.equal(loanEMI(12000, 0, 12), 1000);
});

test("loanEMI throws", () => {
  assert.throws(() => loanEMI(1000, 10, 0), /Months/);
});

test("amortizationSchedule", () => {
  const schedule = amortizationSchedule(100000, 6, 30);

  assert.equal(schedule.length, 360);
  assert.ok(schedule[0].payment > 0);
  assert.equal(schedule[schedule.length - 1].remainingBalance, 0);
});

test("annuityPayment", () => {
  const payment = annuityPayment(100000, 6, 30);

  assert.ok(payment > 0);
});

test("netPresentValue", () => {
  const npv = netPresentValue(10, [-1000, 500, 500, 500]);

  assert.ok(npv > 200 && npv < 300);
});

test("internalRateOfReturn", () => {
  const irr = internalRateOfReturn([-1000, 500, 500, 500]);

  assert.ok(irr > 20 && irr < 30);
});

test("effectiveAnnualRate", () => {
  const ear = effectiveAnnualRate(12, 12);

  assert.ok(Math.abs(ear - 12.6825) < 0.01);
});

test("nominalRate", () => {
  const nominal = nominalRate(12.6825, 12);

  assert.ok(Math.abs(nominal - 12) < 0.05);
});

test("paybackPeriod", () => {
  const period = paybackPeriod(1000, [300, 300, 300, 300]);

  assert.ok(Math.abs(period - 3.3333) < 0.01);
});

test("paybackPeriod never recovered", () => {
  assert.throws(() => paybackPeriod(1000, [100, 100, 100]));
});

test("depreciationStraightLine", () => {
  assert.equal(depreciationStraightLine(10000, 1000, 9), 1000);
});

test("depreciationStraightLine invalid", () => {
  assert.throws(() => depreciationStraightLine(1000, 2000, 5));
});

test("depreciationDecliningBalance", () => {
  assert.equal(depreciationDecliningBalance(10000, 20), 2000);
});

test("depreciationDecliningBalance invalid rate", () => {
  assert.throws(() => depreciationDecliningBalance(10000, 120));
});
