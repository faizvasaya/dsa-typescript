/**
 * TC: O(N)
 * SC: O(1)
 */
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}

/**
 * TC: O(N)
 * SC: O(N)
 */
export function twoSumWithExtraSpace(numbers: number[], target: number): number[] {
  const map = new Map();
  for (let index = 0; index < numbers.length; index++) {
    const diffIndex = map.get(target - numbers[index]);
    if (diffIndex !== undefined) {
      if (diffIndex < index) {
        return [diffIndex + 1, index + 1];
      }
    }
    map.set(numbers[index], index);
  }

  return [-1, -1];
}

if (require.main === module) {
  {
    const cases = [
      { nums: [2, 7, 11, 15], target: 9, expected: [1, 2] },
      { nums: [2, 3, 4], target: 6, expected: [1, 3] },
    ];

    for (const { nums, target, expected } of cases) {
      const result = twoSum(nums, target);
      const pass = JSON.stringify(result) === JSON.stringify(expected) ? '✅ Passed' : '❌ Failed';
      console.log(`${pass} "${nums}" "${target}" => ${result}`);
    }
  }

  {
    const cases = [
      { nums: [2, 7, 11, 15], target: 9, expected: [1, 2] },
      { nums: [2, 3, 4], target: 6, expected: [1, 3] },
    ];

    for (const { nums, target, expected } of cases) {
      const result = twoSumWithExtraSpace(nums, target);
      const pass = JSON.stringify(result) === JSON.stringify(expected) ? '✅ Passed' : '❌ Failed';
      console.log(`${pass} "${nums}" "${target}" => ${result}`);
    }
  }
}
