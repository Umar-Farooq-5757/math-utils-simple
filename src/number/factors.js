export default function factors(n) {
  if (n === 0) return [];

  const result = [];

  for (let i = 1; i <= Math.sqrt(Math.abs(n)); i++) {
    if (n % i === 0) {
      result.push(i);

      if (i !== Math.abs(n) / i) {
        result.push(Math.abs(n) / i);
      }
    }
  }

  return result.sort((a, b) => a - b);
}
