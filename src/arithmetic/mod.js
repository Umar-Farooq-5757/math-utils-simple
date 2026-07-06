export default function mod(a, b) {
  if (b === 0) throw new Error("Modulo by zero.");
  return a % b;
}
