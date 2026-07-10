export default function weightedChoice<T>(items: T[], weights: number[]): T {
  if (items.length === 0) {
    throw new Error("Items array cannot be empty.");
  }

  if (items.length !== weights.length) {
    throw new Error("Items and weights must have the same length.");
  }

  const totalWeight = weights.reduce((sum, w) => {
    if (w < 0) {
      throw new Error("Weights cannot be negative.");
    }
    return sum + w;
  }, 0);

  if (totalWeight === 0) {
    throw new Error("Total weight must be greater than zero.");
  }

  let random = Math.random() * totalWeight;

  for (let i = 0; i < items.length; i++) {
    random -= weights[i];

    if (random < 0) {
      return items[i];
    }
  }

  return items[items.length - 1];
}
