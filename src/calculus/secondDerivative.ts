export default function secondDerivative(
  fn: (x: number) => number,
  x: number,
  h: number = 1e-5,
): number {
  return (fn(x + h) - 2 * fn(x) + fn(x - h)) / (h * h);
}
