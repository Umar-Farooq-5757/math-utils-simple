export default function numericalDerivative(
  fn: (x: number) => number,
  x: number,
  h: number = 1e-6,
): number {
  return (fn(x + h) - fn(x - h)) / (2 * h);
}
