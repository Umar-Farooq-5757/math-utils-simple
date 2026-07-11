/**
 * Encrypts or decrypts text using a repeating XOR key.
 *
 * Since XOR is reversible:
 * xorCipher(xorCipher(text, key), key) === text
 *
 * This implementation works on UTF-16 code units.
 *
 * ⚠️ Educational use only.
 *
 * @param text - Input text.
 * @param key - Encryption key.
 * @returns XOR transformed string.
 */
export default function xorCipher(text: string, key: string): string {
  if (typeof text !== "string") {
    throw new TypeError("Text must be a string.");
  }

  if (typeof key !== "string") {
    throw new TypeError("Key must be a string.");
  }

  if (key.length === 0) {
    throw new Error("Key cannot be empty.");
  }

  let result = "";

  for (let i = 0; i < text.length; i++) {
    const textCode = text.charCodeAt(i);
    const keyCode = key.charCodeAt(i % key.length);

    result += String.fromCharCode(textCode ^ keyCode);
  }

  return result;
}
