/**
 * Converts kilobytes (KB) to megabytes (MB).
 *
 * Uses the binary definition:
 * 1 MB = 1024 KB
 *
 * @param kb Size in kilobytes
 * @returns Size in megabytes
 */
export default function kbToMB(kb: number): number {
  if (!Number.isFinite(kb)) {
    throw new Error("kb must be a finite number.");
  }

  return kb / 1024;
}
