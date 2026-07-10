export default function annuityPayment(
  presentValue: number,
  annualRate: number,
  years: number,
  paymentsPerYear: number = 12,
): number {
  if (presentValue <= 0) {
    throw new Error("Present value must be greater than zero.");
  }

  const r = annualRate / 100 / paymentsPerYear;
  const n = years * paymentsPerYear;

  if (r === 0) {
    return presentValue / n;
  }

  return (presentValue * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}
