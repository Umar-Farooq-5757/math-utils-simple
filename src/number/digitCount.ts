export default function digitCount(n: number): number {
  return Math.abs(Math.trunc(n)).toString().length;
}
