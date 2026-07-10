# Arithmetic

The **Arithmetic** module provides the fundamental mathematical operations used in everyday calculations.

These functions are lightweight, dependency-free, and work with JavaScript numbers.

---

# Import

Import individual functions.

```ts
import { add } from "math-utils-simple";
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

# Functions

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

# add

Adds two numbers.

## Syntax

```ts
add(a, b)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `a` | `number` | First number |
| `b` | `number` | Second number |

## Returns

`number`

Returns the sum of both numbers.

## Example

```ts
import { add } from "math-utils-simple";

add(2, 3);
// 5
```

```ts
add(-5, 12);
// 7
```

```ts
add(2.5, 1.5);
// 4
```

## Notes

- Supports integers and floating-point numbers.
- Does not modify any input values.

---

# subtract

Subtracts one number from another.

## Syntax

```ts
subtract(a, b)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `a` | `number` | Value to subtract from |
| `b` | `number` | Value to subtract |

## Returns

`number`

Returns the difference.

## Example

```ts
import { subtract } from "math-utils-simple";

subtract(10, 3);
// 7
```

```ts
subtract(5, 12);
// -7
```

```ts
subtract(5.5, 1.2);
// 4.3
```

## Notes

- Supports negative numbers.
- Supports decimal values.

---

# multiply

Multiplies two numbers.

## Syntax

```ts
multiply(a, b)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `a` | `number` | First factor |
| `b` | `number` | Second factor |

## Returns

`number`

Returns the product.

## Example

```ts
import { multiply } from "math-utils-simple";

multiply(4, 5);
// 20
```

```ts
multiply(-2, 8);
// -16
```

```ts
multiply(2.5, 4);
// 10
```

```ts
multiply(5, 0);
// 0
```

## Notes

- Supports integers and decimals.
- Multiplication by zero returns zero.

---

# divide

Divides one number by another.

## Syntax

```ts
divide(dividend, divisor)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `dividend` | `number` | Number to divide |
| `divisor` | `number` | Number used as the divisor |

## Returns

`number`

Returns the quotient.

## Example

```ts
import { divide } from "math-utils-simple";

divide(10, 2);
// 5
```

```ts
divide(7, 2);
// 3.5
```

```ts
divide(-20, 5);
// -4
```

## Throws

### Division by zero

```ts
divide(10, 0);

// Error:
// Cannot divide by zero.
```

## Notes

- Supports integer and floating-point division.
- Throws an error when the divisor is zero instead of returning `Infinity`.
- Preserves decimal precision provided by JavaScript's `number` type.

---
# power

Raises a number to the specified exponent.

## Syntax

```ts
power(base, exponent)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `base` | `number` | The base value |
| `exponent` | `number` | The exponent |

## Returns

`number`

Returns the value of `base` raised to the power of `exponent`.

## Examples

```ts
import { power } from "math-utils-simple";

power(2, 3);
// 8
```

```ts
power(5, 0);
// 1
```

```ts
power(9, 0.5);
// 3
```

```ts
power(2, -2);
// 0.25
```

## Notes

- Supports positive and negative exponents.
- Supports fractional exponents.
- Uses JavaScript's built-in exponentiation internally.

---

# sqrt

Calculates the square root of a number.

## Syntax

```ts
sqrt(value)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `value` | `number` | Non-negative number |

## Returns

`number`

Returns the square root of the given number.

## Examples

```ts
import { sqrt } from "math-utils-simple";

sqrt(25);
// 5
```

```ts
sqrt(81);
// 9
```

```ts
sqrt(2);
// 1.4142135623730951
```

## Throws

### Negative number

```ts
sqrt(-4);

// Error:
// Square root of a negative number is not supported.
```

## Notes

- Accepts zero.
- Returns a floating-point number when necessary.
- Throws an error for negative inputs instead of returning `NaN`.

---

# factorial

Calculates the factorial of a non-negative integer.

The factorial of **n** is defined as

```text
n! = n × (n − 1) × (n − 2) × ... × 1
```

Examples

```text
5! = 120

4! = 24

0! = 1
```

## Syntax

```ts
factorial(n)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `n` | `number` | Non-negative integer |

## Returns

`number`

Returns the factorial of `n`.

## Examples

```ts
import { factorial } from "math-utils-simple";

factorial(5);
// 120
```

```ts
factorial(0);
// 1
```

```ts
factorial(1);
// 1
```

## Throws

### Negative number

```ts
factorial(-1);

// Error:
// Factorial is only defined for non-negative integers.
```

### Decimal number

```ts
factorial(4.5);

// Error:
// Factorial is only defined for integers.
```

## Notes

- Only accepts whole numbers.
- Suitable for combinatorics and probability calculations.

---

# gcd

Calculates the **Greatest Common Divisor (GCD)** of two integers using the Euclidean Algorithm.

The GCD is the largest positive integer that divides both numbers without leaving a remainder.

## Syntax

```ts
gcd(a, b)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `a` | `number` | First integer |
| `b` | `number` | Second integer |

## Returns

`number`

Returns the greatest common divisor.

## Examples

```ts
import { gcd } from "math-utils-simple";

gcd(48, 18);
// 6
```

```ts
gcd(12, 8);
// 4
```

```ts
gcd(17, 13);
// 1
```

```ts
gcd(0, 5);
// 5
```

## Notes

- Uses the efficient Euclidean Algorithm.
- Supports negative integers.
- If one number is zero, the other number is returned.

---

# lcm

Calculates the **Least Common Multiple (LCM)** of two integers.

The LCM is the smallest positive integer divisible by both numbers.

## Syntax

```ts
lcm(a, b)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `a` | `number` | First integer |
| `b` | `number` | Second integer |

## Returns

`number`

Returns the least common multiple.

## Examples

```ts
import { lcm } from "math-utils-simple";

lcm(4, 6);
// 12
```

```ts
lcm(15, 20);
// 60
```

```ts
lcm(7, 3);
// 21
```

```ts
lcm(0, 8);
// 0
```

## Notes

- Internally uses the GCD for efficient calculation.
- Supports positive and negative integers.
- Returns `0` if either input is `0`.

---
# average

Calculates the arithmetic mean (average) of an array of numbers.

The arithmetic mean is calculated as

```text
(sum of all values) / (number of values)
```

## Syntax

```ts
average(numbers)
```

## Parameters

| Parameter | Type | Description |
|----------|------|-------------|
| `numbers` | `number[]` | Array of numeric values |

## Returns

`number`

Returns the arithmetic mean of all numbers in the array.

## Examples

```ts
import { average } from "math-utils-simple";

average([2, 4, 6, 8]);
// 5
```

```ts
average([10]);
// 10
```

```ts
average([1.5, 2.5, 3.5]);
// 2.5
```

```ts
average([-5, 5]);
// 0
```

## Throws

### Empty array

```ts
average([]);

// Error:
// Cannot calculate the average of an empty array.
```

## Notes

- Supports integers and floating-point numbers.
- The input array is never modified.
- Equivalent to the arithmetic mean.

---

# Common Use Cases

The Arithmetic module is suitable for many everyday calculations.

Examples include

- Calculator applications
- Shopping carts
- Billing systems
- Financial software
- Educational applications
- Scientific calculations
- Data processing
- Game development
- Physics simulations

---

# Performance

| Function | Time Complexity | Space Complexity |
|----------|-----------------|------------------|
| add | O(1) | O(1) |
| subtract | O(1) | O(1) |
| multiply | O(1) | O(1) |
| divide | O(1) | O(1) |
| power | O(1)* | O(1) |
| sqrt | O(1)* | O(1) |
| factorial | O(n) | O(1) |
| gcd | O(log(min(a, b))) | O(1) |
| lcm | O(log(min(a, b))) | O(1) |
| average | O(n) | O(1) |

\*Implemented using JavaScript's built-in `Math` functions.

---

# Related Functions

Many arithmetic functions work well together.

```ts
import {
    add,
    divide,
    average
} from "math-utils-simple";

const total = add(25, 35);

const half = divide(total, 2);

const mean = average([
    total,
    half
]);
```

---

# Best Practices

## Import only what you need

Recommended

```ts
import {
    factorial,
    gcd
} from "math-utils-simple";
```

Avoid

```ts
import * as math from "math-utils-simple";
```

This allows modern bundlers to tree-shake unused functions.

---

## Validate external input

When values come from user input or external APIs, validate them before performing calculations.

```ts
if (numbers.length > 0) {
    average(numbers);
}
```

---

## Handle expected errors

Some functions intentionally throw errors for invalid input.

```ts
try {
    divide(10, 0);
} catch (error) {
    console.error(error);
}
```

Likewise, validate inputs for `sqrt()` and `factorial()` when they may receive values outside their supported domains.

---

# Example

```ts
import {
    add,
    subtract,
    multiply,
    divide,
    power,
    sqrt,
    factorial,
    gcd,
    lcm,
    average
} from "math-utils-simple";

console.log(add(5, 3));
// 8

console.log(subtract(10, 7));
// 3

console.log(multiply(6, 4));
// 24

console.log(divide(20, 5));
// 4

console.log(power(2, 8));
// 256

console.log(sqrt(49));
// 7

console.log(factorial(6));
// 720

console.log(gcd(84, 30));
// 6

console.log(lcm(12, 18));
// 36

console.log(
    average([2, 4, 6, 8])
);
// 5
```

---

# Summary

The **Arithmetic** module provides the foundation for many mathematical operations in **math-utils-simple**.

It includes utilities for:

- Basic arithmetic
- Exponentiation
- Square roots
- Factorials
- Greatest Common Divisors
- Least Common Multiples
- Arithmetic averages

All functions are:

- Lightweight
- Dependency-free
- TypeScript-friendly
- Fully tested
- Easy to understand
- Suitable for both browser and server-side applications

---

# See Also

Explore other modules in the library:

- Number Utilities
- Rounding
- Percentages
- Statistics
- Array Math
- Algebra
- Trigonometry
- Logarithms
- Combinatorics
- Calculus
- Finance
- Sequences
- Matrix
- Complex Numbers
- Random