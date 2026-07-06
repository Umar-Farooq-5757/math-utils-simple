export default function reverseNumber(n) {
  const reversed = Number(
    Math.abs(Math.trunc(n))
      .toString()
      .split("")
      .reverse()
      .join("")
  );

  return n < 0 ? -reversed : reversed;
}