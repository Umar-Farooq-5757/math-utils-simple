export default function markup(cost: number, percent: number): number {
  return cost * (1 + percent / 100);
}
