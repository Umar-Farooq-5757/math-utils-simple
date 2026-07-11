/**
 * Converts grams to ounces (avoirdupois).
 *
 * Formula:
 * ounces = grams × 0.03527396194958041
 *
 * @param grams Mass in grams
 * @returns Mass in ounces
 */
export default function gramsToOunces(grams: number): number {
  if (!Number.isFinite(grams)) {
    throw new Error("grams must be a finite number.");
  }

  return grams * 0.03527396194958041;
}
