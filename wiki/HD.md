**antd-mobile 0.8-1.x 需要内置高清方案脚本，2.0 以后不需要。**

在 retina 等高分屏上，设备的物理像素比逻辑像素高很多，体现在 css 上就是 `物理像素 / 逻辑像素 == window.devicePixelRatio`。高清方案的基本原理，就是缩放页面 viewport 宽度，使用更细腻的物理像素，来达到页面高清显示的效果(比如: 细边框 / 图片更逼真)

> ref: [viewport](https://github.com/ant-design/ant-design-mobile/wiki/viewport)

## Setting

### 1. viewport
用 [antm-viewport.min.js](https://gw.alipayobjects.com/os/rmsportal/uDTmsEBmTUVrpmCBozbm.js) 脚本设置 html 的 viewport (**不要再写 html meta 标签去设置 viewport**)。内联写到所有 css 引用之前, 否则部分安卓机有问题。代码示例：

```html
<!DOCTYPE html>
<head>
 <meta charset="utf-8" />
 <script>/* antm-viewport.min.js */ ... </script>
</head>
<body></body>
</html>
```
> 未压缩源码：[@link](https://gw.alipayobjects.com/os/rmsportal/dVgyohpfmDMFFeDasFns.js), es6 语法，仅供阅读，请勿引用。

### 2. rem

用户业务样式代码以 px 为单位，并且以 iPhone6 屏幕 “物理像素” 宽度 750 为基准 (即普通 “逻辑像素” 值的 2 倍大小)，
使用 postcss-pxtorem 把 px 转成 rem 单位，转换基准为`1rem=100px` (使用 rem 实现不同设备等比缩放效果)。

* 对于使用 webpack 的项目，在 `webpack.config.js` 里新增 `pxtorem` 配置:

```js
  // npm install postcss-pxtorem@^3.3.1 --save-dev
  const pxtorem = require('postcss-pxtorem');
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));
```

## Complete

- 设置完毕后，在页面上 `console.log(document.documentElement.clientWidth)` 查看 iPhone6 是否为 750
- 在一些特殊的场景下，例如需要渲染 echart 图表，只能用 px 作为单位。获取DPR的[方法](https://gw.alipayobjects.com/os/rmsportal/YhqBfoGeVnucWuNdoOMa.js)，如果 initial-scale 不等于 1，认为该设备执行了高清渲染。

## Upgrade

**新项目请忽略**

在已有的未做类似高清方案的项目 less 文件中对 px 单位做 2 倍处理，参考这个 [gulp 脚本](https://gw.alipayobjects.com/os/rmsportal/MbHgVCVQYRrebbvmdhDb.js)

