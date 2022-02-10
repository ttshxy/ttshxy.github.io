# js基础

[什么是防抖，应用场景有哪些⭐️](debounce.md)

[什么是节流，应用场景有哪些⭐️](throttle.md)

[为何 0.1+0.2 不等于 0.3，应如何做相等比较](01.md)

# js生成二维数组

方法一:

`new Array(n).fill(new Array(n).fill(1));`

当一个对象被传递给 **`fill`**方法的时候, 填充数组的是这个对象的引用

所以一维中的每一个数组,都指向同一个引用

如果一维中的任何一个元素执行push,哪个每一个二维中都会多一个元素

 

所以为了避免这种情况可以

`new Array(n).fill().map(()=>{return new Array(n).fill(false)})`

 

方法二:

`Array.from(new Array(3),()=>{return new Array(3).fill(false)})`

```
fill 方法故意被设计成通用方法, 该方法不要求 this 是数组对象。

fill 方法是个可变方法, 它会改变调用它的 this 对象本身, 然后返回它, 而并不是返回一个副本。

当一个对象被传递给 fill方法的时候, 填充数组的是这个对象的引用。
```

来源：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
