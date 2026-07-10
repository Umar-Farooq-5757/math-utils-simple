export default function bisectionMethod(
  fn: (x: number) => number,
  left: number,
  right: number,
  tolerance: number = 1e-7,
  maxIterations: number = 100,
): number {
  const leftValue = fn(left);
  const rightValue = fn(right);

  if (leftValue * rightValue > 0) {
    throw new Error("Function must have opposite signs at interval endpoints.");
  }

  let a = left;
  let b = right;

  for (let i = 0; i < maxIterations; i++) {
    const mid = (a + b) / 2;
    const value = fn(mid);

    if (Math.abs(value) < tolerance || (b - a) / 2 < tolerance) {
      return mid;
    }

    if (fn(a) * value < 0) {
      b = mid;
    } else {
      a = mid;
    }
  }

  throw new Error("Method did not converge.");
}
