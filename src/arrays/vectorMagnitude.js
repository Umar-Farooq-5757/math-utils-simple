export default function vectorMagnitude(array) {
  return Math.sqrt(
    array.reduce((sum, value) => sum + value * value, 0)
  );
}