export default function lagrangeInterpolation(
  xValues: number[],
  yValues: number[],
  x: number,
): number {
  if (xValues.length !== yValues.length) {
    throw new Error("xValues and yValues must have the same length.");
  }

  if (xValues.length === 0) {
    throw new Error("Point arrays cannot be empty.");
  }

  const unique = new Set(xValues);

  if (unique.size !== xValues.length) {
    throw new Error("xValues must contain unique values.");
  }

  let result = 0;

  for (let i = 0; i < xValues.length; i++) {
    let term = yValues[i];

    for (let j = 0; j < xValues.length; j++) {
      if (i !== j) {
        term *= (x - xValues[j]) / (xValues[i] - xValues[j]);
      }
    }

    result += term;
  }

  return result;
}
