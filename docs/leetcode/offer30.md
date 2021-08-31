### 剑指 Offer 30. 包含min函数的栈

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例:
```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```
本题主要难点在复杂度为O(1)

因此采用了双栈

[题解看这里](https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/solution/mian-shi-ti-30-bao-han-minhan-shu-de-zhan-fu-zhu-z/)

```js
class MinStack {
    stack: number[];
    minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x: number): void {
        this.stack.push(x);
        if(!this.minStack.length){
            this.minStack.push(x);
        }else if(x <= this.minStack[this.minStack.length - 1]){
            // <=防止pop的时候丢失数据
            this.minStack.push(x);
        }
    }   

    pop(): void {
        let pop = this.stack.pop();
        if(pop == this.minStack[this.minStack.length - 1]){
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    min(): number {
        return this.minStack[this.minStack.length - 1]
    }
  
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```

