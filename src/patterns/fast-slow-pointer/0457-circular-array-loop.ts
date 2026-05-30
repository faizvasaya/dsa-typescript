/**
 * TC: O(N x N)
 * SC: O(1)
 */
export function circularArrayLoop(nums: number[]): boolean {
  for (let index = 0; index < nums.length; index++) {
    if (hasCycle(nums, index)) return true;
  }
  return false;
}

export function circularArrayLoopWithMarking(nums: number[]): boolean {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      console.log(`Skipped for ${index}`);
      continue;
    }
    if (hasCycle(nums, index)) {
      return true;
    } else {
      markAsCompleted(nums, index);
    }
  }
  return false;
}

function markAsCompleted(nums: number[], startIndex: number) {
  const direction = nums[startIndex] > 0 ? 1 : -1;
  let current = startIndex;
  while (nums[current] !== 0) {
    const currentDirection = nums[current] > 0 ? 1 : -1;
    if (currentDirection !== direction) break;

    const next = nextIndex(nums, current);
    nums[current] = 0;
    current = next;
  }
}

function hasCycle(nums: number[], startIndex: number): boolean {
  let slow = startIndex;
  let fast = startIndex;
  const startDirection = nums[startIndex] > 0 ? 1 : -1;

  while (true) {
    slow = nextIndex(nums, slow);
    const slowDirection = nums[slow] > 0 ? 1 : -1;
    if (slowDirection !== startDirection) return false;

    fast = nextIndex(nums, fast);
    let fastDirection = nums[fast] > 0 ? 1 : -1;
    if (fastDirection !== startDirection) return false;

    fast = nextIndex(nums, fast);
    fastDirection = nums[fast] > 0 ? 1 : -1;
    if (fastDirection !== startDirection) return false;

    if (slow === fast) {
      if (nextIndex(nums, slow) === slow) {
        return false;
      }
      return true;
    }
  }
}

function nextIndex(nums: number[], i: number): number {
  const n = nums.length;
  return (((i + nums[i]) % n) + n) % n;
}

if (require.main === module) {
  {
    const cases = [
      { nums: [2, -1, 1, 2, 2], label: 'Cycle' },
      { nums: [-1, 2], label: 'Self loop' },
      { nums: [-1, 1], label: 'Opposite direction' },
    ];
    for (const { nums, label } of cases) {
      console.log(`Case: ${JSON.stringify(nums)} label: ${label} => ${circularArrayLoop(nums)}`);
    }
  }

  {
    const cases = [
      { nums: [2, -1, 1, 2, 2], label: 'Cycle' },
      { nums: [-1, 2], label: 'Self loop' },
      { nums: [-1, 1], label: 'Opposite direction' },
    ];
    for (const { nums, label } of cases) {
      console.log(
        `Case: ${JSON.stringify(nums)} label: ${label} => ${circularArrayLoopWithMarking(nums)}`,
      );
    }
  }
}
