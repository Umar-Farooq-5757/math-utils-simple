export default function digitCount(n) {
  return Math.abs(Math.trunc(n))
    .toString()
    .length;
}