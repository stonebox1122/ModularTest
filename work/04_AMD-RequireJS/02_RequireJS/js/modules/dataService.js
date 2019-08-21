// 定义一个没有依赖的模块
define(function () {
    let username = 'dataService.js';
    function getName() {
        return username;
    }
    // 暴露模块
   return {getName};
});
