/**
 * TC: O(N)
 * SC: O(N)
 */
export function removeDuplicatesWithExtraSpace(nums: number[]): number {
  const uniqueElements = new Set(nums);
  nums.length = 0;
  nums.push(...uniqueElements);
  return nums.length;
}
/**
 * TC: O(N)
 * SC: O(1)
 */
export function removeDuplicatesWatchingNextValue(nums: number[]): number {
  if (nums.length === 0) return 0;

  let fast = 0;
  let slow = 0;

  while (fast < nums.length - 1) {
    if (nums[fast] === nums[fast + 1]) {
      fast++;
    } else {
      fast++;
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}

/**
 * TC: O(N)
 * SC: O(1)
 */
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}

if (require.main === module) {
  {
    const cases = [
      { nums: [1, 1, 2], expectedK: 2, expectedFirstK: [1, 2] },
      { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectedK: 5, expectedFirstK: [0, 1, 2, 3, 4] },
    ];

    for (const { expectedFirstK, expectedK, nums } of cases) {
      const input = [...nums];
      const k = removeDuplicates(input);
      const firstK = input.slice(0, k);
      const pass =
        k === expectedK && JSON.stringify(firstK) === JSON.stringify(expectedFirstK)
          ? '✅ Passed'
          : '❌ Failed';
      console.log(`${pass} nums=${JSON.stringify(nums)}, unique=${JSON.stringify(firstK)}`);
    }
  }
  {
    const cases = [
      { nums: [1, 1, 2], expectedK: 2, expectedFirstK: [1, 2] },
      { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectedK: 5, expectedFirstK: [0, 1, 2, 3, 4] },
    ];

    for (const { expectedFirstK, expectedK, nums } of cases) {
      const input = [...nums];
      const k = removeDuplicatesWithExtraSpace(input);
      const firstK = input.slice(0, k);
      const pass =
        k === expectedK && JSON.stringify(firstK) === JSON.stringify(expectedFirstK)
          ? '✅ Passed'
          : '❌ Failed';
      console.log(`${pass} nums=${JSON.stringify(nums)}, unique=${JSON.stringify(firstK)}`);
    }
  }
  {
    const cases = [
      { nums: [1, 1, 2], expectedK: 2, expectedFirstK: [1, 2] },
      { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectedK: 5, expectedFirstK: [0, 1, 2, 3, 4] },
    ];

    for (const { expectedFirstK, expectedK, nums } of cases) {
      const input = [...nums];
      const k = removeDuplicatesWatchingNextValue(input);
      const firstK = input.slice(0, k);
      const pass =
        k === expectedK && JSON.stringify(firstK) === JSON.stringify(expectedFirstK)
          ? '✅ Passed'
          : '❌ Failed';
      console.log(`${pass} nums=${JSON.stringify(nums)}, unique=${JSON.stringify(firstK)}`);
    }
  }
}
