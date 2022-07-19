// const unique = function(arr) {
//   const res = new Set(arr);
//   return [...res];
// };

const unique = function(arr) {
  let res = [];
  arr.forEach((item) => {
    if (res.indexOf(item) == -1) {
      res.push(item);
    }
  });
  return res;
};

console.log(unique([1, 2, 2, 3, 3, 4, 4, 5]));
