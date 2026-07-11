/**
 * Generates a random number from a Poisson distribution.
 *
 * Knuth's algorithm.
 *
 * @param lambda Expected number of events (>0)
 */
export default function randomPoisson(lambda: number): number {
  if (lambda <= 0) {
    throw new Error("Lambda must be greater than 0.");
  }

  const limit = Math.exp(-lambda);

  let product = 1;
  let count = 0;

  do {
    count++;
    product *= Math.random();
  } while (product > limit);

  return count - 1;
}
