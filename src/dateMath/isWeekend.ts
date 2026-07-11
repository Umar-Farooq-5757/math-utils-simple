/**
 * Determines whether a date falls on a weekend.
 *
 * Weekend is defined as Saturday or Sunday.
 *
 * @param date Date to check
 * @returns True if Saturday or Sunday
 */
export default function isWeekend(date: Date): boolean {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new Error("date must be a valid Date.");
  }

  const day = date.getDay();

  return day === 0 || day === 6;
}
