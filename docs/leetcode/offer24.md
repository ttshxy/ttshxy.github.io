剑指 Offer 24. 反转链表
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
示例:
```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

定义双指针解决，思路可以参考 [这里](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/shi-pin-tu-jie-jian-zhi-offer-24-fan-zhu-oym7/)

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

function reverseList(head: ListNode | null): ListNode | null {
    let cur = head ,pre = null;
    while(cur){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};
```

