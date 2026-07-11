export interface QuadraticVertex {
  x: number;
  y: number;
}

export default function quadraticVertex(
  a: number,
  b: number,
  c: number,
): QuadraticVertex {
  if (a === 0) {
    throw new Error("Coefficient 'a' cannot be zero.");
  }

  const x = -b / (2 * a);
  const y = a * x * x + b * x + c;

  return { x, y };
}
