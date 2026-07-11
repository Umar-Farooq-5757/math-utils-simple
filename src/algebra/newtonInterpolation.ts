export default function newtonInterpolation(
  xValues: number[],
  yValues: number[],
  x: number,
): number {
  if (xValues.length !== yValues.length) {
    throw new Error("xValues and yValues must have the same length.");
  }
  const unique = new Set(xValues);

  if (unique.size !== xValues.length) {
    throw new Error("xValues must contain unique values.");
  }

  const n = xValues.length;

  if (n === 0) {
    throw new Error("Point arrays cannot be empty.");
  }

  const divided = [...yValues];

  for (let i = 1; i < n; i++) {
    for (let j = n - 1; j >= i; j--) {
      divided[j] =
        (divided[j] - divided[j - 1]) / (xValues[j] - xValues[j - i]);
    }
  }

  let result = divided[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    result = result * (x - xValues[i]) + divided[i];
  }

  return result;
}
