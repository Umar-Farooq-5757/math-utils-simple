export default function randomGaussian(mean: number = 0, stdDev: number = 1): number {
  if (stdDev < 0) {
    throw new Error("Standard deviation cannot be negative.");
  }

  let u = 0;
  let v = 0;

  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();

  const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);

  return mean + z * stdDev;
}
