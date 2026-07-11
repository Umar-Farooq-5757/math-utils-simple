/**
 * Generates a normally distributed random number using
 * the Box-Muller transform.
 *
 * @param mean Mean of the distribution.
 * @param standardDeviation Standard deviation.
 */
export default function randomNormal(mean = 0, standardDeviation = 1): number {
  if (standardDeviation <= 0) {
    throw new Error("Standard deviation must be greater than 0.");
  }

  let u1 = 0;
  let u2 = 0;

  while (u1 === 0) {
    u1 = Math.random();
  }

  while (u2 === 0) {
    u2 = Math.random();
  }

  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

  return mean + z * standardDeviation;
}
