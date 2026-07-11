/**
 * Calculates age in completed years.
 *
 * @param birthDate Date of birth
 * @param referenceDate Date on which to calculate the age
 * @returns Age in years
 */
export default function age(
  birthDate: Date,
  referenceDate: Date = new Date(),
): number {
  if (!(birthDate instanceof Date) || Number.isNaN(birthDate.getTime())) {
    throw new Error("birthDate must be a valid Date.");
  }

  if (
    !(referenceDate instanceof Date) ||
    Number.isNaN(referenceDate.getTime())
  ) {
    throw new Error("referenceDate must be a valid Date.");
  }

  if (birthDate > referenceDate) {
    throw new Error("birthDate cannot be after referenceDate.");
  }

  let years = referenceDate.getFullYear() - birthDate.getFullYear();

  const monthDiff = referenceDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && referenceDate.getDate() < birthDate.getDate())
  ) {
    years--;
  }

  return years;
}
