export default function acot(value: number): number {
  if (value === 0) {
    return 90;
  }

  return (Math.atan(1 / value) * 180) / Math.PI;
}
