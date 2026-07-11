/**
 * Returns the number of whole calendar months between two dates.
 *
 * If the ending day of the month is earlier than the starting day,
 * one month is subtracted.
 *
 * @param date1 First date
 * @param date2 Second date
 * @returns Number of whole months
 */
export default function monthsBetween(date1: Date, date2: Date): number {
  if (!(date1 instanceof Date) || Number.isNaN(date1.getTime())) {
    throw new Error("date1 must be a valid Date.");
  }

  if (!(date2 instanceof Date) || Number.isNaN(date2.getTime())) {
    throw new Error("date2 must be a valid Date.");
  }

  let start = new Date(date1);
  let end = new Date(date2);

  if (start > end) {
    [start, end] = [end, start];
  }

  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth());

  if (end.getUTCDate() < start.getUTCDate()) {
    months--;
  }

  return months;
}
