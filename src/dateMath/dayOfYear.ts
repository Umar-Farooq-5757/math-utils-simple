/**
 * Returns the day number within the year.
 *
 * January 1 => 1
 * December 31 => 365 (or 366 in leap years)
 *
 * @param date Date to evaluate
 * @returns Day of the year (1-365/366)
 */
export default function dayOfYear(date: Date): number {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new Error("date must be a valid Date.");
  }

  const startOfYear = Date.UTC(date.getUTCFullYear(), 0, 1);

  const currentDate = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
  );

  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  return Math.floor((currentDate - startOfYear) / MS_PER_DAY) + 1;
}
