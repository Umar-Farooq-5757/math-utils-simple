/**
 * Returns the number of whole days between two dates.
 *
 * The calculation is based on UTC dates to avoid issues caused by
 * daylight saving time transitions.
 *
 * @param date1 First date
 * @param date2 Second date
 * @returns Absolute number of days between the dates
 */
export default function daysBetween(date1: Date, date2: Date): number {
  if (!(date1 instanceof Date) || Number.isNaN(date1.getTime())) {
    throw new Error("date1 must be a valid Date.");
  }

  if (!(date2 instanceof Date) || Number.isNaN(date2.getTime())) {
    throw new Error("date2 must be a valid Date.");
  }

  const utc1 = Date.UTC(
    date1.getUTCFullYear(),
    date1.getUTCMonth(),
    date1.getUTCDate()
  );

  const utc2 = Date.UTC(
    date2.getUTCFullYear(),
    date2.getUTCMonth(),
    date2.getUTCDate()
  );

  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  return Math.abs(Math.round((utc2 - utc1) / MS_PER_DAY));
}