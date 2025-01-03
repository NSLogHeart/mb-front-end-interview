# CSS

## CSS 有哪些选择器？权重是如何计算的？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：**
  + 基本选择器：ID 选择器 > 类选择器/伪类选择器/属性选择器 > 元素选择器/伪元素选择器 > 通配符选择器
  + 关系选择器：后代选择器、父子选择器、兄弟选择器
- **1：** ID 选择器是百分位，类选择器/伪类选择器/属性选择器是十分位，元素选择器/伪元素选择器是个位，计算选择器组合后的数字就可以作为权重大小，，通配符选择器与关系选择器都是零位，没有权重。

## margin 和 padding 的使用场景

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  + 需要在border外侧添加空白，且空白处不需要背景（色）时，使用 margin；
  + 需要在border内测添加空白，且空白处需要背景（色）时，使用 padding。

## 如何清除浮动?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：**
  .clearfix{
    clear:both;
    content:'';
    display:block;
    width: 0;
    height: 0;
    visibility:hidden;
  }

## 使元素消失的方法?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  + visibility:hidden;
  + display:none;
  + opacity:0;
  + z-index:-1;

## 理解BFC吗？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  BFC 即 Block Formatting Contexts (块级格式化上下文)。  
  具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。  
  通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

## 解释 CSS 中的 flex 布局，并列举一些常用的 flex 属性及其作用

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  flex 布局（弹性布局）可以更方便地实现各种复杂的布局。常用属性包括：
display: flex：将容器设置为弹性容器。
flex-direction：指定主轴方向，如 row（水平，从左到右）、row-reverse（水平，从右到左）、column（垂直，从上到下）、column-reverse（垂直，从下到上）。
justify-content：在主轴上对齐项目，如 flex-start（起始位置对齐）、flex-end（末尾位置对齐）、center（居中对齐）、space-between（两端对齐，项目之间均匀分布）、space-around（每个项目两侧均匀分布）。
align-items：在交叉轴上对齐项目，类似 justify-content 有 flex-start、flex-end、center、baseline（项目第一行文字基线对齐）、stretch（默认值，拉伸项目以适应容器）等取值。

## 如何减少页面回流和重绘？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：** 避免频繁地修改布局相关的属性: 尤其是在循环或高频事件中。例如，直接通过JavaScript频繁修改元素的 width、height 会触发回流
- **1：** 批量更新DOM: 使用 requestAnimationFrame 或 setTimeout 将多个操作合并成一次回流
- **1：** 避免修改宽高和布局计算的父元素：获取元素的 offsetHeight 后立即改变元素的尺寸属性，这会导致浏览器先进行回流，再去计算样式
- **1：** 使用transform和opacity代替布局属性 例如：获取元素的 offsetHeight 后立即改变元素的尺寸属性，这会导致浏览器先进行回流，再去计算样式。
- **1：** 避免频繁地修改布局相关的属性 :修改父元素的尺寸会引起子元素的回流，尽量避免直接操作父元素的尺寸，尤其是在大型布局中

## 如何使用 calc() 函数？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** calc() 允许你在 CSS 中执行简单的数学运算。例如：

```css
  width: calc(100% - 20px);
```

## CSS 中的三种常用布局方式？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** float 布局：通过浮动和清除浮动来实现布局
- **1：** flex 布局：更加现代和灵活，适用于一维布局
- **1：** grid 布局：二维布局，支持更复杂的布局

## 什么是 viewport？如何在页面中设置视口大小？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** 视口是用户可以看到的网页区域。设置视口的常见做法是在 `<head>` 中添加如下标签

```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 解释 transform、translate、scale、rotate 等属性的使用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** transform 用于在 2D 或 3D 空间中对元素进行旋转、缩放、平移等操作。
- **1：** translate(x, y)：平移元素
- **1：** rotate(deg)：旋转元素。
- **1：** scale(x, y)：缩放元素。

## 如何处理浏览器兼容性问题？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 使用 CSS 前缀来兼容不同浏览器：例如，-webkit-，-moz-，-ms- 等。
- **1：** 使用 Autoprefixer 等工具自动添加前缀。
- **1：** 测试多个浏览器，确保关键功能正常
- **1：** 使用 CSS Reset 或 Normalize.css 来减少浏览器间的样式差异。

## box-sizing: border-box 和 content-box 的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** content-box（默认值）：width 和 height 只包括内容区域，不包括 padding 和 border。
- **1：** border-box：width 和 height 包括内容区域、padding 和 border。

## CSS3有哪些重要的新特性？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：** 选择器和伪类：
  + 属性选择器增强
  + 新增伪类：:nth-child()、:first-of-type等
  + 伪元素使用双冒号::before

- **1：** 视觉效果：
  + 圆角(border-radius)
  + 阴影(text-shadow/box-shadow)
  + 渐变(linear-gradient/radial-gradient)
  + RGBA和HSLA颜色
  + 不透明度(opacity)

- **1：** 转换和动画：
  + 2D/3D转换(transform)
  + 过渡效果(transition)
  + 动画效果(animation/@keyframes)

- **1：** 布局能力：
  + 弹性布局(display: flex)
  + 网格布局(display: grid)
  + 多列布局(column-count)
  + 盒模型调整(box-sizing)

- **1：** 响应式设计：
  + 媒体查询(@media)
  + 视口单位(vh/vw)
  + 图像适配(object-fit)
  + 自定义属性(变量)
