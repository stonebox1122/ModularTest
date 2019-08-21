(function () {
    requirejs.config({
        baseUrl: 'js/', // 出发点在根目录下
        paths: {
            dataService: './modules/dataService',
            alerter: './modules/alerter',
            jquery: './libs/jquery-1.12.4.min',
            angular: './libs/angular-1.5.9.min'
        },
        shim: {
            angular: {
                exports: 'angular'
            }
        }
    });

    requirejs(['alerter', 'angular'],function (alerter, angular) {
        alerter.showMsg();
        console.log(angular);
    })
})();