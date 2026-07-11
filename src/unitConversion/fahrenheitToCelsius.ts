/**
 * Converts Fahrenheit to Celsius.
 *
 * Formula:
 * °C = (°F - 32) × 5 / 9
 *
 * @param fahrenheit Temperature in Fahrenheit
 * @returns Temperature in Celsius
 */
export default function fahrenheitToCelsius(fahrenheit: number): number {
  if (!Number.isFinite(fahrenheit)) {
    throw new Error("fahrenheit must be a finite number.");
  }

  return (fahrenheit - 32) * (5 / 9);
}
