const myInstanceOf = (child, father) => {
  let childProto = child.__proto__;
  const fatherProto = father.prototype;
  while (childProto) {
    if (childProto === fatherProto) {
      return true;
    }
    childProto = childProto.__proto__;
  }
  return false;
};
function Person() {}
const person = new Person();
console.log(person instanceof Person); // true
console.log(myInstanceOf(person, Person)); // true
console.log(myInstanceOf(person, Object)); // true
