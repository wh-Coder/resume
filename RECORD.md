#1. 下载vue-cli脚手架

```$ vue init webpack resume```

#2. 进入脚手架目录

```$ cd resume```

#3. 下载脚手架依赖包

```$ npm install```

#4. 使用stylus预编译，下载相关依赖包

```$ npm install -D stylus stylus-loader```

#5. 引入vux构建UI

```$ npm install -S vux```

```$ npm install -D less less-loader vux-loader```

#6. 为vux配置vux-loader

进入build/webpack.base.conf.js

```
var vuxLoader = require('vux-loader')

...

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})
```

