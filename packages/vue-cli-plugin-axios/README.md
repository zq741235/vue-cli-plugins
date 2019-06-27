# @zq741235/vue-cli-plugin-axios

## 安装

```
vue add @zq741235/axios
```

## 使用

1.添加自己的api到模块里（如：src/api/module）
```javascript
// src/api/module/xx
export const GET_XX = '/api/XX'

```
2.在src/api/index中全量导出
```javascript
export * from './module/xx'
```

3.页面导入 

```javascript
import {GET_XX} from '@/api' // @为src

```
4.页面引用

```javascript
this.$_get(GET_xx).then(res=>{})
this.$_get(GET_xx,{paramsA:11,paramsB:22}).then(res=>{})
this.$_post(GET_xx).then(res=>{})
this.$_post(GET_xx,{paramsA:11,paramsB:22}).then(res=>{})
this.$_post(GET_xx,{paramsA:11,paramsB:22},{
    // 第三个可以传axios配置的参数
}).then(res=>{})
```
## 其他

配合`zq741235/router`可直接查看示例

```
http://localhost:8080/axios
```

### vue-cli-plugin-router

```
vue add @zq741235/router
```