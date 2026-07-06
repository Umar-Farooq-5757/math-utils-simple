export default function digitalRoot(n: number): number {
  n = Math.abs(Math.trunc(n));

  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return n;
}
