## TypeScript
如何隐藏编译后的同名 `.jsx`, `.js` 文件？ https://github.com/ant-design/ant-design-mobile/issues/1062

## [Web][Top] Preact 问题汇总
- https://github.com/ant-design/ant-design-mobile/issues/1839

## [Web] Android webview ImagePicker 不能选择图片问题

使用 ImagePicker 不能选择图片（Android），可能需要 naitve 端来解决，具体参看：http://www.cnblogs.com/nmdzwps/p/5841509.html

## [Web] touchable and ghost clicks

为了能灵活和精细地控制各个组件的点击反馈效果，我们参考 react-native 的 responder 系统状态机实现、抽出了单独的点击事件控制库 [touchable](https://github.com/react-component/touchable)，此实现类似 RN 主要提供了`onPress`/`onPressIn`/`onPressOut`/`onLongPress`等常见的接口和实现，此外主要增加了`activeStyle`/`activeClassName`来处理组件的点击反馈状态变化。但注意 touchable 并没有实现类似 [fastclick](https://github.com/ftlabs/fastclick) 的功能。

移动端上事件系统比较复杂，特别是关于“点击事件”的做法，可选的方案也比较多、简要介绍如下：

- 可以全部用 touch 事件，有点理想化的方案、有如下问题：
	- 比如 touchstart 事件触发太快，会影响部分手势库的行为。
	- 在一些滚动容器里，需要阻止 touch 事件的默认行为，从而影响其他正常事件的触发。
	- touchend 事件用的场合比较广，但也可能引起潜在的一些问题。
- 可以全部用 click 事件，也有一些问题、但好处更多些：
	- 老的浏览器会有 300ms 左右的点击延迟问题，但新的 iOS/Android 系统浏览器在设置禁止页面缩放时，已经不再有延迟问题。
	- 组件可以在 mobile/pc 环境无缝兼容。

所以，我们的组件都默认使用了`click`事件，并且使用 [fastclick](https://github.com/ftlabs/fastclick) 来兼容处理部分浏览器的 300ms 延迟问题，以及在 touch 事件和 click 事件混用时会引起的点击穿透(ghost clicks)问题。

> 关于点击穿透问题，目前认为 fastclick 是最好的解决方案（建议仔细阅读源码或相关文章分析）

## [Web-iOS] fixed bug
现象: Modal 中使用 input, 当 input focus 时 Modal 位置错位。  
原因: iOS position fixed元素在键盘唤起时，fixed 将会失效，这时如果屏幕高度大于一屏，fixed 元素也会跟着主体内容滚动。

#### 解决方法
把会产生屏幕滚动的内容单独放到一个`postion`为`absolute`的元素 A 内, 使之在固定的容器 A 元素内滚动。fixed 元素放到容器 A 之外。示例代码：
```html
<div className="A">
 // 可能发生滚动的内容
</div>
<!-- 注意：fixed 元素如果放在滚动容器里，会出现在滚动时消失，滚动结束又出现的问题。
 另外，fixed 元素如果在页面底部，页面拖到底再向上拖动时，fixed 元素会被空白遮挡 
 (详细 https://github.com/ant-design/ant-design-mobile/issues/307) ，
 解决方法是将 fixed 改变为`position: absolute` -->
<div className="fixed-ele"></div>
```
```css
.A {
   /* A绝对定位，进行内部滚动 */
   position: absolute;
   top: 0;
   bottom: 0;
   width: 100%;
   /* 使之可以滚动 */
   overflow-y: scroll;
   /* 为了页面滚动流畅 */
   -webkit-overflow-scrolling: touch;
}
```

## [Web] Icon显示不正常/字体加载失败

现象: 各种Icon显示不正常，console里有字体请求的报错。   
原因: 某些域名请求被Bock: [ref](https://github.com/ant-design/ant-design/issues/1070)

#### 解决方法
本地部署iconfont文件, 参考： https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont

## [Web] css transform with fixed element

现象：当元素设置 “position: fixed” 时，其父元素有 css transform 属性时，fixed 失效   
原因：这是浏览器正常渲染机制，[详细见此](http://stackoverflow.com/questions/35596475/position-fixed-not-woking-when-parent-has-the-transform-css-property)

影响组件 Tabs , 解决办法：[参考此处](https://github.com/ant-design/ant-design-mobile/issues/677)，
animate 设置为 false 或动画结束后把 transform 设回 none .

## [Web] flex-wrap 在Android 2.1 - Android 4.3兼容性问题

Android 2.1 - Android 4.3 不支持 flex-wrap: wrap 换行，也不支持 display: -webkit-box 的 -webkit-box-lines: multiple; 换行，所以需要自己实现这个效果。（[#894](https://github.com/ant-design/ant-design-mobile/issues/894)）

## [Web] 为什么我的字体那么大？！

因为您没有按照文档设置高清方案：https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE