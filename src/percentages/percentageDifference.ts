export default function percentageDifference(a: number, b: number): number {
  if (a === 0 && b === 0) {
    return 0;
  }

  return (Math.abs(a - b) / ((Math.abs(a) + Math.abs(b)) / 2)) * 100;
}
