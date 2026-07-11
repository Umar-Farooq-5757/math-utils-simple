export default function isKaprekarNumber(n: number): boolean {
  if (!Number.isInteger(n) || n < 1) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  const square = (n * n).toString();

  for (let i = 1; i < square.length; i++) {
    const left = Number(square.slice(0, i));
    const right = Number(square.slice(i));

    if (right !== 0 && left + right === n) {
      return true;
    }
  }

  return false;
}
