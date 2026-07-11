/**
 * Determines whether a date is a business day.
 *
 * A business day is Monday through Friday.
 *
 * @param date Date to check
 * @returns True if the date is a business day
 */
export default function isBusinessDay(date: Date): boolean {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new Error("date must be a valid Date.");
  }

  const day = date.getDay();

  return day >= 1 && day <= 5;
}
