/**
 * TC: O(log N) + O(N) = O(N log N)
 * SC: O(1)
 */
export function findDuplicateSortingArray(nums: number[]): number {
  nums.sort();
  let iPointer = 0;
  let jPointer = 1;
  while (iPointer < nums.length - 1 && jPointer < nums.length) {
    if (nums[iPointer] === nums[jPointer]) {
      return nums[iPointer];
    }
    iPointer++;
    jPointer++;
  }
  return 0;
}

/**
 * TC: O(N)
 * SC: O(N)
 */
export function findDuplicateUsingSet(nums: number[]): number {
  const seen = new Set();
  let index = 0;
  while (index < nums.length) {
    if (seen.has(nums[index])) return nums[index];
    seen.add(nums[index]);
    index++;
  }

  return 0;
}

/**
 * TC: O(N)
 * SC: O(1)
 */
export function findDuplicateCycleDetection(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  let p1 = 0;
  let p2 = slow;

  while (p1 !== p2) {
    p1 = nums[p1];
    p2 = nums[p2];
  }

  return p1;
}

/**
 * TC: O(N)
 * SC: O(1)
 */
export function findDuplicate(nums: number[]): number {
  let index = 0;
  while (index < nums.length) {
    const indexToMark = Math.abs(nums[index]);
    if (nums[indexToMark] < 0) {
      return indexToMark;
    }
    nums[indexToMark] = -nums[indexToMark];
    index++;
  }

  return -1;
}

if (require.main === module) {
  {
    const cases = [
      { nums: [1, 3, 4, 2, 2], expected: 2, label: 'duplicate appears twice in 5-elements' },
      { nums: [3, 3, 3, 3], expected: 3, label: 'duplicate appears 4 times in 5-elements' },
    ];

    for (const { nums, expected, label } of cases) {
      const result = findDuplicate(nums);
      const pass = result === expected ? '✅ Passed' : '❌ Failed';
      console.log(`${pass} ${label}: nums=${JSON.stringify(nums)} -> ${result}`);
    }
  }
  {
    const cases = [
      { nums: [1, 3, 4, 2, 2], expected: 2, label: 'duplicate appears twice in 5-elements' },
      { nums: [3, 3, 3, 3], expected: 3, label: 'duplicate appears 4 times in 5-elements' },
    ];

    for (const { nums, expected, label } of cases) {
      const result = findDuplicateSortingArray(nums);
      const pass = result === expected ? '✅ Passed' : '❌ Failed';
      console.log(`${pass} ${label}: nums=${JSON.stringify(nums)} -> ${result}`);
    }
  }
  {
    const cases = [
      { nums: [1, 3, 4, 2, 2], expected: 2, label: 'duplicate appears twice in 5-elements' },
      { nums: [3, 3, 3, 3], expected: 3, label: 'duplicate appears 4 times in 5-elements' },
    ];

    for (const { nums, expected, label } of cases) {
      const result = findDuplicateUsingSet(nums);
      const pass = result === expected ? '✅ Passed' : '❌ Failed';
      console.log(`${pass} ${label}: nums=${JSON.stringify(nums)} -> ${result}`);
    }
  }

  {
    const cases = [
      { nums: [1, 3, 4, 2, 2], expected: 2, label: 'duplicate appears twice in 5-elements' },
      { nums: [3, 3, 3, 3], expected: 3, label: 'duplicate appears 4 times in 5-elements' },
    ];

    for (const { nums, expected, label } of cases) {
      const result = findDuplicateCycleDetection(nums);
      const pass = result === expected ? '✅ Passed' : '❌ Failed';
      console.log(`${pass} ${label}: nums=${JSON.stringify(nums)} -> ${result}`);
    }
  }
}
