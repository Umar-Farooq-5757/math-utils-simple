export default function discount(price, percent) {
  return price * (1 - percent / 100);
}