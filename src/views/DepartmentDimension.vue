<template>
    <div>
        <h2>部门层面评估结果</h2>
        <div ref="lineChart" style="width: 100%; height: 400px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: 'DepartmentDimension',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            const chart = echarts.init(this.$refs.lineChart);
            const option = {
                xAxis: {
                    type: 'category',
                    data: this.data.map(item => item.year)
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '得分',
                        type: 'line',
                        data: this.data.map(item => item.score),
                        lineStyle: { color: '#00ffff' },
                        areaStyle: { color: 'rgba(0, 255, 255, 0.2)' }
                    }
                ]
            };
            chart.setOption(option);
        }
    }
}
</script>

<style scoped>
/* 添加样式 */
</style>