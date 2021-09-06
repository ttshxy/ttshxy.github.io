剑指 Offer 50. 第一个只出现一次的字符
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:

`s = "abaccdeff"
返回 "b"`

`s = "" 
返回 " "`

```js
function firstUniqChar(s: string): string {
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], true);
        }else{
            map.set(s[i], false);
        }
    }
    for(let [key, value] of map){
        if(value === false){
            return key;
        }
    }
    return ' ';
};
```
 