# math-utils-simple

<p align="center">
  <img src="https://img.shields.io/npm/v/math-utils-simple" alt="npm version">
  <img src="https://img.shields.io/npm/dm/math-utils-simple" alt="npm downloads">
  <img src="https://img.shields.io/npm/l/math-utils-simple" alt="license">
  <img src="https://img.shields.io/badge/TypeScript-Compatible-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/Zero-Dependencies-success" alt="Zero Dependencies">
</p>

A modern, lightweight, and fully typed mathematics library for JavaScript and TypeScript.

`math-utils-simple` provides a large collection of mathematical utilities ranging from simple arithmetic to advanced linear algebra, statistics, calculus, finance, complex numbers, randomization, and much more.

Designed with simplicity, performance, and tree-shaking in mind.

---

# ✨ Features

- 🚀 200+ mathematical utility functions
- 📦 Zero runtime dependencies
- 🔷 Written in TypeScript
- 🌳 Fully tree-shakeable ES Modules
- ⚡ Lightweight and fast
- ✅ Comprehensive test suite
- 📖 Well documented
- 🧩 Modular architecture
- 💻 Works in Node.js, Bun, Deno and modern browsers

---

# Installation

Using npm

```bash
npm install math-utils-simple
```

Using yarn

```bash
yarn add math-utils-simple
```

Using pnpm

```bash
pnpm add math-utils-simple
```

Using bun

```bash
bun add math-utils-simple
```

---

# Requirements

- Node.js 18+
- TypeScript (recommended but optional)

---

# Quick Start

```ts
import {
    add,
    factorial,
    gcd,
    determinant,
    mean,
    sin
} from "math-utils-simple";

console.log(add(5, 3));

console.log(factorial(5));

console.log(gcd(48, 18));

console.log(sin(30));

console.log(
    determinant([
        [1, 2],
        [3, 4]
    ])
);
```

Output

```text
8
120
6
0.5
-2
```

---

# Importing Functions

Import only the functions you need.

```ts
import { add } from "math-utils-simple";

add(2, 3);
```

Or import multiple functions.

```ts
import {
    add,
    subtract,
    multiply,
    divide
} from "math-utils-simple";
```

---

# Why math-utils-simple?

Unlike many large mathematical libraries, **math-utils-simple** focuses on:

- Simple API
- Lightweight bundle size
- Tree shaking
- Strong TypeScript support
- Zero dependencies
- Readable source code
- Beginner-friendly function names

---

# Function Categories

The library is organized into multiple categories.

| Category | Description |
|----------|-------------|
| [Arithmetic](docs/arithmetic.md) | Basic arithmetic operations |
| Number Utilities | Number-related helper functions |
| Rounding | Rounding and clamping utilities |
| Percentages | Percentage calculations |
| Statistics | Statistical functions |
| Arrays | Vector and array mathematics |
| Random | Random value generation |
| Algebra | Algebraic utilities |
| Trigonometry | Trigonometric functions |
| Logarithms | Logarithmic functions |
| Combinatorics | Permutations and combinations |
| Calculus | Numerical calculus helpers |
| Finance | Financial calculations |
| Sequences | Arithmetic and geometric sequences |
| Matrices | Matrix operations |
| Complex Numbers | Complex number mathematics |

---

# Available Functions

## Arithmetic

- add
- subtract
- multiply
- divide
- power
- square
- sqrt
- lcm
- average
- abs
- cube
- cubeRoot
- increment
- decrement
- reciprocal
- nthRoot
- negate
- mod

---

## Number Utilities

- isEven
- isOdd
- isPrime
- nextPrime
- previousPrime
- isInteger
- isPositive
- isNegative
- isPerfectSquare
- isPerfectCube
- isPerfectNumber
- reverseNumber
- countDigits
- sumOfDigits
- digitalRoot
- digitCount
- isPalindromeNumber
- isPowerOfTwo
- isPowerOfThree
- nextMultiple
- previousMultiple
- coprime
- divisors
- factorial
- fibonacci
- nthFibonacci
- gcd
- lcm
- isArmstrongNumber
- isLeapYear
- primeFactors

---

## Rounding

- round
- floor
- ceil
- truncate
- roundTo
- clamp
- roundUpToNearest
- roundDownToNearest
- roundToNearest
- snap
- isBetween
- wrap
- normalize

---

## Percentages

- percentage
- increaseByPercentage
- decreaseByPercentage
- percentageDifference
- percentageChange
- relativeChange
- findOriginalValue
- findFinalValue
- discount
- markup
- profitPercentage
- lossPercentage
- margin
- compoundGrowth
- compoundDecay

---

## Statistics

- sum
- average
- median
- mode
- range
- variance
- standardDeviation
- max
- min
- count
- frequency
- quartiles
- interQuartileRange

---

## Array Math

- dotProduct
- crossProduct
- elementWiseAdd
- elementWiseSubtract
- elementWiseMultiply
- elementWiseDivide
- scalarMultiply
- scalarDivide
- normalize
- cumulativeSum
- movingAverage
- vectorMagnitude
- vectorDistance
- cosineSimilarity
- angleBetweenVectors
- projectVector

---

## Algebra

- solveLinear
- discriminant
- solveQuadratic

---

## Trigonometry

- sin
- cos
- tan
- asin
- acos
- atan
- degreesToRadians
- radiansToDegrees
- hypotenuse

---

## Logarithms

- ln
- log10
- log2
- log

---

## Combinatorics

- permutation
- combination
- binomialCoefficient

---

## Calculus

- numericalDerivative
- integrate

---

## Finance

- simpleInterest
- compoundInterest
- loanEMI
- futureValue
- presentValue

---

## Sequences

- arithmeticSequence
- geometricSequence
- sumArithmeticSeries
- sumGeometricSeries

---

## Matrix

- matrixAdd
- matrixSubtract
- matrixMultiply
- transpose
- identityMatrix
- determinant
- inverseMatrix
- trace

---

## Complex Numbers

- complexAdd
- complexSubtract
- complexMultiply
- complexDivide
- complexMagnitude

---

## Random

- random
- randomInt
- randomFloat
- randomBoolean
- randomChoice
- shuffle
- sample

---

# Usage Examples

## Basic Arithmetic

```ts
import {
    add,
    subtract,
    multiply,
    divide
} from "math-utils-simple";

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(6, 7));
console.log(divide(20, 5));
```

---

## Statistics

```ts
import {
    mean,
    median,
    variance,
    standardDeviation
} from "math-utils-simple";

const numbers = [2, 4, 6, 8, 10];

console.log(mean(numbers));
console.log(median(numbers));
console.log(variance(numbers));
console.log(standardDeviation(numbers));
```

---

## Matrix Mathematics

```ts
import {
    determinant,
    inverseMatrix,
    matrixMultiply
} from "math-utils-simple";

const matrix = [
    [4, 7],
    [2, 6]
];

console.log(
    determinant(matrix)
);

console.log(
    inverseMatrix(matrix)
);

console.log(
    matrixMultiply(
        matrix,
        inverseMatrix(matrix)
    )
);
```

---

## Trigonometry

```ts
import {
    sin,
    cos,
    tan
} from "math-utils-simple";

console.log(sin(30));
console.log(cos(60));
console.log(tan(45));
```

---

## Complex Numbers

```ts
import {
    complexMultiply,
    complexMagnitude
} from "math-utils-simple";

const a = {
    real: 2,
    imaginary: 3
};

const b = {
    real: 4,
    imaginary: 5
};

console.log(
    complexMultiply(a, b)
);

console.log(
    complexMagnitude(a)
);
```

---

## Finance

```ts
import {
    simpleInterest,
    compoundInterest,
    loanEMI
} from "math-utils-simple";

console.log(
    simpleInterest(10000, 5, 3)
);

console.log(
    compoundInterest(10000, 8, 5)
);

console.log(
    loanEMI(500000, 9, 60)
);
```

---

# TypeScript Support

The library is written entirely in TypeScript and includes built-in type definitions.

No additional packages are required.

```ts
import { factorial } from "math-utils-simple";

const result: number = factorial(5);
```

Complex number support includes strongly typed interfaces.

```ts
import type {
    ComplexNumber
} from "math-utils-simple";

const z: ComplexNumber = {
    real: 2,
    imaginary: 5
};
```

---

# Tree Shaking

All functions are exported individually.

Modern bundlers such as

- Vite
- Rollup
- Webpack
- esbuild
- Parcel

will automatically remove unused functions from your production bundle.

```ts
import { gcd } from "math-utils-simple";
```

Only `gcd` is included in the final bundle.

---

# Error Handling

Functions validate their inputs whenever appropriate.

Examples include

- Division by zero
- Invalid logarithm base
- Square root of a negative number
- Non-square matrices
- Singular matrices
- Invalid percentages
- Invalid array sizes

Example

```ts
import { inverseMatrix } from "math-utils-simple";

inverseMatrix([
    [1, 2],
    [2, 4]
]);

// Error:
// Matrix is singular and cannot be inverted.
```

---

# Performance

The library uses efficient algorithms whenever possible.

Examples include

- Euclidean Algorithm for GCD
- Gaussian Elimination for Determinants
- Gauss–Jordan Elimination for Matrix Inversion
- Central Difference Method for Numerical Derivatives
- Trapezoidal Rule for Numerical Integration
- Incremental Formula for Combinations
- Fisher–Yates Shuffle Algorithm

These implementations are significantly faster than naive approaches while remaining easy to understand.

---

# Development

If you'd like to contribute to the project, clone the repository and install the dependencies.

```bash
git clone https://github.com/umar-farooq-5757/math-utils-simple.git

cd math-utils-simple

npm install
```

---

# Build

Compile the library.

```bash
npm run build
```

---

# Run Tests

Run the complete test suite.

```bash
npm test
```

Run tests in watch mode.

```bash
npm run test:watch
```

---

# Project Structure

```text
math-utils-simple/
│
├── src/
│   ├── arithmetic/
│   ├── number/
│   ├── rounding/
│   ├── percentages/
│   ├── statistics/
│   ├── arrays/
│   ├── algebra/
│   ├── trigonometry/
│   ├── logarithms/
│   ├── combinatorics/
│   ├── calculus/
│   ├── finance/
│   ├── sequences/
│   ├── matrix/
│   ├── complex/
│   ├── random/
│   └── index.ts
│
├── tests/
│
├── docs/
│
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

---

# Design Principles

The library follows a few core principles.

## Simplicity

Functions should be easy to understand and use.

```ts
add(2, 3);
factorial(5);
gcd(24, 36);
```

No unnecessary configuration or boilerplate.

---

## Type Safety

Every public function includes TypeScript types.

```ts
const result: number = factorial(6);
```

---

## Small Bundle Size

Import only what you need.

```ts
import {
    determinant
} from "math-utils-simple";
```

Modern bundlers automatically remove unused exports.

---

## Zero Dependencies

The library has no runtime dependencies.

This results in

- faster installation
- fewer security concerns
- smaller bundles
- simpler maintenance

---

## Predictable API

Function names follow consistent conventions.

Examples

```text
matrixAdd()
matrixSubtract()
matrixMultiply()

complexAdd()
complexSubtract()
complexMultiply()

elementWiseAdd()
elementWiseSubtract()
elementWiseMultiply()
```

---

# Browser Support

The library works in all modern JavaScript environments.

- Node.js
- Bun
- Deno
- Chrome
- Firefox
- Edge
- Safari

---

# Compatibility

Compatible with

- JavaScript
- TypeScript
- React
- Next.js
- Vue
- Angular
- Svelte
- Express
- NestJS
- Electron

---

# Frequently Asked Questions

## Does this library have any dependencies?

No.

It has zero runtime dependencies.

## Does it support TypeScript?

Yes.

The library is written entirely in TypeScript and includes built-in type definitions.

## Can I use it in the browser?

Yes.

The package consists of standard ES Modules.

## Is tree shaking supported?

Yes.

Import only the functions you need.

```ts
import {
    gcd
} from "math-utils-simple";
```

Unused exports are removed by modern bundlers.

## Is the library production ready?

Yes.

Every public function is covered by automated tests.

## Can I contribute?

Absolutely.

Contributions are always welcome.

---

# Best Practices

Prefer importing only the functions you use.

```ts
import {
    gcd,
    factorial,
    determinant
} from "math-utils-simple";
```

Avoid wildcard imports.

```ts
// Not recommended

import * as math from "math-utils-simple";
```

---

Validate user input before performing calculations whenever values originate from external sources.

```ts
if (value >= 0) {
    sqrt(value);
}
```

---

# Performance Notes

Several functions use optimized algorithms.

| Function | Algorithm |
|----------|-----------|
| gcd | Euclidean Algorithm |
| determinant | Gaussian Elimination |
| inverseMatrix | Gauss–Jordan Elimination |
| shuffle | Fisher–Yates Shuffle |
| numericalDerivative | Central Difference Method |
| integrate | Trapezoidal Rule |

These implementations provide a good balance between readability, accuracy, and performance.

---

# Comparison

| Feature | math-utils-simple | Native JavaScript |
|----------|-------------------|-------------------|
| Arithmetic | ✅ | Limited |
| Statistics | ✅ | ❌ |
| Matrix Operations | ✅ | ❌ |
| Complex Numbers | ✅ | ❌ |
| Finance | ✅ | ❌ |
| Numerical Calculus | ✅ | ❌ |
| Random Utilities | ✅ | Partial |
| TypeScript Types | ✅ | N/A |
| Zero Dependencies | ✅ | ✅ |

---

# Roadmap

Future releases may include

- Probability distributions
- Linear regression
- Polynomial operations
- FFT (Fast Fourier Transform)
- BigInt utilities
- Number theory helpers
- Cryptographic mathematics
- Coordinate geometry
- Quaternion mathematics
- Unit conversion
- Expression parser
- Vector classes
- Matrix decomposition algorithms
- Eigenvalues and eigenvectors
- Polynomial interpolation

Community suggestions are always welcome.

---
# Contributing

Contributions are welcome! Whether you'd like to fix a bug, improve the documentation, optimize an algorithm, or add a new mathematical utility, your help is appreciated.

## Getting Started

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/my-new-feature
```

3. Make your changes.
4. Run the test suite.

```bash
npm test
```

5. Build the project.

```bash
npm run build
```

6. Commit your changes.

```bash
git commit -m "Add matrix rank function"
```

7. Push your branch.

```bash
git push origin feature/my-new-feature
```

8. Open a Pull Request.

---

# Contribution Guidelines

When contributing, please follow these guidelines.

- Keep functions small and focused.
- Use descriptive function names.
- Write TypeScript.
- Add tests for every new function.
- Update the documentation.
- Follow the existing coding style.
- Avoid adding unnecessary dependencies.

---

# Reporting Bugs

If you discover a bug, please open an issue that includes:

- Operating system
- Node.js version
- Package version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Sample code (if possible)

This information helps identify and resolve issues more quickly.

---

# Requesting Features

Feature requests are welcome.

When suggesting a new function, please include:

- The mathematical concept or problem it solves.
- The proposed function name.
- Expected parameters.
- Return value.
- One or more usage examples.
- References or formulas, if applicable.

---

# Security

If you discover a security-related issue, please report it privately rather than opening a public issue.

---

# Documentation

The documentation is organized by category in the `docs/` directory.

```text
docs/
├── arithmetic.md
├── algebra.md
├── arrays.md
├── calculus.md
├── combinatorics.md
├── complex.md
├── finance.md
├── logarithms.md
├── matrix.md
├── number.md
├── percentages.md
├── random.md
├── rounding.md
├── sequences.md
├── statistics.md
└── trigonometry.md
```

Each document includes:

- Overview
- API reference
- Parameters
- Return values
- Examples
- Error conditions
- Related functions

---

# Testing Philosophy

Every exported function should have automated tests covering:

- Normal inputs
- Edge cases
- Invalid inputs
- Error conditions
- Floating-point precision (where applicable)

This helps ensure the library remains reliable as it evolves.

---

# License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

# Support

If you find this library useful, consider:

- ⭐ Starring the repository on GitHub
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving the documentation
- 🤝 Contributing code

Community contributions help improve the project for everyone.

---

# Acknowledgements

This library draws inspiration from the JavaScript and scientific computing ecosystem, including projects that emphasize clean APIs, modular design, and reliable mathematical utilities.

Special thanks to everyone who contributes ideas, reports issues, submits pull requests, and helps improve the project.

---

# Author

**Umar Farooq**

Full Stack Web Developer

---

# Useful Links

- [npm-package](https://www.npmjs.com/package/math-utils-simple)
- [GitHub repository](https://github.com/umar-farooq-5757/math-utils-simple)

---

# Final Notes

The goal of **math-utils-simple** is to provide a modern, dependency-free collection of mathematical utilities that is easy to use, well tested, and suitable for both JavaScript and TypeScript projects.

Whether you're building educational tools, financial software, scientific applications, games, data analysis pipelines, or general-purpose utilities, this library aims to provide a consistent and approachable API.

Thank you for using **math-utils-simple**!

Happy coding! 🚀

