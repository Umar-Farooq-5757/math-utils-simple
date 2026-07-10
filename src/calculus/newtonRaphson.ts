export default function newtonRaphson(
  fn: (x: number) => number,
  derivative: (x: number) => number,
  guess: number,
  tolerance: number = 1e-7,
  maxIterations: number = 100,
): number {
  let x = guess;

  for (let i = 0; i < maxIterations; i++) {
    const y = fn(x);

    if (Math.abs(y) < tolerance) {
      return x;
    }

    const dy = derivative(x);

    if (dy === 0) {
      throw new Error("Derivative became zero.");
    }

    x = x - y / dy;
  }

  throw new Error("Method did not converge.");
}
