// 定义一个没有依赖的模块
(function (window) {
    let username = 'dateService.js';
    function getName() {
        return username;
    }
    window.dataService = {getName};
})(window);