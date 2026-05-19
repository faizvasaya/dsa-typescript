import { buildIntersectingLists } from '../../helpers/linked-list';
import {
  getIntersectionNodeTwoLoops,
  getIntersectionNodeTwoPointer,
} from './0160-intersection-of-linked-lists';

describe('LC 160 - Intersection of two linked lists - getIntersectionNodeTwoLoops', () => {
  test('basic intersection', () => {
    const [headA, headB, expected] = buildIntersectingLists([4, 1], [5, 6, 1], [8, 4, 5]);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBe(expected);
  });

  test('basic no intersection', () => {
    const [headA, headB] = buildIntersectingLists([4, 1], [5, 6, 1], []);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBeNull();
  });

  test('basic no intersection - empty inputs', () => {
    const [headA, headB] = buildIntersectingLists([], [], []);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBeNull();
  });

  test('basic no intersection - empty input A', () => {
    const [headA, headB] = buildIntersectingLists([], [23, 45], []);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBeNull();
  });
  test('basic no intersection - empty input B', () => {
    const [headA, headB] = buildIntersectingLists([23, 45], [], []);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBeNull();
  });

  test('intersection - empty input A with intersection', () => {
    const [headA, headB, expected] = buildIntersectingLists([], [23, 45], [5, 6]);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBe(expected);
  });

  test('intersection - empty input B with intersection', () => {
    const [headA, headB, expected] = buildIntersectingLists([23, 45], [], [5, 6]);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBe(expected);
  });

  test('intersection - A large B small', () => {
    const [headA, headB, expected] = buildIntersectingLists([1, 2, 3], [1], [5, 6]);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBe(expected);
  });

  test('intersection - B large A small', () => {
    const [headA, headB, expected] = buildIntersectingLists([1], [1, 2, 3, 4, 5, 6, 7, 8], [5, 6]);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBe(expected);
  });

  test('intersection - All same numbers', () => {
    const [headA, headB, expected] = buildIntersectingLists([1, 1, 1, 1], [1, 1, 1, 1], [1, 1]);
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBe(expected);
  });

  test('intersection - 3 x 10 ^ 4 numbers', () => {
    const [headA, headB, expected] = buildIntersectingLists(
      Array.from(
        {
          length: (3 * 10) ^ 4,
        },
        (v, k) => v,
      ) as number[],
      Array.from(
        {
          length: (3 * 10) ^ 4,
        },
        (v, k) => v,
      ) as number[],
      [(3 * 10) ^ 4],
    );
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBe(expected);
  });

  test('intersection - large numbers', () => {
    const [headA, headB, expected] = buildIntersectingLists(
      [10_0000, 9_0000, 8_0000],
      [10_0000, 9_0000, 8_0000],
      [10_000],
    );
    expect(getIntersectionNodeTwoLoops(headA, headB)).toBe(expected);
  });
});

describe('LC 160 - Intersection of two linked lists - getIntersectionNodeTwoPointer', () => {
  test('basic intersection', () => {
    const [headA, headB, expected] = buildIntersectingLists([4, 1], [5, 6, 1], [8, 4, 5]);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBe(expected);
  });

  test('basic no intersection', () => {
    const [headA, headB] = buildIntersectingLists([4, 1], [5, 6, 1], []);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBeNull();
  });

  test('basic no intersection - empty inputs', () => {
    const [headA, headB] = buildIntersectingLists([], [], []);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBeNull();
  });

  test('basic no intersection - empty input A', () => {
    const [headA, headB] = buildIntersectingLists([], [23, 45], []);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBeNull();
  });
  test('basic no intersection - empty input B', () => {
    const [headA, headB] = buildIntersectingLists([23, 45], [], []);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBeNull();
  });

  test('intersection - empty input A with intersection', () => {
    const [headA, headB, expected] = buildIntersectingLists([], [23, 45], [5, 6]);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBe(expected);
  });

  test('intersection - empty input B with intersection', () => {
    const [headA, headB, expected] = buildIntersectingLists([23, 45], [], [5, 6]);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBe(expected);
  });

  test('intersection - A large B small', () => {
    const [headA, headB, expected] = buildIntersectingLists([1, 2, 3], [1], [5, 6]);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBe(expected);
  });

  test('intersection - B large A small', () => {
    const [headA, headB, expected] = buildIntersectingLists([1], [1, 2, 3, 4, 5, 6, 7, 8], [5, 6]);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBe(expected);
  });

  test('intersection - All same numbers', () => {
    const [headA, headB, expected] = buildIntersectingLists([1, 1, 1, 1], [1, 1, 1, 1], [1, 1]);
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBe(expected);
  });

  test('intersection - 3 x 10 ^ 4 numbers', () => {
    const [headA, headB, expected] = buildIntersectingLists(
      Array.from(
        {
          length: (3 * 10) ^ 4,
        },
        (v, k) => v,
      ) as number[],
      Array.from(
        {
          length: (3 * 10) ^ 4,
        },
        (v, k) => v,
      ) as number[],
      [(3 * 10) ^ 4],
    );
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBe(expected);
  });

  test('intersection - large numbers', () => {
    const [headA, headB, expected] = buildIntersectingLists(
      [10_0000, 9_0000, 8_0000],
      [10_0000, 9_0000, 8_0000],
      [10_000],
    );
    expect(getIntersectionNodeTwoPointer(headA, headB)).toBe(expected);
  });
});
