export default function randomWeightedShuffle<T>(
  items: T[],
  weights: number[],
): T[] {
  if (items.length !== weights.length) {
    throw new Error("Items and weights must have the same length.");
  }

  if (items.length === 0) {
    return [];
  }

  const remainingItems = [...items];
  const remainingWeights = [...weights];
  const result: T[] = [];

  while (remainingItems.length > 0) {
    const totalWeight = remainingWeights.reduce((a, b) => a + b, 0);

    if (totalWeight <= 0) {
      throw new Error("Weights must contain positive values.");
    }

    let random = Math.random() * totalWeight;
    let index = 0;

    while (random >= remainingWeights[index]) {
      random -= remainingWeights[index];
      index++;
    }

    result.push(remainingItems[index]);

    remainingItems.splice(index, 1);
    remainingWeights.splice(index, 1);
  }

  return result;
}
