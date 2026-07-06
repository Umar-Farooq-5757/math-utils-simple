export default function primeFactors(n: number): number[] {
  let currentN = n;
  const factorsList: number[] = [];

  if (currentN < 2) return factorsList;

  while (currentN % 2 === 0) {
    factorsList.push(2);
    currentN /= 2;
  }

  for (let i = 3; i <= Math.sqrt(currentN); i += 2) {
    while (currentN % i === 0) {
      factorsList.push(i);
      currentN /= i;
    }
  }

  if (currentN > 2) {
    factorsList.push(currentN);
  }

  return factorsList;
}
