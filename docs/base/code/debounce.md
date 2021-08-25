# 防抖

防抖顾名思义，防止抖动，短时间内大量触发同一事件，只会执行最后一次函数。

使用场景举例：

1. button按钮点击
2. 调整浏览器窗口大小，resize次数过于频繁。

代码如下：**防抖重在清零**`clearTimeout(timer)`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input type="text" id="input"></input>
  <button>button</button>
  <script type="text/javascript">
    window.onload = function () {
      let timer = null;
      let input = document.getElementById('input');
      const debounce = (fn, delay = 500) => {
        let timer = null;
        return function() {
          if(timer){
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            // ①不知道以后需要防抖的函数到底有多少个参数，用arguments来接受。
            // ②如何将arguments传回给需要防抖的函数。apply是一个恰到好处的应用。
            fn.apply(this, arguments);
            // 使用fn(...arguments)也可以
            //fn(...arguments);
            timer = null;
          }, delay);
        }
      }
      input.addEventListener('keyup',debounce(() => {
        console.log(input.value)
      }))
      let button = document.querySelector('button');
      button.onclick = debounce(() => {
        console.log('click')
      }, 500)
    }
  </script>
</body>
</html>
```

 

