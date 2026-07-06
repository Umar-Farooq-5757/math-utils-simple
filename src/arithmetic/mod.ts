export default function mod(a: number, b: number): number {
  if (b === 0) throw new Error("Modulo by zero.");
  return a % b;
}
