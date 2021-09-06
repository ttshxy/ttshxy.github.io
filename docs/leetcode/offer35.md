**剑指 Offer 35. 复杂链表的复制**
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

[题解在这里](https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/solution/jian-zhi-offer-35-fu-za-lian-biao-de-fu-zhi-ha-xi-/)

示例 1：

![img](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/e1.png)

```
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

示例 2：

![img](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/e2.png)

```
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
```

示例 3：

![img](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/e3.png)

```
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
```

示例 4：

```
输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。
```

```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map();
    let cur = head;
    while(cur){
        map.set(cur,new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    while(cur){
        map.get(cur).next = map.get(cur.next) || null;
        map.get(cur).random = map.get(cur.random)  || null;
        cur = cur.next;
    }
    return map.get(head)
};
```

