<template>
    <div class="evaluation-indicators-container">
        <h2>评估指标</h2>
        <table class="indicators-table">
            <thead>
                <tr>
                    <th>一级指标</th>
                    <th>二级指标</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(subIndicators, mainKey) in currentIndicators" :key="mainKey">
                    <td class="main-indicator">{{ mainKey }}</td>
                    <td>
                        <ul>
                            <li v-for="(value, subKey) in subIndicators" :key="subKey" class="sub-indicator-item">
                                {{ subKey }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'EvaluationIndicators',
    props: {
        currentDimension: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            indicators: {
                central: {
                    '政策数量': {
                        '全方位干预健康影响因素领域发文量（件）': true,
                        '维护全生命周期健康领域发文量（件）': true,
                        '防控重大疾病领域发文量（件）': true,
                    },
                    '政策质量': {
                        '当年完成率（%）': true,
                        '总体完成率（%）': true,
                        '平均发文月数（月）': true,
                    },
                    '协作机制': {
                        '参与部门数量（家）': true,
                        '平均协作规模（家/件）': true,
                        '联合发文率（%）': true,
                    }
                },
                provincial: {
                    '政策数量': {
                        '全方位干预健康影响因素领域发文量（件）': true,
                        '维护全生命周期健康领域发文量（件）': true,
                        '防控重大疾病领域发文量（件）': true,
                    },
                    '政策质量': {
                        '当年完成率（%）': true,
                        '总体完成率（%）': true,
                        '平均发文月数（月）': true,
                    },
                    '协作机制': {
                        '参与部门数量（家）': true,
                        '平均协作规模（家/件）': true,
                        '联合发文率（%）': true,
                    }
                },
                departmental: {
                    '政策数量': {
                        '国家层面发文量（件）': true,
                        '省级层面发文量（件）': true,
                    },
                    '政策质量': {
                        '国家层面当年完成率（%）': true,
                        '国家层面总体完成率（%）': true,
                        '国家层面平均发文月数（月）': true,
                        '国家层面平均协作规模（家/件）': true,
                        '国家层面联合发文率（%）': true,
                        '省级层面平均协作规模（家/件）': true,
                        '省级层面联合发文率（%）': true,
                    }
                },
                action: {
                    '政策数量': {
                        '国家层面发文量（件）': true,
                        '省级层面发文量（件）': true,
                    },
                    '政策质量': {
                        '国家层面当年完成率（%）': true,
                        '国家层面总体完成率（%）': true,
                        '国家层面平均发文月数（月）': true,
                        '省级层面当年完成率（%）': true,
                        '省级层面总体完成率（%）': true,
                        '省级层面平均发文月数（月）': true,
                    },
                    '协作机制': {
                        '国家层面参与部门数量（家）': true,
                        '国家层面平均协作规模（家/件）': true,
                        '国家层面联合发文率（%）': true,
                        '省级层面参与部门数量（家）': true,
                        '省级层面平均协作规模（家/件）': true,
                        '省级层面联合发文率（%）': true,
                    }
                }
            }
        }
    },
    computed: {
        currentIndicators() {
            return this.indicators[this.currentDimension] || {};
        }
    }
}
</script>

<style scoped>
.evaluation-indicators-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

h2 {
    font-size: 16px;
    margin-bottom: 5px;
    color: #00ffff;
}

.indicators-table {
    width: 100%;
    border-collapse: collapse;
}

.indicators-table th,
.indicators-table td {
    border: 1px solid #00ffff;
    padding: 8px;
    text-align: left;
}

.main-indicator {
    font-weight: bold;
}

.sub-indicator-item {
    margin-left: 20px;
    /* 缩进以区分二级指标 */
}
</style>
