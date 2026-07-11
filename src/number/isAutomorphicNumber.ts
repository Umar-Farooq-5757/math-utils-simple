export default function isAutomorphicNumber(n: number): boolean {
  if (!Number.isInteger(n) || n < 0) {
    return false;
  }

  const square = (n * n).toString();
  return square.endsWith(n.toString());
}
