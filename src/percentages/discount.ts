export default function discount(price: number, percent: number): number {
  return price * (1 - percent / 100);
}
