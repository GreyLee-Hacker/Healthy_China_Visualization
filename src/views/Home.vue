<template>
    <div class="dashboard">
        <h1 class="dashboard-title">政务服务大数据可视化监管平台</h1>
        <div class="dashboard-content">
            <div class="left-section">
                <div class="top-row">
                    <div class="basic-data">
                        <BasicData />
                        <!-- <h2>基础数据</h2> -->
                        <!-- <div id="basic-data-chart"></div> -->
                    </div>
                    <div class="evaluation-indicators">
                        <h2>评估指标</h2>
                        <div id="indicators-chart"></div>
                    </div>
                </div>
                <div class="main-content">
                    <div class="left-column">
                        <div class="modules-preview">
                            <div class="module-card" v-for="module in modules" :key="module.id"
                                @click="expandModule(module.id)">
                                <h2>{{ module.name }}</h2>
                                <div class="chart-preview" :id="'chart-' + module.id"></div>
                            </div>
                        </div>
                    </div>
                    <div class="center-column">
                        <div class="network-preview" @click="expandModule('network')">
                            <h2>部门协同网络</h2>
                            <div id="network-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-section">
                <div class="policy-tree-preview" @click="expandModule('policy-tree')">
                    <h2>政策树</h2>
                    <div id="policy-tree-chart"></div>
                </div>
            </div>
        </div>
        <!-- 展开的模块 -->
        <div v-if="expandedModule" class="expanded-module">
            <button @click="closeExpandedModule">返回</button>
            <div :id="'expanded-' + expandedModule"></div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import BasicData from './BasicData.vue';

export default {
    name: 'HomePage',
    components: {
        BasicData
    },
    data() {
        return {
            modules: [
                { id: 'central', name: '中央维度' },
                { id: 'provincial', name: '省级维度' },
                { id: 'departmental', name: '部门维度' },
                { id: 'action', name: '行动维度' }
            ],
            expandedModule: null
        }
    },
    mounted() {
        this.initCharts();
    },
    methods: {
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
    /* height: 200px; */
    /* 减小高度 */
}

.basic-data {
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

.basic-data,
.evaluation-indicators {
    flex: 1;
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
