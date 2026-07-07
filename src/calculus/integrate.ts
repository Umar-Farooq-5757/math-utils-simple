// Uses the Trapezoidal Rule.
export default function integrate(
  fn: (x: number) => number,
  start: number,
  end: number,
  steps: number = 1000,
): number {
  if (!Number.isInteger(steps) || steps <= 0) {
    throw new Error("Steps must be a positive integer.");
  }

  const width = (end - start) / steps;

  let area = 0;

  for (let i = 0; i < steps; i++) {
    const x1 = start + i * width;
    const x2 = x1 + width;

    area += ((fn(x1) + fn(x2)) * width) / 2;
  }

  return area;
}
