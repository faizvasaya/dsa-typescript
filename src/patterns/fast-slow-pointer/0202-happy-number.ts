/**
 * TC: O(log N) ^ 2 (here N is the number of digits)
 * SC: O(log N)  (here N is the number of digits)
 */
export function isHappyWithExtraSpace(n: number): boolean {
  const seen = new Set();

  while (n !== 1) {
    n = getSumOfSquareOfANumber(n);
    if (seen.has(n)) return false;
    seen.add(n);
  }

  return true;
}

/**
 * TC: O(log N) ^ 2 (here N is the number of digits)
 * SC: O(1)
 */
export function isHappyWithoutExtraSpace(n: number): boolean {
  let slow = getSumOfSquareOfANumber(n);
  let fast = getSumOfSquareOfANumber(getSumOfSquareOfANumber(n));

  while (fast !== 1 && slow !== 1) {
    slow = getSumOfSquareOfANumber(slow);
    fast = getSumOfSquareOfANumber(getSumOfSquareOfANumber(fast));

    if (slow === fast) {
      return false;
    }
  }

  return true;
}

/**
 * TC: O(log N) (here N is the number of digits)
 */
function getSumOfSquareOfANumber(n: number): number {
  let sumOfSquare = 0;
  while (n > 0) {
    const digit = n % 10;
    sumOfSquare += digit * digit;
    n = Math.floor(n / 10);
  }

  return sumOfSquare;
}

if (require.main === module) {
  const cases = [
    { n: 19, expected: true },
    { n: 2, expected: false },
    { n: 1, expected: true },
    { n: 7, expected: true },
    { n: 2147483647, expected: false },
  ];

  for (const { n, expected } of cases) {
    const result = isHappyWithExtraSpace(n);
    const pass = result === expected ? '✅ Passed' : '❌ Failed';
    console.log(`isHappyWithExtraSpace ${pass} n=${n} -> ${result} (expected ${expected})`);
  }

  for (const { n, expected } of cases) {
    const result = isHappyWithoutExtraSpace(n);
    const pass = result === expected ? '✅ Passed' : '❌ Failed';
    console.log(`isHappyWithoutExtraSpace ${pass} n=${n} -> ${result} (expected ${expected})`);
  }
}
