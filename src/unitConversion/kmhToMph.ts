/**
 * Converts kilometers per hour to miles per hour.
 *
 * Formula:
 * mph = km/h × 0.621371192237334
 *
 * @param kmh Speed in kilometers per hour
 * @returns Speed in miles per hour
 */
export default function kmhToMph(kmh: number): number {
  if (!Number.isFinite(kmh)) {
    throw new Error("kmh must be a finite number.");
  }

  return kmh * 0.621371192237334;
}
