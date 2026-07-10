export interface AmortizationPayment {
  paymentNumber: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export default function amortizationSchedule(
  principal: number,
  annualRate: number,
  years: number,
  paymentsPerYear: number = 12,
): AmortizationPayment[] {
  if (principal <= 0) {
    throw new Error("Principal must be greater than zero.");
  }

  if (annualRate < 0) {
    throw new Error("Interest rate cannot be negative.");
  }

  if (years <= 0) {
    throw new Error("Years must be greater than zero.");
  }

  if (paymentsPerYear <= 0) {
    throw new Error("Payments per year must be greater than zero.");
  }

  const rate = annualRate / 100 / paymentsPerYear;
  const totalPayments = years * paymentsPerYear;

  const payment =
    rate === 0
      ? principal / totalPayments
      : (principal * rate * Math.pow(1 + rate, totalPayments)) /
        (Math.pow(1 + rate, totalPayments) - 1);

  const schedule: AmortizationPayment[] = [];

  let balance = principal;

  for (let i = 1; i <= totalPayments; i++) {
    const interest = balance * rate;
    const principalPaid = payment - interest;

    balance -= principalPaid;

    if (Math.abs(balance) < 1e-8) {
      balance = 0;
    }

    schedule.push({
      paymentNumber: i,
      payment,
      principal: principalPaid,
      interest,
      remainingBalance: balance,
    });
  }

  return schedule;
}
