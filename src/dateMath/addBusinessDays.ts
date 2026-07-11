/**
 * Adds (or subtracts) business days from a date.
 *
 * Saturdays and Sundays are skipped.
 *
 * Positive values move forward.
 * Negative values move backward.
 *
 * @param date Starting date
 * @param businessDays Number of business days to add
 * @returns New Date
 */
export default function addBusinessDays(
  date: Date,
  businessDays: number,
): Date {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new Error("date must be a valid Date.");
  }

  if (!Number.isInteger(businessDays)) {
    throw new Error("businessDays must be an integer.");
  }

  const result = new Date(date);

  if (businessDays === 0) {
    return result;
  }

  const direction = businessDays > 0 ? 1 : -1;
  let remaining = Math.abs(businessDays);

  while (remaining > 0) {
    result.setDate(result.getDate() + direction);

    const day = result.getDay();

    if (day !== 0 && day !== 6) {
      remaining--;
    }
  }

  return result;
}
