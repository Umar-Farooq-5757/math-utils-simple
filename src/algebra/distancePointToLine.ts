export default function distancePointToLine(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  if (x1 === x2 && y1 === y2) {
    throw new Error("The line requires two distinct points.");
  }

  const numerator = Math.abs(
    (y2 - y1) * px - (x2 - x1) * py + x2 * y1 - y2 * x1,
  );

  const denominator = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);

  return numerator / denominator;
}
