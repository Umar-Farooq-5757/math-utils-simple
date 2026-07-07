type Matrix = number[][];

export default function haveSameDimensions(a: Matrix, b: Matrix): boolean {
  return a.length === b.length && a[0].length === b[0].length;
}
