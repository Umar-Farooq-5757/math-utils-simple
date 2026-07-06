export default function nthRoot(number: number, n: number): number {
  if (n === 0) throw new Error("Root degree cannot be zero.");
  return Math.pow(number, 1 / n);
}
