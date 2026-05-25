import {
  findDuplicate,
  findDuplicateCycleDetection,
  findDuplicateSortingArray,
  findDuplicateUsingSet,
} from './0287-find-the-duplicate-number';

describe('LC 876 - Find duplicate number', () => {
  test('happy path', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });
  test('boundary case', () => {
    expect(findDuplicate([...Array.from({ length: 10 ** 5 }, (v, k) => k), 1000])).toBe(1000);
  });
  test('all same numbers', () => {
    expect(findDuplicate([3, 3, 3, 3])).toBe(3);
  });

  test('smallest possible value', () => {
    expect(findDuplicate([1, 1])).toBe(1);
  });
});

describe('LC 876 - Find duplicate number cycle detection', () => {
  test('happy path', () => {
    expect(findDuplicateCycleDetection([1, 3, 4, 2, 2])).toBe(2);
  });
  test('boundary case', () => {
    expect(
      findDuplicateCycleDetection([...Array.from({ length: 10 ** 5 }, (v, k) => k + 1), 1000]),
    ).toBe(1000);
  });
  test('all same numbers', () => {
    expect(findDuplicateCycleDetection([3, 3, 3, 3])).toBe(3);
  });

  test('smallest possible value', () => {
    expect(findDuplicateCycleDetection([1, 1])).toBe(1);
  });
});

describe('LC 876 - Find duplicate number sorting', () => {
  test('happy path', () => {
    expect(findDuplicateSortingArray([1, 3, 4, 2, 2])).toBe(2);
  });
  test('boundary case', () => {
    expect(findDuplicateSortingArray([...Array.from({ length: 10 ** 5 }, (v, k) => k), 1000])).toBe(
      1000,
    );
  });
  test('all same numbers', () => {
    expect(findDuplicateSortingArray([3, 3, 3, 3])).toBe(3);
  });

  test('smallest possible value', () => {
    expect(findDuplicateSortingArray([1, 1])).toBe(1);
  });
});

describe('LC 876 - Find duplicate findDuplicateUsingSet', () => {
  test('happy path', () => {
    expect(findDuplicateUsingSet([1, 3, 4, 2, 2])).toBe(2);
  });
  test('boundary case', () => {
    expect(findDuplicateUsingSet([...Array.from({ length: 10 ** 5 }, (v, k) => k), 1000])).toBe(
      1000,
    );
  });
  test('all same numbers', () => {
    expect(findDuplicateUsingSet([3, 3, 3, 3])).toBe(3);
  });

  test('smallest possible value', () => {
    expect(findDuplicateUsingSet([1, 1])).toBe(1);
  });
});
