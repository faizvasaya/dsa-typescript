import { hasCycleWithExtraSpace, hasCycleWithNoExtraSpace } from './0141-linked-list-cycle';
import { buildLinkedListWithCycle } from '../../helpers/linked-list';

describe('LC 141 - Linked List Cycle - hasCycleWithExtraSpace', () => {
  test('should return true for [3, 2, 0, -4] with a cycle at index 1', () => {
    const head = buildLinkedListWithCycle([3, 2, 0, -4], 1);
    expect(hasCycleWithExtraSpace(head)).toBe(true);
  });

  test('should return true for [1, 2] with a cycle at index 0', () => {
    const head = buildLinkedListWithCycle([1, 2], 0);
    expect(hasCycleWithExtraSpace(head)).toBe(true);
  });

  test('should return false for [1] without a cycle', () => {
    const head = buildLinkedListWithCycle([1, 2], -1);
    expect(hasCycleWithExtraSpace(head)).toBe(false);
  });

  test('should return false for empty list', () => {
    expect(hasCycleWithExtraSpace(null)).toBe(false);
  });

  test('should return false for [1,2,3,4,5] without a cycle', () => {
    const head = buildLinkedListWithCycle([1, 2, 3, 4, 5], -1);
    expect(hasCycleWithExtraSpace(head)).toBe(false);
  });

  test('should return true for self loop', () => {
    const head = buildLinkedListWithCycle([5], 0);
    expect(hasCycleWithExtraSpace(head)).toBe(true);
  });

  test('should return true for cycle at the end', () => {
    const head = buildLinkedListWithCycle([1, 2], 1);
    expect(hasCycleWithExtraSpace(head)).toBe(true);
  });

  test('cycle from head - entire list', () => {
    const head = buildLinkedListWithCycle([1, 2, 3, 4, 5], 0);
    expect(hasCycleWithExtraSpace(head)).toBe(true);
  });

  test('long tail with short cycle at the end of the list', () => {
    const arr = Array.from({ length: 20 }, (v, k) => k);
    const head = buildLinkedListWithCycle(arr, 10);
    expect(hasCycleWithExtraSpace(head)).toBe(true);
  });

  test('all same elements with cycle', () => {
    const head = buildLinkedListWithCycle([1, 1, 1, 1, 1], 2);
    expect(hasCycleWithExtraSpace(head)).toBe(true);
  });

  test('extreme node values', () => {
    const head = buildLinkedListWithCycle([100000, 0, -100000], 1);
    expect(hasCycleWithExtraSpace(head)).toBe(true);
  });

  test('large list with cycle', () => {
    const arr = Array.from({ length: 10_000 }, (v, k) => k);
    const head = buildLinkedListWithCycle(arr, 10);
    expect(hasCycleWithExtraSpace(head)).toBe(true);
  });
});

describe('LC 141 - Linked List Cycle - hasCycleWithNoExtraSpace', () => {
  test('should return true for [3, 2, 0, -4] with a cycle at index 1', () => {
    const head = buildLinkedListWithCycle([3, 2, 0, -4], 1);
    expect(hasCycleWithNoExtraSpace(head)).toBe(true);
  });

  test('should return true for [1, 2] with a cycle at index 0', () => {
    const head = buildLinkedListWithCycle([1, 2], 0);
    expect(hasCycleWithNoExtraSpace(head)).toBe(true);
  });

  test('should return false for [1] without a cycle', () => {
    const head = buildLinkedListWithCycle([1, 2], -1);
    expect(hasCycleWithNoExtraSpace(head)).toBe(false);
  });

  test('should return false for empty list', () => {
    expect(hasCycleWithNoExtraSpace(null)).toBe(false);
  });

  test('should return false for [1,2,3,4,5] without a cycle', () => {
    const head = buildLinkedListWithCycle([1, 2, 3, 4, 5], -1);
    expect(hasCycleWithNoExtraSpace(head)).toBe(false);
  });

  test('should return true for self loop', () => {
    const head = buildLinkedListWithCycle([5], 0);
    expect(hasCycleWithNoExtraSpace(head)).toBe(true);
  });

  test('should return true for cycle at the end', () => {
    const head = buildLinkedListWithCycle([1, 2], 1);
    expect(hasCycleWithNoExtraSpace(head)).toBe(true);
  });

  test('cycle from head - entire list', () => {
    const head = buildLinkedListWithCycle([1, 2, 3, 4, 5], 0);
    expect(hasCycleWithNoExtraSpace(head)).toBe(true);
  });

  test('long tail with short cycle at the end of the list', () => {
    const arr = Array.from({ length: 20 }, (v, k) => k);
    const head = buildLinkedListWithCycle(arr, 10);
    expect(hasCycleWithNoExtraSpace(head)).toBe(true);
  });

  test('all same elements with cycle', () => {
    const head = buildLinkedListWithCycle([1, 1, 1, 1, 1], 2);
    expect(hasCycleWithNoExtraSpace(head)).toBe(true);
  });

  test('extreme node values', () => {
    const head = buildLinkedListWithCycle([100000, 0, -100000], 1);
    expect(hasCycleWithNoExtraSpace(head)).toBe(true);
  });

  test('large list with cycle', () => {
    const arr = Array.from({ length: 10_000 }, (v, k) => k);
    const head = buildLinkedListWithCycle(arr, 10);
    expect(hasCycleWithNoExtraSpace(head)).toBe(true);
  });
});
