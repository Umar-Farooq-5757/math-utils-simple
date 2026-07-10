import netPresentValue from "./netPresentValue.js";

export default function internalRateOfReturn(
  cashFlows: number[],
  guess: number = 10,
): number {
  let rate = guess;

  for (let i = 0; i < 100; i++) {
    const npv = netPresentValue(rate, cashFlows);

    const derivative =
      (netPresentValue(rate + 0.0001, cashFlows) - npv) / 0.0001;

    if (Math.abs(derivative) < 1e-12) {
      throw new Error("Derivative became zero.");
    }

    const next = rate - npv / derivative;

    if (Math.abs(next - rate) < 1e-7) {
      return next;
    }

    rate = next;
  }

  throw new Error("IRR did not converge.");
}
