/**
 * Converts miles per hour to kilometers per hour.
 *
 * Formula:
 * km/h = mph × 1.609344
 *
 * @param mph Speed in miles per hour
 * @returns Speed in kilometers per hour
 */
export default function mphToKmh(mph: number): number {
  if (!Number.isFinite(mph)) {
    throw new Error("mph must be a finite number.");
  }

  return mph * 1.609344;
}
