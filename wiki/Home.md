Welcome to the ant-design-mobile wiki! Please check our [homepage](https://mobile.ant.design) and [repo README](https://github.com/ant-design/ant-design-mobile).

<p align="center">
  <a href="https://mobile.ant.design">
    <img width="200" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png">
  </a>
</p>

### Development

- **发布前，需要阅读 [发布轮值规则](https://github.com/ant-design/ant-design-mobile/wiki/%E5%8F%91%E5%B8%83%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99)**。

- 注意： antd-mobile 依赖的 rc-xx / rmc-xx 下层库的升级、**一定要“严格”遵守 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范**，特别地、如果有 break change ，就需要升级 “主版本号”，另外 changelog 文档需要写清楚。break change 要慎重、需要多人讨论和 review。

- 注意：antd-mobile 兼容 [react](https://reactjs.org/) 和 [preact](https://preactjs.com/) ，网站中 [移动版本 (url中含 kitchen-sink)](https://mobile.ant.design/kitchen-sink/) 是基于 preact 运行、[桌面版本 (url中不含 kitchen-sink)](https://mobile.ant.design/) 是基于 react 运行。所以在 开发过程中 通过 **暂时** 修改 `package.json` 文件里 `scripts.start` 值 `...cross-env DEMO_ENV=preact bisheng...` 中的 preact 为 react ，即可让 移动版本demo 也在 react 中运行（执行命令`npm start`即可）。开发人员需要执行此流程来验证 **组件代码的改动在 react 和 preact 中都表现正确**。

- 注意：antd-mobile 及 rc-xx / rmc-xx 下层库全部使用 typescript 开发，如果在 `npm run compile` 时报出很多 “莫名其妙/无法排查” 的错误，那很可能是 **项目平行(或深层)目录有同样的 node_modules/xx 依赖** 造成的问题。比如你在库 `~/work/m-picker` 下 `npm i` 后就会有 `~/work/m-picker/node_modules/@types/react` 目录，但 **如果存在** `~/work/m-picker/node_modules/@types/xxx/node_modules/@types/react` (在内层) 或 **不小心** 有 `~/work/node_modules/@types/react` (在平行外层) 这样的内容，就会引起 node 依赖的查找错误。

### Owners

* 圆非(@ziluo) 无延(@doxiaodong) 风末(@skidxjq)
    * Picker DatePicker Tabs TabBar SearchBar Stepper / ImagePicker Menu Pagination Slider / Flex Tag ActivityIndicator SegmentedControl
* 乘五(@kgtong) 祎远(@micooz)
    * InputItem TextareaItem ListView Button PullToRefresh List / Icon Checkbox Radio Switch / Accordion Drawer Progress 
* 玄皇(@likezero) 索丘(@zengyue) 
    * Carousel Calendar Modal Toast Popover Grid /  Steps NoticeBar SwipeAction ActionSheet / Badge NavBar Card Result 

注：名字从左到右，第一责任(owner)、第二责任(协助修改/review)、第三责任(review)

> Old owners are: @warmhug @paranoidjk @zhang740 @silentcloud