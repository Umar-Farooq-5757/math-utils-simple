import { randomUUID as uuid } from "node:crypto";

export default function randomUUID(): string {
  return uuid();
}