/**
 * Converts feet to meters.
 *
 * Formula:
 * meters = feet × 0.3048
 *
 * @param feet Length in feet
 * @returns Length in meters
 */
export default function feetToMeters(feet: number): number {
  if (!Number.isFinite(feet)) {
    throw new Error("feet must be a finite number.");
  }

  return feet * 0.3048;
}
