console.log('start');
setImmediate(() => {
  console.log('immediate');
});
setTimeout(() => {
  console.log('setTimeout');
});
Promise.resolve().then(() => {
  console.log('promise then');
});
process.nextTick(() => {
  console.log('nextTick');
});
console.log('end');
