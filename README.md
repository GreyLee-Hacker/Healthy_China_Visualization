# 健康中国可视化系统

## 项目介绍
本项目是一个基于Web的可视化系统，旨在直观展示健康中国政策体系的多维度数据。系统包括基础数据展示、部门协同网络分析、省级维度地图展示、部门维度分析、行动维度分析以及政策树等多个模块。

## 项目目标
- 直观展示健康中国政策体系的整体架构
- 分析政府部门间的协同关系
- 展示各省份政策实施情况
- 追踪不同时期的政策演变
- 展示各维度的政策执行效果

## 文件架构
```
healthchina-vis/
├── index.html          # 主页面
├── css/
│   └── comon0.css      # 样式文件
├── js/
│   ├── js.js                   # 本项目主要js效果实现
│   ├── area_echarts.js         # 地方维度js效果实现
│   ├── china.js                # 中国地图实现
│   ├── jquery.js       
│   ├── echarts.min.js       
│   └── jquery.liMarquee.js     # 一些必要的库
├── dataset             # 地方维度数据集
├── font            
└── images/
    ├── loading.gif     # 加载动画
    ├── lbx.png         # 地图装饰
    ├── jt.png          # 地图装饰
    ├── map.png         # 中国地图底图
    └── ...       
```

## 技术栈
- HTML5
- CSS3
- JavaScript
- jQuery
- ECharts (数据可视化库)

## 主要功能模块
1. 基础数据展示
```html:index.html
startLine: 45
endLine: 74
```

2. 部门协同网络
- 基于力导向图的部门关系网络
- 支持交互式拖拽和缩放
- 展示部门间协同强度

3. 省级维度地图
- 中国地图可视化
- 各省份政策实施情况展示

4. 部门维度分析
- 2019-2023年数据展示
- 支持年份切换

5. 行动维度分析
- 2016-2023年数据展示
- 支持横向滚动切换年份

6. 中央维度
- 从多个角度分析中央层面政策实施力度
- 支持切换多角度可视化折线图
 
7. 评价指标 
- 随鼠标悬停位置改变，显示每个维度得分评价指标

## 使用说明

### 方法一
访问网站[健康中国可视化系统](https://greylee-hacker.github.io/Healthy_China_Visualization/)

### 方法二
1. 克隆项目到本地
2. 使用现代浏览器打开index.html
3. 确保有网络连接以加载必要的库文件

## 注意事项
- 建议使用Chrome、Firefox等现代浏览器
- 确保浏览器启用了JavaScript
- 建议显示器分辨率1920*1080以上

## 版权说明
本项目模版来源于[陌生人/BigDataView](https://gitee.com/iGaoWei/big-data-view),在此鸣谢！