import discriminant from "./discriminant.js";

export interface ComplexNumber {
  real: number;
  imaginary: number;
}

export interface QuadraticSolution {
  root1: number | ComplexNumber;
  root2: number | ComplexNumber;
}

export default function solveQuadratic(
  a: number,
  b: number,
  c: number,
): QuadraticSolution {
  if (a === 0) {
    throw new Error("Coefficient 'a' cannot be zero. Use solveLinear instead.");
  }

  const d = discriminant(a, b, c);

  // Two real roots
  if (d > 0) {
    const sqrtD = Math.sqrt(d);

    return {
      root1: (-b + sqrtD) / (2 * a),
      root2: (-b - sqrtD) / (2 * a),
    };
  }

  // One repeated real root
  if (d === 0) {
    const root = -b / (2 * a) + 0;

    return {
      root1: root,
      root2: root,
    };
  }

  // Complex roots
  const real = -b / (2 * a) + 0;
  const imaginary = Math.sqrt(-d) / (2 * a);

  const root1: ComplexNumber = {
    real,
    imaginary,
  };

  const root2: ComplexNumber = {
    real,
    imaginary: -imaginary,
  };

  return {
    root1,
    root2,
  };
}
