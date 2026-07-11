/**
 * Encrypts or decrypts text using the Vigenère cipher.
 *
 * Alphabetic characters are shifted according to the keyword.
 * Non-alphabetic characters remain unchanged and do not consume
 * characters from the keyword.
 *
 * @param text - Input text.
 * @param key - Alphabetic keyword.
 * @param decrypt - Set to true to decrypt.
 * @returns Transformed text.
 */
export default function vigenereCipher(
  text: string,
  key: string,
  decrypt: boolean = false,
): string {
  if (typeof text !== "string") {
    throw new TypeError("Text must be a string.");
  }

  if (typeof key !== "string") {
    throw new TypeError("Key must be a string.");
  }

  key = key.trim();

  if (key.length === 0) {
    throw new Error("Key cannot be empty.");
  }

  if (!/^[A-Za-z]+$/.test(key)) {
    throw new Error("Key must contain only alphabetic characters.");
  }

  const keyUpper = key.toUpperCase();

  let result = "";
  let keyIndex = 0;

  for (const char of text) {
    const code = char.charCodeAt(0);

    const keyShift = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65;

    const shift = decrypt ? -keyShift : keyShift;

    // Uppercase
    if (code >= 65 && code <= 90) {
      const value = ((code - 65 + shift + 26) % 26) + 65;
      result += String.fromCharCode(value);
      keyIndex++;
      continue;
    }

    // Lowercase
    if (code >= 97 && code <= 122) {
      const value = ((code - 97 + shift + 26) % 26) + 97;
      result += String.fromCharCode(value);
      keyIndex++;
      continue;
    }

    result += char;
  }

  return result;
}
