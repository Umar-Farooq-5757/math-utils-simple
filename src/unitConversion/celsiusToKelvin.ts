/**
 * Converts Celsius to Kelvin.
 *
 * Formula:
 * K = °C + 273.15
 *
 * @param celsius Temperature in Celsius
 * @returns Temperature in Kelvin
 */
export default function celsiusToKelvin(celsius: number): number {
  if (!Number.isFinite(celsius)) {
    throw new Error("celsius must be a finite number.");
  }

  return celsius + 273.15;
}
