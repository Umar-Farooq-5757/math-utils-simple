export default function depreciationDecliningBalance(
  bookValue: number,
  rate: number,
): number {
  if (bookValue < 0) {
    throw new Error("Book value cannot be negative.");
  }

  if (rate < 0 || rate > 100) {
    throw new Error("Rate must be between 0 and 100.");
  }

  return bookValue * (rate / 100);
}
