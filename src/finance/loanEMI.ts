export default function loanEMI(
  principal: number,
  annualRate: number,
  months: number,
): number {
  if (months <= 0) {
    throw new Error("Months must be greater than zero.");
  }

  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    return principal / months;
  }

  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
}
