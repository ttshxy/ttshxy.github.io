本文介绍css animation相关内容

**一、浏览器前缀**

目前主流的浏览器内核有四个

- Webkit内核
  webkit也称为谷歌内核，目前chrome/Safari在使用，前缀为-webkit-
- Gecko内核
  前缀为-moz-，目前火狐浏览器在使用
- Trident内核
  ie内核，前缀为-ms-
- Presto内核
  前缀为-o-，目前只有opera使用。

**二、文字阴影**

```css
text-shadow: h-shadow v-shadow blur color;
```

| 值         | 描述                                                         | 测试                                                         |
| :--------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| *h-shadow* | 必需。水平阴影的位置。允许负值。正值向右，负值向左           | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_text-shadow) |
| *v-shadow* | 必需。垂直阴影的位置。允许负值。正值向下，负值向上           | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_text-shadow) |
| *blur*     | 可选。模糊的距离。（模糊度）                                 | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_text-shadow&p=11) |
| *color*    | 可选。阴影的颜色。参阅 [CSS 颜色值](https://www.w3school.com.cn/cssref/css_colors_legal.asp)。 | [测试](https://www.w3school.com.cn/tiy/c.asp?f=css_text-shadow&p=13) |

```css
text-shadow: 1px 2px 3px red;
```

![image-20210908170532332](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20210908170532332.png)

都是正值向右下

```css
text-shadow: -3px 2px 3px red;
```

![image-20210908170735388](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20210908170735388.png)

阴影向左下

**三、box-shadow**

box-shadow: *h-shadow v-shadow blur spread color* inset;

**注意：**boxShadow 属性把一个或多个下拉阴影添加到框上。该属性是一个用逗号分隔阴影的列表，每个阴影由 2-4 个长度值、一个可选的颜色值和一个可选的 inset 关键字来规定。省略长度的值是 0。

| 值         | 说明                                                         |
| :--------- | :----------------------------------------------------------- |
| *h-shadow* | 必需的。水平阴影的位置。允许负值                             |
| *v-shadow* | 必需的。垂直阴影的位置。允许负值                             |
| *blur*     | 可选。模糊距离（模糊度）                                     |
| *spread*   | 可选。阴影的大小                                             |
| *color*    | 可选。阴影的颜色。在[CSS颜色值](https://www.runoob.com/cssref/css_colors_legal.aspx)寻找颜色值的完整列表 |
| inset      | 可选。从外层的阴影（开始时）改变阴影内侧阴影                 |

```css
{
	width:300px;
	height:100px;
	background-color:yellow;
	box-shadow: 10px 10px 5px #888888;
}
```

![image-20210908172023972](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20210908172023972.png)

前面三个属性与text-shadow一样，多了一个阴影大小

```css
box-shadow: 0px 0px 3px 10px #888888;
```

![image-20210908172209119](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20210908172209119.png)

```css
box-shadow: 0px 6px 21px 0px rgba(27, 87, 158, 0.43);
```

可以用box-shadow做选中效果

![image-20210908172951359](https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20210908172951359.png)

**四、线性渐变**

```
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

| 值                             | 描述                               |
| :----------------------------- | :--------------------------------- |
| *direction*                    | 用角度值指定渐变的方向（或角度）。 |
| *color-stop1, color-stop2,...* | 用于指定渐变的起止颜色。           |

