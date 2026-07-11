/**
 * Generates the nth term of the Look-and-Say sequence.
 *
 * Sequence:
 * 1
 * 11
 * 21
 * 1211
 * 111221
 * ...
 *
 * @param n Positive integer
 * @returns nth Look-and-Say term
 */
export default function lookAndSay(n: number): string {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("n must be a positive integer.");
  }

  let term = "1";

  for (let i = 1; i < n; i++) {
    let next = "";
    let count = 1;

    for (let j = 1; j <= term.length; j++) {
      if (term[j] === term[j - 1]) {
        count++;
      } else {
        next += count.toString() + term[j - 1];
        count = 1;
      }
    }

    term = next;
  }

  return term;
}
