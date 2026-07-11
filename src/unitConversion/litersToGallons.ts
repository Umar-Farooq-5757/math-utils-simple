/**
 * Converts liters to US gallons.
 *
 * Formula:
 * gallons = liters × 0.2641720523581484
 *
 * @param liters Volume in liters
 * @returns Volume in US gallons
 */
export default function litersToGallons(liters: number): number {
  if (!Number.isFinite(liters)) {
    throw new Error("liters must be a finite number.");
  }

  return liters * 0.2641720523581484;
}
