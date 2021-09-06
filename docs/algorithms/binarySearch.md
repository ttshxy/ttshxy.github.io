### 二分查找
```js
const binarySearch = (nums, value) => {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let index = Math.floor((left + right) / 2);
    if (nums[index] === value) {
      return index;
    } else if (value < nums[index]) {
      right = index - 1;
    } else if (value > nums[index]) {
      left = index + 1;
    }
  }
  return -1;
};
```