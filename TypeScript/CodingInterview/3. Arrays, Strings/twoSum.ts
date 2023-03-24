// https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const match = map.get(target - nums[i]);
    if (match !== undefined) {
      return [match, i];
    }
    map.set(nums[i], i);
  }

  return [];
}
