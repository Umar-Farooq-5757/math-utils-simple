export default function nthRoot(number, n) {
  if (n === 0) throw new Error("Root degree cannot be zero.");
  return Math.pow(number, 1 / n);
}