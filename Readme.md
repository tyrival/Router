# Router

## 概述
Router是个前端路由插件，支持多级路由和路由中的数据缓存，依赖jQuery。

## 引入
遵循AMD规范，需要用require引入，未支持UMD、CMD等，也不支持script标签引入，因为没时间，改起来也不复杂了，所以就这么着。
```javascript
require(["jquery", "router"], function ($, Router) {
    // do something
})
```

## 示例
```html
<div id="#viewport"></div>
<script>
require(["jquery", "router"], function ($, Router) {
    var config = {
        // 路由DOM ID
        view: '#viewport',
        mapper: {
            'home': {
                url: './views/home.html',
                controller: './js/components/home.js'
            },
            'list': {
                url: './views/list.html',
                controller: ''
            },
            'default': 'home'
        },
        // 错误模板所在DOM ID，可选
        errorTemplateId: '#error'
    }
    // 初始化路由
    var router = new Router(config);
})
</script>
```

## 配置参数
### id
路由id，用于在前端路由管理器RouterManager中的全局注册，可以在全局通过 RougerManager.get(id) 来获取路由对象。

#### hashKey
URL中，hash的分隔符，默认为#

### mapper
hash与资源的映射，key为hash，值为对象
```
"hash名称": {
    url: html资源,
    controller: js资源
}
```
同时，可以通过配置default属性，来配置默认加载页面
```
"default": "默认的hash名称"
```

### view
html dom的id

### errorTemplate （非必须）
错误信息显示位置

### listeners
事件监听，包括以下事件
```
onInit: function(router) 初始化完成后触发
beforeRouter: function(router, hash) 路由跳转前触发
afterRouter: function(router) 路由跳转后触发
```

## 方法
### go(hash)
根据hash路由到相应页面，hash不含#这些分隔符

### link(url)
直接跳转到传入的url网址

### backward()
后退，同浏览器后退按钮

### forward()
前进，同浏览器前进按钮

### getData(key)
根据key查询路由缓存的数据

### setData(key, object)
缓存object，用于跨页面传值

### deleteData(key)
删除参数key对应的数据

### clearData()
清空路由中缓存的所有数据

