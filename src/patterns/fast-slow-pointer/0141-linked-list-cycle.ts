import { ListNode, buildLinkedListWithCycle } from '../../helpers/linked-list';

/**
 * TC: O(N)
 * SC: O(1)
 */
export function hasCycleWithNoExtraSpace(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (slow !== null && fast !== null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      return true;
    }
  }

  return false;
}

/**
 * TC: O(N)
 * SC: O(N)
 */
export function hasCycleWithExtraSpace(head: ListNode | null): boolean {
  const seen = new Set();

  let current = head;

  while (current != null) {
    if (seen.has(current)) return true;
    seen.add(current);
    current = current.next;
  }

  return false;
}

if (require.main === module) {
  const cases = [
    {
      arr: [3, 2, 0, -4],
      cyclePos: 1,
      expected: true,
    },
  ];

  for (const { arr, cyclePos, expected } of cases) {
    const head = buildLinkedListWithCycle(arr, cyclePos);
    const result = hasCycleWithExtraSpace(head);
    const passed = result === expected ? '✅ Passed' : '❌ Failed';
    console.log(
      `hasCycle` +
        `${passed} arr=${JSON.stringify(arr)} cyclePos=${cyclePos} -> ${result} (expected: ${expected})`,
    );
  }

  for (const { arr, cyclePos, expected } of cases) {
    const head = buildLinkedListWithCycle(arr, cyclePos);
    const result = hasCycleWithNoExtraSpace(head);
    const passed = result === expected ? '✅ Passed' : '❌ Failed';
    console.log(
      `hasCycleWithNoExtraSpace` +
        `${passed} arr=${JSON.stringify(arr)} cyclePos=${cyclePos} -> ${result} (expected: ${expected})`,
    );
  }
}
