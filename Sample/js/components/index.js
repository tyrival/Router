requirejs.config({
    baseUrl: './',
    paths: {
        /* libs */
        jquery: 'libs/jquery/jquery-3.2.1.min',
        /* plugin */
        router: 'js/plugins/router',
    },
});

require(["jquery", "router"], function ($, Router) {
    $(function () {
        // 配置路由路径
        var router = new Router({
            // 路由id，用于注册全局管理器
            id: "main-router",
            // 路由DOM ID
            view: '#viewport',
            mapper: {
                'home': {
                    url: './views/home.html',
                    controller: ''
                },
                '404': {
                    url: './views/404.html',
                    controller: ''
                },
                'data_service': {
                    url: './views/data_service/main.html',
                    controller: './js/components/data_service/main.js',
                    child: {
                        view: "#data-service-viewport",
                        mapper: {
                            'manager': {
                                url: './views/data_service/sub/manager.html',
                                controller: ''
                            },
                            'list': {
                                url: './views/data_service/sub/list.html',
                                controller: ''
                            },
                            'default': 'list',
                        },
                    }
                },
                'data_transfer': {
                    url: './views/data_transfer/main.html',
                    controller: './js/components/data_transfer/main.js',
                    child: {
                        view: "#data-transfer-viewport",
                        mapper: {
                            'monitor': {
                                url: './views/data_transfer/sub/monitor.html',
                                controller: ''
                            },
                            'task': {
                                url: './views/data_transfer/sub/task.html',
                                controller: ''
                            },
                            'default': 'monitor',
                        },
                    }
                },
                // 默认路由
                'default': 'home',
            },
            // 错误模板所在DOM ID，可选
            errorTemplateId: '#error'
        });
    })
})
