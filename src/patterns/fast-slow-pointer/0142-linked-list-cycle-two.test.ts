import { detectCycleWithExtraSpace, detectCycle } from './0142-linked-list-cycle-two';
import { buildLinkedListWithCycle, getNodeAtIndex } from '../../helpers/linked-list';

describe('LC 142 - Linked List Cycle II - With Extra Space', () => {
  test('cycle at index 1 in [3,2,0,-4] return the node at index 1', () => {
    const head = buildLinkedListWithCycle([3, 2, 0, -4], 1);
    const expected = getNodeAtIndex(head, 1);
    expect(detectCycleWithExtraSpace(head)).toBe(expected);
  });

  test('cycle at index 10 in 10^4 return the node at index 10', () => {
    const head = buildLinkedListWithCycle(
      Array.from({ length: 10_000 }, (v, k) => k),
      10,
    );
    const expected = getNodeAtIndex(head, 10);
    expect(detectCycleWithExtraSpace(head)).toBe(expected);
  });

  test('cycle at index 10 in 10^4 return the node at index 10', () => {
    const head = buildLinkedListWithCycle(
      Array.from({ length: 100 }, (v, k) => k),
      95,
    );
    const expected = getNodeAtIndex(head, 95);
    expect(detectCycleWithExtraSpace(head)).toBe(expected);
  });

  test('cycle at boundary values', () => {
    const head = buildLinkedListWithCycle([-100000, 0, 1, 9999, 100000], 1);
    const expected = getNodeAtIndex(head, 1);
    expect(detectCycleWithExtraSpace(head)).toBe(expected);
  });

  test('no cycle in [1] returns null', () => {
    const head = buildLinkedListWithCycle([1], -1);
    expect(detectCycleWithExtraSpace(head)).toBeNull();
  });

  test('empty [] returns null', () => {
    const head = buildLinkedListWithCycle([], -1);
    expect(detectCycleWithExtraSpace(head)).toBeNull();
  });

  test('cycle at last node', () => {
    const head = buildLinkedListWithCycle([3, 2, 0, -4], 3);
    const expected = getNodeAtIndex(head, 3);
    expect(detectCycleWithExtraSpace(head)).toBe(expected);
  });

  test('cycle at first node', () => {
    const head = buildLinkedListWithCycle([3, 2, 0, -4], 0);
    const expected = getNodeAtIndex(head, 0);
    expect(detectCycleWithExtraSpace(head)).toBe(expected);
  });

  test('cycle at duplicate values', () => {
    const head = buildLinkedListWithCycle([3, 3, 3, 3], 3);
    const expected = getNodeAtIndex(head, 3);
    expect(detectCycleWithExtraSpace(head)).toBe(expected);
  });

  test('cycle at negative values', () => {
    const head = buildLinkedListWithCycle([-1, -100, -500, -600, -600], 3);
    const expected = getNodeAtIndex(head, 3);
    expect(detectCycleWithExtraSpace(head)).toBe(expected);
  });

  test('cycle at 0 values', () => {
    const arr = [0, 0, 0, 0, 0];
    const head = buildLinkedListWithCycle(arr, 4);
    buildLinkedListWithCycle(arr, 4);
    const expected = getNodeAtIndex(head, 4);
    expect(detectCycleWithExtraSpace(head)).toBe(expected);
  });
});

describe('LC 142 - Linked List Cycle II - Without Extra Space', () => {
  test('cycle at index 1 in [3,2,0,-4] return the node at index 1', () => {
    const head = buildLinkedListWithCycle([3, 2, 0, -4], 1);
    const expected = getNodeAtIndex(head, 1);
    expect(detectCycle(head)).toBe(expected);
  });

  test('cycle at index 10 in 10^4 return the node at index 10', () => {
    const head = buildLinkedListWithCycle(
      Array.from({ length: 10_000 }, (v, k) => k),
      10,
    );
    const expected = getNodeAtIndex(head, 10);
    expect(detectCycle(head)).toBe(expected);
  });

  test('cycle at index 10 in 10^4 return the node at index 10', () => {
    const head = buildLinkedListWithCycle(
      Array.from({ length: 100 }, (v, k) => k),
      95,
    );
    const expected = getNodeAtIndex(head, 95);
    expect(detectCycle(head)).toBe(expected);
  });

  test('cycle at boundary values', () => {
    const head = buildLinkedListWithCycle([-100000, 0, 1, 9999, 100000], 1);
    const expected = getNodeAtIndex(head, 1);
    expect(detectCycle(head)).toBe(expected);
  });

  test('no cycle in [1] returns null', () => {
    const head = buildLinkedListWithCycle([1], -1);
    expect(detectCycle(head)).toBeNull();
  });

  test('empty [] returns null', () => {
    const head = buildLinkedListWithCycle([], -1);
    expect(detectCycle(head)).toBeNull();
  });

  test('cycle at last node', () => {
    const head = buildLinkedListWithCycle([3, 2, 0, -4], 3);
    const expected = getNodeAtIndex(head, 3);
    expect(detectCycle(head)).toBe(expected);
  });

  test('cycle at first node', () => {
    const head = buildLinkedListWithCycle([3, 2, 0, -4], 0);
    const expected = getNodeAtIndex(head, 0);
    expect(detectCycle(head)).toBe(expected);
  });

  test('cycle at duplicate values', () => {
    const head = buildLinkedListWithCycle([3, 3, 3, 3], 3);
    const expected = getNodeAtIndex(head, 3);
    expect(detectCycle(head)).toBe(expected);
  });

  test('cycle at negative values', () => {
    const head = buildLinkedListWithCycle([-1, -100, -500, -600, -600], 3);
    const expected = getNodeAtIndex(head, 3);
    expect(detectCycle(head)).toBe(expected);
  });

  test('cycle at 0 values', () => {
    const arr = [0, 0, 0, 0, 0];
    const head = buildLinkedListWithCycle(arr, 4);
    buildLinkedListWithCycle(arr, 4);
    const expected = getNodeAtIndex(head, 4);
    expect(detectCycle(head)).toBe(expected);
  });
});
