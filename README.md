# 健康中国建设追踪评估可视化项目

## 项目概述

本项目是一个基于Vue.js的多页面网站,旨在可视化展示健康中国建设的追踪评估数据。项目包含多个模块,涵盖了从基础数据到各种维度的评估结果。

## 项目结构

```
src/
  assets/           # 静态资源文件
  components/       # 可复用的Vue组件
  views/            # 页面级Vue组件
    Home.vue
    BasicData.vue
    EvaluationIndicators.vue
    CentralDimension.vue
    ProvincialDimension.vue
    DepartmentDimension.vue
    ActionDimension.vue
    DepartmentNetwork.vue
    PolicyTree.vue
  router/           # Vue Router配置
    index.js
  store/            # Vuex状态管理(如果需要)
    index.js
  App.vue           # 根组件
  main.js           # 入口文件
```

## 功能模块

1. **首页**: 展示项目概览和导航到其他模块
2. **基础数据**: 展示数据整体情况
3. **评估指标**: 展示国家和省级层面、部门和行动层面评价指标
4. **中央维度**: 展示国家层面年度评估结果(时间趋势)
5. **省级维度**: 展示31省市评估结果
6. **部门维度**: 展示部门评估结果
7. **行动维度**: 展示15项专项重点行动评估结果
8. **部门协同网络**: 政策网络(需计算邻接矩阵)
9. **政策树**: 展示政策沿袭(需计算政策演化情况)

## 技术栈

- Vue 3
- Vue Router 用于路由管理
- Vuex 用于状态管理(如果需要)
- ECharts 或 D3.js 用于数据可视化

## 安装和运行

1. 克隆项目仓库
```
git clone [项目仓库URL]
```

2. 安装依赖
```
npm install
```

3. 运行开发服务器
```
npm run serve
```

4. 构建生产版本
```
npm run build
```

## 开发指南

- 每个主要功能模块都有对应的视图组件在`src/views/`目录下
- 可复用的小组件应放在`src/components/`目录下
- 使用Vue Router进行页面导航,路由配置在`src/router/index.js`中
- 如果需要全局状态管理,使用Vuex,配置文件在`src/store/index.js`中

## 数据可视化

- 使用ECharts或D3.js创建交互式图表
- 在各个维度的组件中集成图表,允许用户通过点击或悬停来探索数据
- 对于地理数据(如省级维度),考虑使用地图可视化

## 待开发功能

- 主题词频统计和展示
- 政策主题占比趋势分析
- 与后端API集成,获取实时数据

## 贡献指南

[在这里添加如何贡献到项目的说明]

## 许可证

[在这里添加项目的许可证信息]
