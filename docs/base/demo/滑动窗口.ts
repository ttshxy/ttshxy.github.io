// target = 7, nums = [2,3,1,2,4,3]
// 2
function minSubArrayLen(target: number, nums: number[]): number {
  let res = Infinity;
  let slow = 0,
    fast = 0,
    sum = 0;
  let n = nums.length;
  while (fast < n) {
    sum += nums[fast];
    while (sum >= target) {
      res = Math.min(res, fast - slow + 1);
      sum -= nums[slow];
      slow++;
    }
    fast++;
  }
  return res;
}
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
