/**
 * 
 * @param arr 
 */
const flat = (arr) => {
  // 递归出口，判断是否包含子数组
  let deepArr = arr.some(item => Array.isArray(item));
  if(!deepArr){
    return arr;
  }
  // 也可以用apply对数组参数进行解构
  //return flat([].concat.apply([],arr));
  // 每一次递归拍平一次
  return flat([].concat(...arr));
}
console.log(flat([1,3,4,[1,2,[6,7,[1,3,[7,8]]]]]))