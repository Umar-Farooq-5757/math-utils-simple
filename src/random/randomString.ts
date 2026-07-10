const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function randomString(
  length: number,
  charset: string = DEFAULT_CHARSET,
): string {
  if (length < 0) {
    throw new Error("Length cannot be negative.");
  }

  if (charset.length === 0) {
    throw new Error("Charset cannot be empty.");
  }

  let result = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charset.length);
    result += charset[index];
  }

  return result;
}
