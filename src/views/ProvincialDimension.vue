<template>
    <div ref="mapChart" style="width: 100%; height: 200px;"></div>
</template>

<script>
import * as echarts from 'echarts';
import chinaMap from '@/assets/chinamap.js'; // 引入中国地图数据

export default {
    name: 'ProvincialDimension',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            echarts.registerMap('China', chinaMap); // 注册地图
            const chart = echarts.init(this.$refs.mapChart);
            const option = {
                tooltip: {
                    trigger: 'item'
                },
                visualMap: {
                    min: 0,
                    max: 100,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                    inRange: {
                        color: ['#e0ffff', '#006edd'] // 颜色范围
                    }
                },
                series: [
                    {
                        name: '省级数据',
                        type: 'map',
                        map: 'China',
                        roam: false,
                        label: {
                            show: true
                        },
                        data: [
                            { name: '北京', value: Math.random() * 100 },
                            { name: '上海', value: Math.random() * 100 },
                            { name: '广东', value: Math.random() * 100 },
                            { name: '江苏', value: Math.random() * 100 },
                            { name: '浙江', value: Math.random() * 100 },
                            // 添加其他省份的数据
                        ]
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