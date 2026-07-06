export default function isPerfectCube(n: number): boolean {
  return Number.isInteger(Math.cbrt(n));
}
