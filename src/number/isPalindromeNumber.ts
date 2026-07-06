export default function isPalindromeNumber(n: number): boolean {
  const str = Math.abs(n).toString();

  return str === str.split("").reverse().join("");
}
