# vue-cli3-template

## 介绍

在vue-cli3基础上做了一点小动作。

主要为vue-cli3几个小插件，都是长期从业务中提取出来的一些东西

- 代码提交规范
- axios
- router
- vuex

## 使用

```
vue create --preset zq741235/vue-cli-plugins my-project
```

然后你会看到目录如下(简化目录)：

```
.
├── README.md
├── babel.config.js
├── commitlint.config.js 
├── package.json 
├── src
│   ├── App.vue
│   ├── api
│   ├── assets
│   ├── components
│   ├── main.js
│   ├── plugins
│   ├── router
│   ├── store
│   └── views
└── vue.config.js
```

## 启动

```
npm run serve
```
可以访问以下地址或文件查看具体内容：

```
// router
localhost:8080/home 
localhost:8080/about 
// axios
localhost:8080/axios 
// vuex
localhost:8080/vuex
```