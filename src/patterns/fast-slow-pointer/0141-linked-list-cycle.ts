import { ListNode, buildLinkedListWithCycle } from '../../helpers/linked-list';

export function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) return true;
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
    const result = hasCycle(head);
    const passed = result === expected ? '✅ Passed' : '❌ Failed';
    console.log(
      `${passed} arr=${JSON.stringify(arr)} cyclePos=${cyclePos} -> ${result} (expected: ${expected})`,
    );
  }
}
