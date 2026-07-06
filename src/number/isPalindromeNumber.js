export default function isPalindromeNumber(n) {
  const str = Math.abs(n).toString();

  return str === str.split("").reverse().join("");
}