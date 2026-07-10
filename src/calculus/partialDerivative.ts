export default function partialDerivative(
  fn: (point: number[]) => number,
  variableIndex: number,
  h: number = 1e-5,
): (point: number[]) => number {
  return (point: number[]) => {
    if (variableIndex < 0 || variableIndex >= point.length) {
      throw new Error("Invalid variable index.");
    }

    const forward = [...point];
    const backward = [...point];

    forward[variableIndex] += h;
    backward[variableIndex] -= h;

    return (fn(forward) - fn(backward)) / (2 * h);
  };
}
