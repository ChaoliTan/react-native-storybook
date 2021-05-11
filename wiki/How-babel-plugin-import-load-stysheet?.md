https://github.com/ant-design/babel-plugin-import/issues/58#issuecomment-304955220

First, Please see api doc at https://github.com/ant-design/babel-plugin-import#style

I will try to give a simple explanation:

1. Since antd have below file structure https://unpkg.com/antd@2.10.2/lib/affix/style/

```bash
node_modules/antd/lib/button/style                                                                                               jiangkai@jiangkaideMacBook-Pro
├──  css.js
├──  index.css
├──  index.d.ts
├──  index.js
├──  index.less
└──  mixin.less
```
2. If you set `style: true`, babel-plugin-import will load style by `require('antd/lib/message/style')`, which means this file https://unpkg.com/antd@2.10.2/lib/button/style/index.js, as you can see, it's **css file**.

3. If you set `style:  'css'`, babel-plugin-import will load style by `require('antd/lib/button/style/css')`, which means https://unpkg.com/antd@2.10.2/lib/button/style/index.js, it's **less file**. 

4. Last tip, you need configure webpack loader(`css-loader/less-loader`) to handle `css/less` file by yourself.


Going to close this issue, If anyone still got problems, please provide a reproducible demo.