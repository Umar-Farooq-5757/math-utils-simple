export default function simpsonsRule(
  fn: (x: number) => number,
  start: number,
  end: number,
  intervals: number = 100,
): number {
  if (intervals <= 0) {
    throw new Error("Intervals must be greater than zero.");
  }

  if (intervals % 2 !== 0) {
    throw new Error("Intervals must be even.");
  }

  const h = (end - start) / intervals;

  let sum = fn(start) + fn(end);

  for (let i = 1; i < intervals; i++) {
    const x = start + i * h;
    sum += (i % 2 === 0 ? 2 : 4) * fn(x);
  }

  return (sum * h) / 3;
}
