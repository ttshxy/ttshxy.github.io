# 剑指 Offer 06. 从尾到头打印链表
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

> 只需返回值，可以考虑栈的特性

示例 1：

```
输入：head = [1,3,2]
输出：[2,3,1]
```

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reversePrint(head: ListNode | null): number[] {
    const stack:number[] = [];//模拟栈
    let res = [];
    while(head){
        stack.push(head.val);
        head = head.next;
    }
    while(stack.length){
        res.push(stack.pop());
    }
    return res;
};
```

