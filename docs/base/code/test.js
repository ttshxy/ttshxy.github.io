// console.log('1');

// setTimeout(function() {
//   console.log('2');
//   process.nextTick(function() {
//     console.log('3');
//   });
//   new Promise(function(resolve) {
//     console.log('4');
//     resolve();
//   }).then(function() {
//     console.log('5');
//   });
// });

// new Promise(function(resolve) {
//   console.log('7');
//   resolve();
// }).then(function() {
//   console.log('8');
// });
// process.nextTick(function() {
//   console.log('6');
// });
// setTimeout(function() {
//   console.log('9');
//   process.nextTick(function() {
//     console.log('10');
//   });
//   new Promise(function(resolve) {
//     console.log('11');
//     resolve();
//   }).then(function() {
//     console.log('12');
//   });
// });

// function create() {
//   const a = 100;
//   return function() {
//     console.log(a);
//   };
// }
// let fn = create();
// const a = 200;
// fn();

const a = 100;
// function fn() {
//   console.log(a);
// }

// function printFn(fn) {
//   let a = 200;
//   fn();
// }
// printFn(fn);

// ES5原型继承
// function Father() {
//   this.name = 'father';
// }
// Father.prototype.getName = function() {
//   return this.name;
// };
// function Child() {}
// Child.prototype = new Father();
// let child = new Child();
// console.log(child.getName());

/**
 *
 * @param {*} obj
 */
function deepClone(obj = {}) {
  if (typeof obj != 'object' || obj == null) {
    return obj;
  }
  let res;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Array) {
    res = [];
  } else {
    res = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key]);
    }
  }
  return res;
}

const testObj = {
  name: 'hxy',
  obj: {
    name: 'yyw',
    person: {
      name: 's',
      c: 'kk',
    },
  },
  arr: [1, 2, 3],
};

// let res = deepClone(testObj);
// console.log(res, 'res');

function Fun() {}
Fun.prototype.value = 'value';
const obj = new Fun();
obj.name = 'hxy';
for (let key in obj) {
  console.log(key);
}
