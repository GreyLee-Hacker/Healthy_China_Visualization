<template>
    <div class="dashboard">
        <h1 class="dashboard-title">健康中国建设追踪评估可视化平台</h1>
        <div class="dashboard-content">
            <div class="left-section">
                <div class="top-row">
                    <div class="basic-data">
                        <BasicData />
                    </div>
                </div>
                <div class="main-content">
                    <div class="left-column">
                        <div class="modules-preview">
                            <div class="module-card" v-for="module in modules" :key="module.id"
                                @mouseover="showEvaluationIndicators(module.id)"
                                @mouseleave="hideEvaluationIndicators()" @click="expandModule(module.id)">
                                <h2>{{ module.name }}</h2>
                                <component :is="module.object" :data="module.id === 'central' ? centralData : []" />
                                <div class="chart-preview" :id="'chart-' + module.id">
                                    <!-- <ProvincialMap v-if="module.id === 'provincial'" /> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="center-column">
                        <div class="network-preview" @click="expandModule('network')">
                            <h2>部门协同网络</h2>
                            <div id="network-chart"></div>
                            <div class="grid-preview">
                                <p>网格图预览</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-section">
                <div class="policy-tree-preview" @click="expandModule('policy-tree')">
                    <h2>政策树</h2>
                    <div id="policy-tree-chart"></div>
                    <div class="tree-preview">
                        <p>树状图预览</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 显示评估指标 -->
        <div v-if="currentDimension" class="evaluation-indicators-popup">
            <EvaluationIndicators :current-dimension="currentDimension" />
        </div>
        <!-- 展开的模块 -->
        <div v-if="expandedModule" class="expanded-module">
            <button @click="closeExpandedModule">返回</button>
            <div :id="'expanded-' + expandedModule"></div>
            <p>功能开发中，敬请期待</p>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import BasicData from '@/views/BasicData.vue';
import EvaluationIndicators from '@/views/EvaluationIndicators.vue';
import CentralDimension from '@/views/CentralDimension.vue';
import ProvincialDimension from '@/views/ProvincialDimension.vue';
import DepartmentalDimension from '@/views/DepartmentDimension.vue';
import ActionDimension from '@/views/ActionDimension.vue';

export default {
    name: 'HomePage',
    components: {
        BasicData,
        EvaluationIndicators,
    },
    data() {
        return {
            currentDimension: null, // 当前选中的维度
            modules: [
                { id: 'central', name: '中央维度', object: CentralDimension },
                { id: 'provincial', name: '省级维度', object: ProvincialDimension },
                { id: 'departmental', name: '部门维度', object: DepartmentalDimension },
                { id: 'action', name: '行动维度', object: ActionDimension }
            ],
            expandedModule: null,
            centralData: [ // 定义中央维度的数据
                { year: '2020', score: 75 },
                { year: '2021', score: 80 },
                { year: '2022', score: 85 },
                { year: '2023', score: 90 }
            ]
        }
    },
    methods: {
        showEvaluationIndicators(moduleId) {
            this.currentDimension = moduleId; // 更新当前维度
        },
        hideEvaluationIndicators() {
            this.currentDimension = null; // 隐藏评估指标
        },
        expandModule(moduleId) {
            this.expandedModule = moduleId;
            this.$nextTick(() => {
                const expandedChart = echarts.init(document.getElementById(`expanded-${moduleId}`));
                expandedChart.setOption(this.getExpandedChartOption(moduleId));
            });
        },
        closeExpandedModule() {
            this.expandedModule = null;
        },
        getExpandedChartOption(moduleId) {
            // 返回展开后的大图表配置
            return {};
        },
        initCharts() {
            this.modules.forEach(module => {
                this.initModuleChart(module.id);
            });
            this.initNetworkChart();
            this.initPolicyTreeChart();
            this.initIndicatorsChart();
        },
        initModuleChart(moduleId) {
            const chart = echarts.init(document.getElementById(`chart-${moduleId}`));
            const option = this.getChartOption(moduleId);
            if (option) {
                chart.setOption(option);
            }
        },
        initNetworkChart() {
            // 初始化网络图表
        },
        initPolicyTreeChart() {
            // 初始化政策树图表
        },
        initIndicatorsChart() {
            // 初始化评估指标图表
        },
        getChartOption(moduleId) {
            // 这里返回每个模块的图表配置
            return {
                title: { show: false },
                grid: { top: 5, right: 5, bottom: 5, left: 5 },
                xAxis: { show: false },
                yAxis: { show: false },
                series: [{
                    type: 'line',
                    data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100],
                    lineStyle: { color: '#00ffff' },
                    areaStyle: { color: 'rgba(0, 255, 255, 0.2)' }
                }]
            };
        }
    }
}
</script>

<style scoped>
.dashboard {
    background-color: #001529;
    color: #fff;
    min-height: 100vh;
    padding: 20px;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
}

.dashboard-title {
    color: #00ffff;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
}

.dashboard-content {
    display: flex;
    flex-grow: 1;
    gap: 20px;
}

.left-section {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.top-row {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.basic-data,
.evaluation-indicators {
    flex: 1;
}

.basic-data,
.evaluation-indicators,
.policy-tree-preview {
    background-color: rgba(0, 255, 255, 0.1);
    border: 1px solid #00ffff;
    border-radius: 5px;
    padding: 10px;
}

.main-content {
    display: flex;
    gap: 20px;
    flex-grow: 1;
}

.left-column,
.center-column,
.right-section {
    display: flex;
    flex-direction: column;
}

.left-column {
    width: 33%;
}

.center-column {
    width: 67%;
}

.right-section {
    width: 25%;
}

.modules-preview,
.network-preview,
.policy-tree-preview {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.module-card,
.network-preview {
    background-color: rgba(0, 255, 255, 0.1);
    border: 1px solid #00ffff;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
}

.module-card {
    flex: 1;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.module-card:last-child {
    margin-bottom: 0;
}

h2 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #00ffff;
}

.chart-preview,
#network-chart,
#policy-tree-chart,
#indicators-chart {
    flex-grow: 1;
}

.evaluation-indicators-popup {
    position: fixed;
    /* 或者使用 absolute */
    top: 20px;
    /* 根据需要调整位置 */
    left: 50%;
    /* 根据需要调整位置 */
    transform: translateX(-50%);
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    max-width: 400px;
    /* 根据需要设置最大宽度 */
    overflow: auto;
    /* 如果内容超出，允许滚动 */
}

.expanded-module {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 21, 41, 0.9);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.expanded-module button {
    align-self: flex-start;
    background-color: #00ffff;
    color: #001529;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
}

#expanded-chart {
    flex-grow: 1;
}
</style>
