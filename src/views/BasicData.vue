<template>
    <div class="basic-data-container">
        <div class="basic-data">
            <h2>基础数据</h2>
            <ul>
                <li v-for="(value, key) in basicData" :key="key">
                    {{ key }}: {{ value }}
                </li>
            </ul>
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
    /* 可以设置具体的像素值,如 300px */
    height: 180px;
    /* 您可以调整这个值 */
    overflow-y: auto;
    padding: 10px;
    box-sizing: border-box;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}
</style>
