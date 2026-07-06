export default function mode(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (array.length === 0) {
    throw new Error("Cannot calculate mode of an empty array.");
  }

  const counts = new Map();

  for (const value of array) {
    counts.set(value, (counts.get(value) || 0) + 1);
  }

  let maxFrequency = 0;

  for (const frequency of counts.values()) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
    }
  }

  // No mode if every value occurs equally often.
  if (maxFrequency === 1) {
    return [];
  }

  const modes = [];

  for (const [value, frequency] of counts) {
    if (frequency === maxFrequency) {
      modes.push(value);
    }
  }

  return modes.sort((a, b) => a - b);
}