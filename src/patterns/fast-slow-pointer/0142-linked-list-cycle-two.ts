import { buildLinkedListWithCycle, getNodeAtIndex, ListNode } from '../../helpers/linked-list';
/**
 * TC: O(N)
 * SC: O(1)
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let p1 = head;
      let p2 = slow;

      while (p1 !== p2 && p1 !== null && p2 !== null) {
        p1 = p1.next;
        p2 = p2.next;
      }

      return p1;
    }
  }

  return null;
}

/**
 * TC: O(N)
 * SC: O(N)
 */
export function detectCycleWithExtraSpace(head: ListNode | null): ListNode | null {
  const seen = new Set();
  let current = head;

  while (current !== null) {
    if (seen.has(current)) return current;
    seen.add(current);
    current = current.next;
  }

  return null;
}

if (require.main === module) {
  const cases = [
    {
      arr: [3, 2, 0, -4],
      cyclePos: 1,
      label: 'Cycle starts at index 1 (val=2)',
    },
    {
      arr: [1, 2],
      cyclePos: 0,
      label: 'Cycle starts at head (val=1)',
    },
    {
      arr: [1],
      cyclePos: -1,
      label: 'no cycle',
    },
    {
      arr: [],
      cyclePos: -1,
      label: 'no cycle',
    },
    {
      arr: [1, 2, 3, 4, 5],
      cyclePos: -1,
      label: 'no cycle',
    },
    {
      arr: [5],
      cyclePos: 0,
      label: 'single node self-loop',
    },
    {
      arr: [1, 2, 3, 4, 5],
      cyclePos: 4,
      label: 'last node self-loops',
    },
  ];

  for (const { arr, cyclePos, label } of cases) {
    const head = buildLinkedListWithCycle(arr, cyclePos);
    const expected = cyclePos === -1 ? null : getNodeAtIndex(head, cyclePos);
    const result = detectCycle(head);

    const pass = result === expected ? '✅ Passed' : '❌ Failed';
    const expectedString = expected === null ? 'null' : `node(val=${expected.val})`;
    const resultString = result === null ? 'null' : `node(val=${result.val})`;

    console.log(`detectCycle ${pass} ${label}: expected ${expectedString}, got ${resultString}`);
  }

  for (const { arr, cyclePos, label } of cases) {
    const head = buildLinkedListWithCycle(arr, cyclePos);
    const expected = cyclePos === -1 ? null : getNodeAtIndex(head, cyclePos);
    const result = detectCycleWithExtraSpace(head);

    const pass = result === expected ? '✅ Passed' : '❌ Failed';
    const expectedString = expected === null ? 'null' : `node(val=${expected.val})`;
    const resultString = result === null ? 'null' : `node(val=${result.val})`;

    console.log(
      `detectCycleWithExtraSpace ${pass} ${label}: expected ${expectedString}, got ${resultString}`,
    );
  }
}
