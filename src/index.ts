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
export { default as transpose } from "./arrays/transpose.js";
export { default as matrixMultiply } from "./arrays/matrixMultiply.js";

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
randomHexColor()
randomRGB()
randomUUID() (using crypto.randomUUID())
randomString(length, charset)
randomDate(start, end)
weightedChoice(items, weights)
randomGaussian(mean, stdDev) (normal distribution via the Box–Muller transform)
randomSeed(seed) (seeded pseudo-random number generator)
 */

// ALGEBRA
export { default as solveLinear } from "./algebra/solveLinear.js";
export { default as discriminant } from "./algebra/discriminant.js";
export { default as solveQuadratic } from "./algebra/solveQuadratic.js";