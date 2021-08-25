# 节流
短时间内大量触发同一事件，定时运行同一事件，应用场景如下：

1. scroll事件，定时记录位置
2. input输入框搜索，定时进行搜索

代码如下

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #drag {
        width: 300px;
        height: 300px;
        background: green;
      }
    </style>
  </head>
  <body>
    <div id="drag" draggable="true">可拖拽</div>
    <script>
      window.onload = () => {
        const throttle = (fn, delay = 500) => {
          let timer = null;
          return function () {
            if (timer) {
              return;
            }
            timer = setTimeout(() => {
              fn.apply(this, arguments);
              timer = null;
            }, delay);
          };
        };
        let drag = document.querySelector('#drag');
        drag.addEventListener(
          'drag',
          throttle((e) => {
            console.log(e.offsetX, e.offsetY);
          })
        );
      };
    </script>
  </body>
</html>
```