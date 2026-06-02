import { twoSum, twoSumWithExtraSpace } from './0167-two-sum-sorted';

describe('LC 167 - Two sum sorted - with extra space', () => {
  it('happy case - unique elements', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [1, 2];
    expect(twoSumWithExtraSpace(nums, target)).toEqual(expected);
  });

  it('happy case - duplicate numbers', () => {
    const nums = [0, 0, 3, 3];
    const target = 0;
    const expected = [1, 2];
    expect(twoSumWithExtraSpace(nums, target)).toEqual(expected);
  });

  it('happy case - negative numbers and negative target', () => {
    const nums = [-1, 0, 5, 8, 9];
    const target = -1;
    const expected = [1, 2];
    expect(twoSumWithExtraSpace(nums, target)).toEqual(expected);
  });

  it('happy case - middle match', () => {
    const nums = [2, 8, 9, 12, 15];
    const target = 21;
    const expected = [3, 4];
    expect(twoSumWithExtraSpace(nums, target)).toEqual(expected);
  });

  it('happy case - no match', () => {
    const nums = [2, 8, 9, 12, 15];
    const target = 210;
    const expected = [-1, -1];
    expect(twoSumWithExtraSpace(nums, target)).toEqual(expected);
  });

  it('happy case - empty array', () => {
    const nums = [] as number[];
    const target = 210;
    const expected = [-1, -1];
    expect(twoSumWithExtraSpace(nums, target)).toEqual(expected);
  });

  it('happy case - one element array', () => {
    const nums = [1] as number[];
    const target = 1;
    const expected = [-1, -1];
    expect(twoSumWithExtraSpace(nums, target)).toEqual(expected);
  });

  it('happy case - same elements', () => {
    const nums = [9, 9, 9, 9, 9, 9] as number[];
    const target = 18;
    const expected = [1, 2];
    expect(twoSumWithExtraSpace(nums, target)).toEqual(expected);
  });

  it('happy case - boundary elements', () => {
    const SIZE = 3 * 10 ** 4;
    const nums = Array.from({ length: SIZE }, (v, k) => k);
    console.log(nums);
    const target = 99;
    const expected = [50, 51];
    expect(twoSumWithExtraSpace(nums, target)).toEqual(expected);
  });
});

describe('LC 167 - Two sum sorted - without extra space', () => {
  it('happy case - unique elements', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [1, 2];
    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('happy case - duplicate numbers', () => {
    const nums = [0, 0, 3, 3];
    const target = 0;
    const expected = [1, 2];
    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('happy case - negative numbers and negative target', () => {
    const nums = [-1, 0, 5, 8, 9];
    const target = -1;
    const expected = [1, 2];
    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('happy case - middle match', () => {
    const nums = [2, 8, 9, 12, 15];
    const target = 21;
    const expected = [3, 4];
    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('happy case - no match', () => {
    const nums = [2, 8, 9, 12, 15];
    const target = 210;
    const expected = [-1, -1];
    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('happy case - empty array', () => {
    const nums = [] as number[];
    const target = 210;
    const expected = [-1, -1];
    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('happy case - one element array', () => {
    const nums = [1] as number[];
    const target = 1;
    const expected = [-1, -1];
    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('happy case - same elements', () => {
    const nums = [9, 9, 9, 9, 9, 9] as number[];
    const target = 18;
    const expected = [1, 6];
    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('happy case - boundary elements', () => {
    const SIZE = 3 * 10 ** 4;
    const nums = Array.from({ length: SIZE }, (v, k) => k);
    console.log(nums);
    const target = 99;
    const expected = [1, 100];
    expect(twoSum(nums, target)).toEqual(expected);
  });
});
