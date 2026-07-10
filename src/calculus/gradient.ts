export default function gradient(
  fn: (point: number[]) => number,
  point: number[],
  h: number = 1e-5,
): number[] {
  return point.map((_, index) => {
    const forward = [...point];
    const backward = [...point];

    forward[index] += h;
    backward[index] -= h;

    return (fn(forward) - fn(backward)) / (2 * h);
  });
}
