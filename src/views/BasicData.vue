<template>
    <div class="basic-data-container">
        <h2>基础数据</h2>
        <div class="data-list">
            <div class="data-item" v-for="(value, key) in basicData" :key="key">
                <span class="data-label">{{ key }}</span>
                <span class="data-value">{{ value }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasicData',
    data() {
        return {
            basicData: {
                '国家层面政策': '1468条',
                '省级层面政策': '11655条',
                '覆盖中央政府部门': '88家',
                '覆盖省级政府部门': '1136家',
                '政策横跨时间': '8.5年'
            }
        }
    }
}
</script>

<style scoped>
.basic-data-container {
    width: 100%;
    height: 180px;
    /* 您可以调整这个值 */
    /* overflow-y: auto; */
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(0, 255, 255, 0.1);
    border: 1px solid #00ffff;
    border-radius: 5px;
}

h2 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #00ffff;
}

.data-list {
    display: flex;
    flex-direction: column;
}

.data-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

.data-label {
    color: #ffffff;
}

.data-value {
    color: #00ffff;
    font-weight: bold;
}
</style>