// ARITHMETIC
export { default as add } from "./arithmetic/add.js";
export { default as subtract } from "./arithmetic/subtract.js";
export { default as multiply } from "./arithmetic/multiply.js";
export { default as divide } from "./arithmetic/divide.js";
export { default as mod } from "./arithmetic/mod.js";
export { default as power } from "./arithmetic/power.js";
export { default as sqrt } from "./arithmetic/sqrt.js";
export { default as cubeRoot } from "./arithmetic/cubeRoot.js";
export { default as nthRoot } from "./arithmetic/nthRoot.js";
export { default as abs } from "./arithmetic/abs.js";
export { default as negate } from "./arithmetic/negate.js";
export { default as increment } from "./arithmetic/increment.js";
export { default as decrement } from "./arithmetic/decrement.js";
export { default as square } from "./arithmetic/square.js";
export { default as cube } from "./arithmetic/cube.js";
export { default as reciprocal } from "./arithmetic/reciprocal.js";

// NUMBER
export { default as digitalRoot } from "./number/digitalRoot.js";
export { default as digitCount } from "./number/digitCount.js";
export { default as divisors } from "./number/divisors.js";
export { default as factorial } from "./number/factorial.js";
export { default as factors } from "./number/factors.js";
export { default as fibonacci } from "./number/fibonacci.js";
export { default as gcd } from "./number/gcd.js";
export { default as isArmstrongNumber } from "./number/isArmstrongNumber.js";
export { default as isEven } from "./number/isEven.js";
export { default as isOdd } from "./number/isOdd.js";
export { default as isLeapYear } from "./number/isLeapYear.js";
export { default as isPalindromeNumber } from "./number/isPalindromeNumber.js";
export { default as isPerfectCube } from "./number/isPerfectCube.js";
export { default as isPerfectNumber } from "./number/isPerfectNumber.js";
export { default as isPerfectSquare } from "./number/isPerfectSquare.js";
export { default as isPrime } from "./number/isPrime.js";
export { default as lcm } from "./number/lcm.js";
export { default as nextPrime } from "./number/nextPrime.js";
export { default as nthFibonacci } from "./number/nthFibonacci.js";
export { default as previousPrime } from "./number/previousPrime.js";
export { default as primeFactors } from "./number/primeFactors.js";
export { default as reverseNumber } from "./number/reverseNumber.js";
export { default as sumOfDigits } from "./number/sumOfDigits.js";
export { default as isPowerOfTwo } from "./number/isPowerOfTwo.js";
export { default as isPowerOfThree } from "./number/isPowerOfThree.js";
export { default as nextMultiple } from "./number/nextMultiple.js";
export { default as previousMultiple } from "./number/previousMultiple.js";
export { default as coprime } from "./number/coprime.js";

// ROUNDING
export { default as round } from "./rounding/round.js";
export { default as floor } from "./rounding/floor.js";
export { default as ceil } from "./rounding/ceil.js";
export { default as truncate } from "./rounding/truncate.js";
export { default as roundTo } from "./rounding/roundTo.js";
export { default as clamp } from "./rounding/clamp.js";
export { default as roundUpToNearest } from "./rounding/roundUpToNearest.js";
export { default as roundDownToNearest } from "./rounding/roundDownToNearest.js";
export { default as roundToNearest } from "./rounding/roundToNearest.js";
export { default as snap } from "./rounding/snap.js";
export { default as isBetween } from "./rounding/isBetween.js";
export { default as wrap } from "./rounding/wrap.js";
export { default as normalize } from "./rounding/normalize.js";

// PERCENTAGES
export { default as percentage } from "./percentages/percentage.js";
export { default as increaseByPercentage } from "./percentages/increaseByPercentage.js";
export { default as decreaseByPercentage } from "./percentages/decreaseByPercentage.js";
export { default as percentageDifference } from "./percentages/percentageDifference.js";
export { default as percentageChange } from "./percentages/percentageChange.js";
export { default as findOriginalValue } from "./percentages/findOriginalValue.js";
export { default as findFinalValue } from "./percentages/findFinalValue.js";
export { default as discount } from "./percentages/discount.js";
export { default as markup } from "./percentages/markup.js";
export { default as profitPercentage } from "./percentages/profitPercentage.js";
export { default as lossPercentage } from "./percentages/lossPercentage.js";
export { default as margin } from "./percentages/margin.js";
export { default as relativeChange } from "./percentages/relativeChange.js";

// STATISTICS
export { default as sum } from "./statistics/sum.js";
export { default as average } from "./statistics/average.js";
export { default as median } from "./statistics/median.js";
export { default as mode } from "./statistics/mode.js";
export { default as range } from "./statistics/range.js";
export { default as variance } from "./statistics/variance.js";
export { default as standardDeviation } from "./statistics/standardDeviation.js";
export { default as max } from "./statistics/max.js";
export { default as min } from "./statistics/min.js";
export { default as count } from "./statistics/count.js";
export { default as frequency } from "./statistics/frequency.js";
export { default as quartiles } from "./statistics/quartiles.js";
export { default as interQuartileRange } from "./statistics/interQuartileRange.js";

// ARRAYS
export { default as dotProduct } from "./arrays/dotProduct.js";
export { default as crossProduct } from "./arrays/crossProduct.js";
export { default as elementWiseAdd } from "./arrays/elementWiseAdd.js";
export { default as elementWiseSubtract } from "./arrays/elementWiseSubtract.js";
export { default as elementWiseMultiply } from "./arrays/elementWiseMultiply.js";
export { default as elementWiseDivide } from "./arrays/elementWiseDivide.js";
export { default as scalarMultiply } from "./arrays/scalarMultiply.js";
export { default as scalarDivide } from "./arrays/scalarDivide.js";
export { default as normalizeVector } from "./arrays/normalizeVector.js";
export { default as vectorMagnitude } from "./arrays/vectorMagnitude.js";
export { default as vectorDistance } from "./arrays/vectorDistance.js";
export { default as cosineSimilarity } from "./arrays/cosineSimilarity.js";
export { default as angleBetweenVectors } from "./arrays/angleBetweenVectors.js";
export { default as projectVector } from "./arrays/projectVector.js";
export { default as cumulativeSum } from "./arrays/cumulativeSum.js";
export { default as movingAverage } from "./arrays/movingAverage.js";

// RANDOM
export { default as random } from "./random/random.js";
export { default as randomInt } from "./random/randomInt.js";
export { default as randomFloat } from "./random/randomFloat.js";
export { default as randomBoolean } from "./random/randomBoolean.js";
export { default as randomChoice } from "./random/randomChoice.js";
export { default as shuffle } from "./random/shuffle.js";
export { default as sample } from "./random/sample.js";
/**
 * future goals
 * randomSign() → returns -1 or 1
 * randomHexColor()
 * randomRGB()
 * randomUUID() (using crypto.randomUUID())
 * randomString(length, charset)
 * randomDate(start, end)
 * weightedChoice(items, weights)
 * randomGaussian(mean, stdDev) (normal distribution via the Box–Muller transform)
 * randomSeed(seed) (seeded pseudo-random number generator)
 */

// ALGEBRA
export { default as solveLinear } from "./algebra/solveLinear.js";
export { default as discriminant } from "./algebra/discriminant.js";
export { default as solveQuadratic } from "./algebra/solveQuadratic.js";

// TRIGONOMETRY
export { default as degreesToRadians } from "./trigonometry/degreesToRadians.js";
export { default as radiansToDegrees } from "./trigonometry/radiansToDegrees.js";
export { default as sin } from "./trigonometry/sin.js";
export { default as cos } from "./trigonometry/cos.js";
export { default as tan } from "./trigonometry/tan.js";
export { default as asin } from "./trigonometry/asin.js";
export { default as acos } from "./trigonometry/acos.js";
export { default as atan } from "./trigonometry/atan.js";
export { default as hypotenuse } from "./trigonometry/hypotenuse.js";

// LOGARITHMS
export { default as ln } from "./logarithms/ln.js";
export { default as log10 } from "./logarithms/log10.js";
export { default as log2 } from "./logarithms/log2.js";
export { default as log } from "./logarithms/log.js";

// COMBINATORICS
export { default as permutation } from "./combinatorics/permutation.js";
export { default as combination } from "./combinatorics/combination.js";
export { default as binomialCoefficient } from "./combinatorics/binomialCoefficient.js";

// CALCULUS
export { default as numericalDerivative } from "./calculus/numericalDerivative.js";
export { default as integrate } from "./calculus/integrate.js";
/**
 * Future Goals
 * secondDerivative(fn, x)
 * simpsonsRule(fn, start, end) (more accurate integration)
 * newtonRaphson(fn, derivative, guess) (root finding)
 * bisectionMethod(fn, left, right)
 * gradient(fn, point[])
 * partialDerivative(fn, variableIndex)
 */

// FINANCE
export { default as simpleInterest } from "./finance/simpleInterest.js";
export { default as compoundInterest } from "./finance/compoundInterest.js";
export { default as loanEMI } from "./finance/loanEMI.js";
export { default as futureValue } from "./finance/futureValue.js";
export { default as presentValue } from "./finance/presentValue.js";
/**
 * Future Goals
 * amortizationSchedule()
 * annuityPayment()
 * netPresentValue()
 * internalRateOfReturn()
 * effectiveAnnualRate()
 * nominalRate()
 * paybackPeriod()
 * depreciationStraightLine()
 * depreciationDecliningBalance()
 */

// SEQUENCES
export { default as arithmeticSequence } from "./sequences/arithmeticSequence.js";
export { default as geometricSequence } from "./sequences/geometricSequence.js";
export { default as sumArithmeticSeries } from "./sequences/sumArithmeticSeries.js";
export { default as sumGeometricSeries } from "./sequences/sumGeometricSeries.js";
/**
 * Future Goals
 * nthArithmeticTerm(a, d, n)
 * nthGeometricTerm(a, r, n)
 * harmonicSequence(a, n)
 * harmonicMean(array)
 * fibonacci(n)
 * lucas(n)
 * tribonacci(n)
 * pell(n)
 */

// MATRICES
export { default as matrixAdd } from "./matrices/matrixAdd.js";
export { default as matrixSubtract } from "./matrices/matrixSubtract.js";
export { default as matrixMultiply } from "./matrices/matrixMultiply.js";
export { default as transpose } from "./matrices/transpose.js";
export { default as identityMatrix } from "./matrices/identityMatrix.js";
export { default as determinant } from "./matrices/determinant.js";
export { default as trace } from "./matrices/trace.js";
export { default as inverseMatrix } from "./matrices/inverseMatrix.js";

// COMPLEX
export { default as complexAdd } from "./complex/complexAdd.js";
export { default as complexSubtract } from "./complex/complexSubtract.js";
export { default as complexMultiply } from "./complex/complexMultiply.js";
export { default as complexDivide } from "./complex/complexDivide.js";
export { default as complexMagnitude } from "./complex/complexMagnitude.js";
/**
 * Future Goals
 * Function	Description
 * complexConjugate(z)	Returns a−bi
 * complexArgument(z)	Phase angle (atan2)
 * complexFromPolar(r, θ)	Polar → rectangular conversion
 * complexToPolar(z)	Rectangular → polar conversion
 * complexEquals(a, b, epsilon)	Floating-point tolerant comparison
 * complexPower(z, n)	Raise to an integer power
 * complexSqrt(z)	Principal square root
 * complexExp(z)	Complex exponential
 * complexLog(z)	Natural logarithm of a complex number
 */
