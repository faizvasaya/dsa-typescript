import {
  removeDuplicates,
  removeDuplicatesWatchingNextValue,
  removeDuplicatesWithExtraSpace,
} from './0026-remove-duplicates';

describe('LC 26 - Remove Duplicates - watching slow method', () => {
  it('happy case short array - truth', () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it('happy case long array - truth', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  it('happy case empty array - truth', () => {
    const nums: number[] = [];
    const k = removeDuplicates(nums);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  it('happy case one element array - truth', () => {
    const nums: number[] = [1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('happy case one element array - truth', () => {
    const nums: number[] = [1, 1, 1, 1, 1, 1, 1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('happy case one element array - truth', () => {
    const nums: number[] = [1, 2, 3, 4, 5, 6];
    const k = removeDuplicates(nums);
    expect(k).toBe(6);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('happy case negative element array - truth', () => {
    const nums: number[] = [-1, -1, 1, 2, -2, -4, 5, 6];
    const k = removeDuplicates(nums);
    expect(k).toBe(7);
    expect(nums.slice(0, k)).toEqual([-1, 1, 2, -2, -4, 5, 6]);
  });
});

describe('LC 26 - Remove Duplicates - WithExtraSpace', () => {
  it('happy case short array - truth', () => {
    const nums = [1, 1, 2];
    const k = removeDuplicatesWithExtraSpace(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it('happy case long array - truth', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicatesWithExtraSpace(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  it('happy case empty array - truth', () => {
    const nums: number[] = [];
    const k = removeDuplicatesWithExtraSpace(nums);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  it('happy case one element array - truth', () => {
    const nums: number[] = [1];
    const k = removeDuplicatesWithExtraSpace(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('happy case one element array - truth', () => {
    const nums: number[] = [1, 1, 1, 1, 1, 1, 1];
    const k = removeDuplicatesWithExtraSpace(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('happy case one element array - truth', () => {
    const nums: number[] = [1, 2, 3, 4, 5, 6];
    const k = removeDuplicatesWithExtraSpace(nums);
    expect(k).toBe(6);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('happy case negative element array - truth', () => {
    const nums: number[] = [-1, -1, 1, 2, -2, -4, 5, 6];
    const k = removeDuplicatesWithExtraSpace(nums);
    expect(k).toBe(7);
    expect(nums.slice(0, k)).toEqual([-1, 1, 2, -2, -4, 5, 6]);
  });
});

describe('LC 26 - Remove Duplicates - WatchingNextValue', () => {
  it('happy case short array - truth', () => {
    const nums = [1, 1, 2];
    const k = removeDuplicatesWatchingNextValue(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  it('happy case long array - truth', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicatesWatchingNextValue(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  it('happy case empty array - truth', () => {
    const nums: number[] = [];
    const k = removeDuplicatesWatchingNextValue(nums);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  it('happy case one element array - truth', () => {
    const nums: number[] = [1];
    const k = removeDuplicatesWatchingNextValue(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('happy case one element array - truth', () => {
    const nums: number[] = [1, 1, 1, 1, 1, 1, 1];
    const k = removeDuplicatesWatchingNextValue(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  it('happy case one element array - truth', () => {
    const nums: number[] = [1, 2, 3, 4, 5, 6];
    const k = removeDuplicatesWatchingNextValue(nums);
    expect(k).toBe(6);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('happy case negative element array - truth', () => {
    const nums: number[] = [-1, -1, 1, 2, -2, -4, 5, 6];
    const k = removeDuplicatesWatchingNextValue(nums);
    expect(k).toBe(7);
    expect(nums.slice(0, k)).toEqual([-1, 1, 2, -2, -4, 5, 6]);
  });
});
