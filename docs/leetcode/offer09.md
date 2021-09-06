剑指 Offer 09. 用两个栈实现队列


用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 `appendTail` 和 `deleteHead` ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，`deleteHead` 操作返回 -1 )

[题解看这里](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solution/mian-shi-ti-09-yong-liang-ge-zhan-shi-xian-dui-l-2/)

**示例 1：**

```
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
```

**示例 2：**

```
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```

```js
class CQueue {
    stackA: number[];
    stackB: number[];
    constructor() {
        this.stackA = [];
        this.stackB = [];
    }

    appendTail(value: number): void {
        this.stackA.push(value);
    }

    deleteHead(): number {
        if(this.stackB.length){
            return this.stackB.pop();
        }else if(this.stackA.length){
            while(this.stackA.length){
                this.stackB.push(this.stackA.pop());
            }
            return this.stackB.pop();
        }else {
            return -1;
        }
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```

