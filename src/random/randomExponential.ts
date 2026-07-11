/**
 * Generates a random number from an exponential distribution.
 *
 * @param lambda Rate parameter (>0)
 */
export default function randomExponential(lambda = 1): number {
  if (lambda <= 0) {
    throw new Error("Lambda must be greater than 0.");
  }

  let u = 0;

  while (u === 0) {
    u = Math.random();
  }

  return -Math.log(u) / lambda;
}
