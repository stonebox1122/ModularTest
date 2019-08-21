下载browserify(以下两步都要做)
* 全局：npm install browserify -g
* 局部：npm install browserify --save-dev

打包处理js：
* browserify js/src/app.js -o js/dist/bundle.js

页面使用引入：
* <script type="text/javascript" src="js/dist/bundle.js"></script>