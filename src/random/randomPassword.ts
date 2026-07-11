import { randomInt } from "node:crypto";
import { RandomPasswordOptions } from "./types/randomPasswordOptions.js";

export default function randomPassword(
  options: RandomPasswordOptions = {},
): string {
  const {
    length = 12,
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = true,
  } = options;

  if (length <= 0) {
    throw new Error("Length must be greater than 0.");
  }

  let characters = "";

  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) characters += "0123456789";
  if (symbols) characters += "!@#$%^&*()_-+=<>?/";

  if (characters.length === 0) {
    throw new Error("At least one character set must be enabled.");
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    password += characters[randomInt(characters.length)];
  }

  return password;
}
