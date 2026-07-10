export default function paybackPeriod(
  initialInvestment: number,
  cashFlows: number[],
): number {
  if (initialInvestment <= 0) {
    throw new Error("Initial investment must be greater than zero.");
  }

  let recovered = 0;

  for (let i = 0; i < cashFlows.length; i++) {
    recovered += cashFlows[i];

    if (recovered >= initialInvestment) {
      const excess = recovered - initialInvestment;
      return i + 1 - excess / cashFlows[i];
    }
  }

  throw new Error("Investment is never recovered.");
}
