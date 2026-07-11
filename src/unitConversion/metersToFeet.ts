/**
 * Converts meters to feet.
 *
 * Formula:
 * feet = meters × 3.280839895
 *
 * @param meters Length in meters
 * @returns Length in feet
 */
export default function metersToFeet(meters: number): number {
  if (!Number.isFinite(meters)) {
    throw new Error("meters must be a finite number.");
  }

  return meters * 3.280839895;
}
