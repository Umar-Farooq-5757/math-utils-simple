/**
 * Generates a random number from a binomial distribution.
 *
 * @param trials Number of trials
 * @param probability Probability of success
 */
export default function randomBinomial(
  trials: number,
  probability: number,
): number {
  if (!Number.isInteger(trials) || trials < 0) {
    throw new Error("Trials must be a non-negative integer.");
  }

  if (probability < 0 || probability > 1) {
    throw new Error("Probability must be between 0 and 1.");
  }

  let successes = 0;

  for (let i = 0; i < trials; i++) {
    if (Math.random() < probability) {
      successes++;
    }
  }

  return successes;
}
