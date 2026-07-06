export default function vectorMagnitude(array: number[]): number {
  return Math.sqrt(
    array.reduce((sum, value) => sum + value * value, 0)
  );
}