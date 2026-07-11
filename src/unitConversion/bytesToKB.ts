export default function bytesToKB(bytes: number): number {
  if (!Number.isFinite(bytes)) {
    throw new Error("bytes must be a finite number.");
  }

  return bytes / 1024;
}