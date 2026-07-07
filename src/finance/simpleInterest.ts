export default function simpleInterest(
  principal: number,
  rate: number,
  time: number,
): number {
  return (principal * rate * time) / 100;
}
