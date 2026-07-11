/**
 * Encrypts or decrypts text using the Caesar cipher.
 *
 * Non-alphabetic characters remain unchanged.
 *
 * Positive shift => encryption
 * Negative shift => decryption
 *
 * @param text Input text.
 * @param shift Shift amount.
 * @returns Transformed string.
 */
export default function caesarCipher(text: string, shift: number): string {
  if (typeof text !== "string") {
    throw new TypeError("Text must be a string.");
  }

  if (!Number.isInteger(shift)) {
    throw new TypeError("Shift must be an integer.");
  }

  const normalizedShift = ((shift % 26) + 26) % 26;

  let result = "";

  for (const char of text) {
    const code = char.charCodeAt(0);

    // Uppercase
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
      continue;
    }

    // Lowercase
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
      continue;
    }

    result += char;
  }

  return result;
}
