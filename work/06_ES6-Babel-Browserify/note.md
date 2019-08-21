1. 定义package.json文件

2. 安装babel-cli，babel-preset-es2015和browserify
* npm install babel-cli browserify -g
* npm install babel-preset-es2015 --save-dev
* preset 预设（将es6转换为es5的所有插件打包)

3. 定义 .babelrc文件

4. 编码

5. 编译
* 使用Babel将ES6便以为ES5代码（但包含CommonJS语法）：babel js/src -d js/lib
* 使用Browserify编译js：browserify js/lib/main.js -o js/dist/main.js

6. 页面中引入测试
<script type="text/javascript" src="js/dist/main.js"></script>

7. 引入第三方模块（jQuery）
1). 下载jQuery模块：
* npm install jquery@1 --save

2). 在main.js中引入并使用

