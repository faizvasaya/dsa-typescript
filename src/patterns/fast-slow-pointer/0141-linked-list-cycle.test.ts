import { hasCycle } from './0141-linked-list-cycle';
import { buildLinkedListWithCycle } from '../../helpers/linked-list';

describe('LC 141 - Linked List Cycle', () => {
  it('should return true for [3, 2, 0, -4] with a cycle at index 1', () => {
    const head = buildLinkedListWithCycle([3, 2, 0, -4], 1);
    expect(hasCycle(head)).toBe(true);
  });

  it('should return false for [1, 2] without a cycle', () => {
    const head = buildLinkedListWithCycle([1, 2], -1);
    expect(hasCycle(head)).toBe(false);
  });
});
