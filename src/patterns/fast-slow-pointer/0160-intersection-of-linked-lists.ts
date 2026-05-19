import { buildIntersectingLists, ListNode } from '../../helpers/linked-list';

/**
 * TC: O(M x N)
 * SC: O(1)
 */
export function getIntersectionNodeTwoLoops(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let currentOfA = headA;
  while (currentOfA !== null) {
    let currentOfB = headB;
    while (currentOfB !== null) {
      if (currentOfA === currentOfB) {
        return currentOfA;
      }
      currentOfB = currentOfB.next;
    }
    currentOfA = currentOfA.next;
  }
  return null;
}
/**
 * TC: O(M + N)
 * SC: O(1)
 */
export function getIntersectionNodeTwoPointer(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  if (headA === null || headB === null) return null;

  let pointerA: ListNode | null = headA;
  let pointerB: ListNode | null = headB;
  while (pointerA !== pointerB) {
    if (pointerA === null) {
      pointerA = headB;
    } else {
      pointerA = pointerA.next;
    }

    if (pointerB === null) {
      pointerB = headA;
    } else {
      pointerB = pointerB.next;
    }
  }

  return pointerA;
}

if (require.main === module) {
  {
    const [headA, headB, expected] = buildIntersectingLists([4, 1], [5, 6, 1], [8, 4, 5]);

    const result1 = getIntersectionNodeTwoLoops(headA, headB);
    const result2 = getIntersectionNodeTwoPointer(headA, headB);

    const pass1 = result1 === expected ? '✅ Passed' : '❌ Failed';
    const pass2 = result2 === expected ? '✅ Passed' : '❌ Failed';
    const expectedStr = expected === null ? 'null' : `node(val=${expected.val})`;

    console.log(`Case: Intersection at val=8`);
    console.log(
      ` ${pass1} Two loops -> ${result1 === null ? 'null' : `node(val=${result1.val})`} (expected ${expectedStr})`,
    );
    console.log(
      ` ${pass2} Two Pointer -> ${result2 === null ? 'null' : `node(val=${result2.val})`} (expected ${expectedStr})`,
    );
  }

  {
    const [headA, headB, expected] = buildIntersectingLists([1, 2, 3], [4, 5], []);

    const result1 = getIntersectionNodeTwoLoops(headA, headB);
    const result2 = getIntersectionNodeTwoPointer(headA, headB);

    const pass1 = result1 === expected ? '✅ Passed' : '❌ Failed';
    const pass2 = result2 === expected ? '✅ Passed' : '❌ Failed';
    const expectedStr = expected === null ? 'null' : `node(val=${expected.val})`;

    console.log(`Case: Intersection at val=8`);
    console.log(
      ` ${pass1} Two loops -> ${result1 === null ? 'null' : `node(val=${result1.val})`} (expected ${expectedStr})`,
    );
    console.log(
      ` ${pass2} Two Pointer -> ${result2 === null ? 'null' : `node(val=${result2.val})`} (expected ${expectedStr})`,
    );
  }
}
