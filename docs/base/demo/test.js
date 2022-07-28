// var fn = function(nums) {
//   let res = [];
//   let n = nums.length;
//   let backtrack = function(nums, stack, out) {
//     //basecase
//     if (out.length === n) {
//       res.push(out.join(' '));
//       return;
//     }
//     //选择1，可以入栈
//     if (nums.length) {
//       stack.push(nums.shift());
//       backtrack(nums, stack, out);
//       nums.unshift(stack.pop());
//     }
//     //选择2，可以出栈
//     if (stack.length) {
//       out.push(stack.pop());
//       backtrack(nums, stack, out);
//       stack.push(out.pop());
//     }
//   };
//   backtrack(nums, [], []);
//   return res.sort();
// };
// //readline();
// let nums = [1, 2, 3];
// fn(nums).forEach((arr) => console.log(arr));

var permute = function(nums) {
  const res = [],
    path = [];
  backtracking(nums, nums.length, []);
  return res;

  function backtracking(n, k, used) {
    if (path.length === k) {
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) continue;
      path.push(n[i]);
      used[i] = true; // 同支
      backtracking(n, k, used);
      path.pop();
      used[i] = false;
    }
  }
};
console.log(permute([1, 2, 3]));
