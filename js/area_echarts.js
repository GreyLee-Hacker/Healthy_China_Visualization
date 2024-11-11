$(function () {
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));

        // 添加按钮组定义
        var buttons = [
            { id: 'totalScore', text: '发展指数', active: true },
            { id: 'policyCount', text: '政策数量', active: false },
            { id: 'policyQuality', text: '政策质量', active: false },
            { id: 'coordination', text: '协同机制', active: false }
        ];
        // 在这里插入 (buttons数组定义之后)
        var years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
        var currentYear = '2023';
        // 创建按钮容器

        // ... existing code ...
        var buttonContainer = document.createElement('div');
        buttonContainer.style.position = 'absolute';
        buttonContainer.style.left = '44%';
        buttonContainer.style.transform = 'translateX(-50%)';
        buttonContainer.style.top = '50px';
        buttonContainer.style.zIndex = '1000';
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = 'min(2px, 0.4vw)';  // 响应式按钮间距
        document.getElementById('map_1').appendChild(buttonContainer);
        // 在 document.getElementById('map_1').appendChild(buttonContainer); 之后插入
        var yearContainer = document.createElement('div');
        yearContainer.style.position = 'absolute';
        yearContainer.style.right = '10%';
        yearContainer.style.top = '50px';
        yearContainer.style.zIndex = '1000';
        yearContainer.style.display = 'flex';
        yearContainer.style.gap = 'min(2px, 0.4vw)';
        document.getElementById('map_1').appendChild(yearContainer);

        // 创建年份按钮
        years.forEach(year => {
            var btn = document.createElement('button');
            btn.innerText = year;
            btn.style.margin = '0';
            btn.style.padding = 'min(7px, 0.7vw) min(14px, 1.2vw)';
            btn.style.cursor = 'pointer';
            btn.style.border = '1px solid #d9d9d9';
            btn.style.borderRadius = 'min(4px, 0.5vw)';
            btn.style.backgroundColor = year === currentYear ? '#1890ff' : 'transparent';
            btn.style.color = year === currentYear ? 'white' : '#f0f0f0';
            btn.style.fontSize = 'min(10px, 0.9vw)';
            btn.style.whiteSpace = 'nowrap';
            btn.style.transition = 'all 0.3s';

            btn.onmouseover = function () {
                if (year !== currentYear) {
                    btn.style.borderColor = '#40a9ff';
                    btn.style.color = '#40a9ff';
                }
            };

            btn.onmouseout = function () {
                if (year !== currentYear) {
                    btn.style.borderColor = '#d9d9d9';
                    btn.style.color = '#f0f0f0';
                }
            };

            btn.onclick = function () {
                yearContainer.querySelectorAll('button').forEach(b => {
                    b.style.backgroundColor = 'transparent';
                    b.style.color = '#f0f0f0';
                    b.style.borderColor = '#d9d9d9';
                });
                btn.style.backgroundColor = '#1890ff';
                btn.style.color = 'white';
                btn.style.borderColor = '#1890ff';
                currentYear = year;
                updateMapData(buttons.find(b => b.active).id);
            };
            yearContainer.appendChild(btn);
        });
        // 创建按钮
        buttons.forEach(button => {
            var btn = document.createElement('button');
            btn.innerText = button.text;
            btn.style.margin = '0';
            btn.style.padding = 'min(7px, 0.7vw) min(14px, 1.2vw)';  // 响应式内边距
            btn.style.cursor = 'pointer';
            btn.style.border = '1px solid #d9d9d9';
            btn.style.borderRadius = 'min(4px, 0.5vw)';  // 响应式圆角
            btn.style.backgroundColor = button.active ? '#1890ff' : 'transparent';
            btn.style.color = button.active ? 'white' : '#f0f0f0';
            btn.style.fontSize = 'min(10px, 0.9vw)';  // 响应式字体大小
            btn.style.whiteSpace = 'nowrap';
            btn.style.transition = 'all 0.3s';  // 平滑过渡效果

            btn.onmouseover = function () {
                if (!button.active) {
                    btn.style.borderColor = '#40a9ff';
                    btn.style.color = '#40a9ff';
                }
            };

            btn.onmouseout = function () {
                if (!button.active) {
                    btn.style.borderColor = '#d9d9d9';
                    btn.style.color = '#f0f0f0';
                }
            };

            btn.onclick = function () {
                buttonContainer.querySelectorAll('button').forEach(b => {
                    b.style.backgroundColor = 'transparent';
                    b.style.color = '#f0f0f0';
                    b.style.borderColor = '#d9d9d9';
                });
                btn.style.backgroundColor = '#1890ff';
                btn.style.color = 'white';
                btn.style.borderColor = '#1890ff';
                updateMapData(button.id);
                buttons.forEach(b => b.active = (b.id === button.id));
            };
            buttonContainer.appendChild(btn);
        });
        // 定义不同指标的数据
        // 替换原有的 const mapData = { ... } 部分
        // 在 buttons 数组定义后插入
        const mapData = {
            totalScore: {
                2023: [
                    { name: '北京', value: 45.23 },
                    { name: '天津', value: 38.56 },
                    { name: '河北', value: 32.45 },
                    { name: '山西', value: 35.01 },
                    { name: '内蒙古', value: 28.76 },
                    { name: '辽宁', value: 42.13 },
                    { name: '吉林', value: 33.89 },
                    { name: '黑龙江', value: 29.34 },
                    { name: '上海', value: 52.67 },
                    { name: '江苏', value: 48.92 },
                    { name: '浙江', value: 29.60 },
                    { name: '安徽', value: 31.78 },
                    { name: '福建', value: 39.45 },
                    { name: '江西', value: 27.89 },
                    { name: '山东', value: 44.56 },
                    { name: '河南', value: 36.78 },
                    { name: '湖北', value: 41.23 },
                    { name: '湖南', value: 38.91 },
                    { name: '广东', value: 51.34 },
                    { name: '广西', value: 33.67 },
                    { name: '海南', value: 25.89 },
                    { name: '重庆', value: 40.12 },
                    { name: '四川', value: 55.26 },
                    { name: '贵州', value: 30.45 },
                    { name: '云南', value: 37.28 },
                    { name: '西藏', value: 43.54 },
                    { name: '陕西', value: 41.89 },
                    { name: '甘肃', value: 26.78 },
                    { name: '青海', value: 28.91 },
                    { name: '宁夏', value: 31.23 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 18.49 }

                ],
                2022: [
                    { name: '北京', value: 36.00 },
                    { name: '天津', value: 35.12 },
                    { name: '河北', value: 29.87 },
                    { name: '山西', value: 32.45 },
                    { name: '内蒙古', value: 30.76 },
                    { name: '辽宁', value: 38.91 },
                    { name: '吉林', value: 31.23 },
                    { name: '黑龙江', value: 27.56 },
                    { name: '上海', value: 48.92 },
                    { name: '江苏', value: 45.67 },
                    { name: '浙江', value: 27.89 },
                    { name: '安徽', value: 68.08 },
                    { name: '福建', value: 43.09 },
                    { name: '江西', value: 25.67 },
                    { name: '山东', value: 41.23 },
                    { name: '河南', value: 34.56 },
                    { name: '湖北', value: 38.90 },
                    { name: '湖南', value: 36.78 },
                    { name: '广东', value: 30.69 },
                    { name: '广西', value: 31.45 },
                    { name: '海南', value: 23.45 },
                    { name: '重庆', value: 40.92 },
                    { name: '四川', value: 51.23 },
                    { name: '贵州', value: 30.76 },
                    { name: '云南', value: 35.67 },
                    { name: '西藏', value: 41.23 },
                    { name: '陕西', value: 39.87 },
                    { name: '甘肃', value: 40.28 },
                    { name: '青海', value: 26.78 },
                    { name: '宁夏', value: 29.34 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 17.23 }
                ],
                2021: [
                    { name: '北京', value: 37.19 },
                    { name: '天津', value: 34.56 },
                    { name: '河北', value: 28.90 },
                    { name: '山西', value: 31.78 },
                    { name: '内蒙古', value: 28.05 },
                    { name: '辽宁', value: 37.89 },
                    { name: '吉林', value: 30.45 },
                    { name: '黑龙江', value: 26.78 },
                    { name: '上海', value: 47.56 },
                    { name: '江苏', value: 44.23 },
                    { name: '浙江', value: 26.90 },
                    { name: '安徽', value: 67.39 },
                    { name: '福建', value: 43.06 },
                    { name: '江西', value: 24.89 },
                    { name: '山东', value: 40.12 },
                    { name: '河南', value: 33.45 },
                    { name: '湖北', value: 37.67 },
                    { name: '湖南', value: 35.89 },
                    { name: '广东', value: 26.64 },
                    { name: '广西', value: 30.23 },
                    { name: '海南', value: 22.34 },
                    { name: '重庆', value: 39.34 },
                    { name: '四川', value: 49.87 },
                    { name: '贵州', value: 28.11 },
                    { name: '云南', value: 34.56 },
                    { name: '西藏', value: 40.12 },
                    { name: '陕西', value: 38.90 },
                    { name: '甘肃', value: 36.72 },
                    { name: '青海', value: 25.67 },
                    { name: '宁夏', value: 28.45 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 16.78 }
                ],
                2020: [
                    { name: '北京', value: 28.22 },
                    { name: '天津', value: 33.45 },
                    { name: '河北', value: 27.89 },
                    { name: '山西', value: 30.56 },
                    { name: '内蒙古', value: 37.36 },
                    { name: '辽宁', value: 36.78 },
                    { name: '吉林', value: 29.34 },
                    { name: '黑龙江', value: 25.67 },
                    { name: '上海', value: 46.23 },
                    { name: '江苏', value: 43.12 },
                    { name: '浙江', value: 25.78 },
                    { name: '安徽', value: 71.84 },
                    { name: '福建', value: 31.72 },
                    { name: '江西', value: 23.90 },
                    { name: '山东', value: 39.45 },
                    { name: '河南', value: 32.34 },
                    { name: '湖北', value: 36.89 },
                    { name: '湖南', value: 34.67 },
                    { name: '广东', value: 24.13 },
                    { name: '广西', value: 29.45 },
                    { name: '海南', value: 21.56 },
                    { name: '重庆', value: 37.43 },
                    { name: '四川', value: 48.56 },
                    { name: '贵州', value: 28.69 },
                    { name: '云南', value: 33.45 },
                    { name: '西藏', value: 39.23 },
                    { name: '陕西', value: 37.89 },
                    { name: '甘肃', value: 36.84 },
                    { name: '青海', value: 24.56 },
                    { name: '宁夏', value: 27.89 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 15.67 }
                ],
                2019: [
                    { name: '北京', value: 29.67 },
                    { name: '天津', value: 32.34 },
                    { name: '河北', value: 26.78 },
                    { name: '山西', value: 29.45 },
                    { name: '内蒙古', value: 24.17 },
                    { name: '辽宁', value: 35.67 },
                    { name: '吉林', value: 28.90 },
                    { name: '黑龙江', value: 24.56 },
                    { name: '上海', value: 45.12 },
                    { name: '江苏', value: 42.34 },
                    { name: '浙江', value: 24.67 },
                    { name: '安徽', value: 58.20 },
                    { name: '福建', value: 38.72 },
                    { name: '江西', value: 22.89 },
                    { name: '山东', value: 38.56 },
                    { name: '河南', value: 31.23 },
                    { name: '湖北', value: 35.78 },
                    { name: '湖南', value: 33.56 },
                    { name: '广东', value: 32.78 },
                    { name: '广西', value: 28.67 },
                    { name: '海南', value: 20.45 },
                    { name: '重庆', value: 35.73 },
                    { name: '四川', value: 47.23 },
                    { name: '贵州', value: 31.95 },
                    { name: '云南', value: 32.34 },
                    { name: '西藏', value: 38.45 },
                    { name: '陕西', value: 36.78 },
                    { name: '甘肃', value: 31.16 },
                    { name: '青海', value: 23.45 },
                    { name: '宁夏', value: 26.78 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 14.89 }
                ],
                2018: [
                    { name: '北京', value: 28.96 },
                    { name: '天津', value: 31.23 },
                    { name: '河北', value: 25.67 },
                    { name: '山西', value: 28.34 },
                    { name: '内蒙古', value: 17.36 },
                    { name: '辽宁', value: 34.56 },
                    { name: '吉林', value: 27.89 },
                    { name: '黑龙江', value: 23.45 },
                    { name: '上海', value: 44.23 },
                    { name: '江苏', value: 41.56 },
                    { name: '浙江', value: 23.56 },
                    { name: '安徽', value: 44.57 },
                    { name: '福建', value: 24.92 },
                    { name: '江西', value: 21.78 },
                    { name: '山东', value: 37.89 },
                    { name: '河南', value: 30.12 },
                    { name: '湖北', value: 34.67 },
                    { name: '湖南', value: 32.45 },
                    { name: '广东', value: 15.98 },
                    { name: '广西', value: 27.89 },
                    { name: '海南', value: 19.34 },
                    { name: '重庆', value: 24.79 },
                    { name: '四川', value: 46.12 },
                    { name: '贵州', value: 31.18 },
                    { name: '云南', value: 31.23 },
                    { name: '西藏', value: 37.56 },
                    { name: '陕西', value: 35.67 },
                    { name: '甘肃', value: 32.38 },
                    { name: '青海', value: 22.34 },
                    { name: '宁夏', value: 25.67 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 13.78 }
                ],
                2017: [
                    { name: '北京', value: 27.77 },
                    { name: '天津', value: 30.12 },
                    { name: '河北', value: 24.56 },
                    { name: '山西', value: 27.23 },
                    { name: '内蒙古', value: 19.56 },
                    { name: '辽宁', value: 33.45 },
                    { name: '吉林', value: 26.78 },
                    { name: '黑龙江', value: 22.34 },
                    { name: '上海', value: 43.12 },
                    { name: '江苏', value: 40.78 },
                    { name: '浙江', value: 22.45 },
                    { name: '安徽', value: 39.18 },
                    { name: '福建', value: 37.96 },
                    { name: '江西', value: 20.67 },
                    { name: '山东', value: 36.78 },
                    { name: '河南', value: 29.34 },
                    { name: '湖北', value: 33.56 },
                    { name: '湖南', value: 31.23 },
                    { name: '广东', value: 14.67 },
                    { name: '广西', value: 26.78 },
                    { name: '海南', value: 18.23 },
                    { name: '重庆', value: 22.48 },
                    { name: '四川', value: 45.23 },
                    { name: '贵州', value: 22.48 },
                    { name: '云南', value: 30.12 },
                    { name: '西藏', value: 36.78 },
                    { name: '陕西', value: 34.56 },
                    { name: '甘肃', value: 23.20 },
                    { name: '青海', value: 21.23 },
                    { name: '宁夏', value: 24.56 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 12.67 }
                ]
            },
            policyCount: {
                2023: [
                    { name: '北京', value: 23.78 },
                    { name: '天津', value: 19.45 },
                    { name: '河北', value: 15.67 },
                    { name: '山西', value: 17.89 },
                    { name: '内蒙古', value: 16.42 },
                    { name: '辽宁', value: 22.34 },
                    { name: '吉林', value: 18.92 },
                    { name: '黑龙江', value: 14.56 },
                    { name: '上海', value: 35.67 },
                    { name: '江苏', value: 31.23 },
                    { name: '浙江', value: 16.78 },
                    { name: '安徽', value: 81.93 },
                    { name: '福建', value: 37.06 },
                    { name: '江西', value: 13.45 },
                    { name: '山东', value: 25.67 },
                    { name: '河南', value: 18.34 },
                    { name: '湖北', value: 21.56 },
                    { name: '湖南', value: 19.78 },
                    { name: '广东', value: 27.04 },
                    { name: '广西', value: 16.89 },
                    { name: '海南', value: 12.34 },
                    { name: '重庆', value: 28.47 },
                    { name: '四川', value: 33.45 },
                    { name: '贵州', value: 16.42 },
                    { name: '云南', value: 18.67 },
                    { name: '西藏', value: 24.56 },
                    { name: '陕西', value: 22.34 },
                    { name: '甘肃', value: 21.44 },
                    { name: '青海', value: 15.67 },
                    { name: '宁夏', value: 17.89 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 11.23 }
                ],
                2022: [
                    { name: '北京', value: 22.45 },
                    { name: '天津', value: 18.90 },
                    { name: '河北', value: 14.89 },
                    { name: '山西', value: 17.23 },
                    { name: '内蒙古', value: 15.67 },
                    { name: '辽宁', value: 21.56 },
                    { name: '吉林', value: 18.23 },
                    { name: '黑龙江', value: 13.89 },
                    { name: '上海', value: 34.56 },
                    { name: '江苏', value: 30.12 },
                    { name: '浙江', value: 15.89 },
                    { name: '安徽', value: 79.45 },
                    { name: '福建', value: 36.12 },
                    { name: '江西', value: 12.78 },
                    { name: '山东', value: 24.89 },
                    { name: '河南', value: 17.56 },
                    { name: '湖北', value: 20.78 },
                    { name: '湖南', value: 18.90 },
                    { name: '广东', value: 26.23 },
                    { name: '广西', value: 16.23 },
                    { name: '海南', value: 11.67 },
                    { name: '重庆', value: 27.56 },
                    { name: '四川', value: 32.34 },
                    { name: '贵州', value: 15.78 },
                    { name: '云南', value: 17.89 },
                    { name: '西藏', value: 23.67 },
                    { name: '陕西', value: 21.56 },
                    { name: '甘肃', value: 20.67 },
                    { name: '青海', value: 14.89 },
                    { name: '宁夏', value: 17.23 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 10.56 }
                ],
                2021: [
                    { name: '北京', value: 21.34 },
                    { name: '天津', value: 17.89 },
                    { name: '河北', value: 14.23 },
                    { name: '山西', value: 16.78 },
                    { name: '内蒙古', value: 14.89 },
                    { name: '辽宁', value: 20.45 },
                    { name: '吉林', value: 17.56 },
                    { name: '黑龙江', value: 13.23 },
                    { name: '上海', value: 33.45 },
                    { name: '江苏', value: 29.34 },
                    { name: '浙江', value: 15.23 },
                    { name: '安徽', value: 77.89 },
                    { name: '福建', value: 35.23 },
                    { name: '江西', value: 12.34 },
                    { name: '山东', value: 23.67 },
                    { name: '河南', value: 16.89 },
                    { name: '湖北', value: 19.90 },
                    { name: '湖南', value: 18.23 },
                    { name: '广东', value: 25.56 },
                    { name: '广西', value: 15.67 },
                    { name: '海南', value: 11.23 },
                    { name: '重庆', value: 26.78 },
                    { name: '四川', value: 31.23 },
                    { name: '贵州', value: 15.23 },
                    { name: '云南', value: 17.23 },
                    { name: '西藏', value: 22.89 },
                    { name: '陕西', value: 20.78 },
                    { name: '甘肃', value: 19.89 },
                    { name: '青海', value: 14.23 },
                    { name: '宁夏', value: 16.78 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 10.12 }
                ],
                2020: [
                    { name: '北京', value: 20.23 },
                    { name: '天津', value: 16.78 },
                    { name: '河北', value: 13.56 },
                    { name: '山西', value: 15.89 },
                    { name: '内蒙古', value: 14.23 },
                    { name: '辽宁', value: 19.34 },
                    { name: '吉林', value: 16.78 },
                    { name: '黑龙江', value: 12.67 },
                    { name: '上海', value: 32.34 },
                    { name: '江苏', value: 28.56 },
                    { name: '浙江', value: 14.56 },
                    { name: '安徽', value: 76.23 },
                    { name: '福建', value: 34.56 },
                    { name: '江西', value: 11.89 },
                    { name: '山东', value: 22.45 },
                    { name: '河南', value: 16.23 },
                    { name: '湖北', value: 19.12 },
                    { name: '湖南', value: 17.56 },
                    { name: '广东', value: 24.89 },
                    { name: '广西', value: 15.12 },
                    { name: '海南', value: 10.89 },
                    { name: '重庆', value: 25.90 },
                    { name: '四川', value: 30.12 },
                    { name: '贵州', value: 14.67 },
                    { name: '云南', value: 16.78 },
                    { name: '西藏', value: 22.12 },
                    { name: '陕西', value: 19.90 },
                    { name: '甘肃', value: 19.12 },
                    { name: '青海', value: 13.67 },
                    { name: '宁夏', value: 16.23 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 9.78 }
                ],
                2019: [
                    { name: '北京', value: 19.12 },
                    { name: '天津', value: 15.89 },
                    { name: '河北', value: 12.89 },
                    { name: '山西', value: 15.12 },
                    { name: '内蒙古', value: 13.67 },
                    { name: '辽宁', value: 18.56 },
                    { name: '吉林', value: 16.12 },
                    { name: '黑龙江', value: 12.12 },
                    { name: '上海', value: 31.23 },
                    { name: '江苏', value: 27.89 },
                    { name: '浙江', value: 13.89 },
                    { name: '安徽', value: 74.56 },
                    { name: '福建', value: 33.78 },
                    { name: '江西', value: 11.34 },
                    { name: '山东', value: 21.56 },
                    { name: '河南', value: 15.67 },
                    { name: '湖北', value: 18.45 },
                    { name: '湖南', value: 16.89 },
                    { name: '广东', value: 24.12 },
                    { name: '广西', value: 14.56 },
                    { name: '海南', value: 10.45 },
                    { name: '重庆', value: 25.12 },
                    { name: '四川', value: 29.34 },
                    { name: '贵州', value: 14.12 },
                    { name: '云南', value: 16.23 },
                    { name: '西藏', value: 21.45 },
                    { name: '陕西', value: 19.23 },
                    { name: '甘肃', value: 18.45 },
                    { name: '青海', value: 13.12 },
                    { name: '宁夏', value: 15.67 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 9.34 }
                ],
                2018: [
                    { name: '北京', value: 18.23 },
                    { name: '天津', value: 15.12 },
                    { name: '河北', value: 12.34 },
                    { name: '山西', value: 14.56 },
                    { name: '内蒙古', value: 13.12 },
                    { name: '辽宁', value: 17.89 },
                    { name: '吉林', value: 15.45 },
                    { name: '黑龙江', value: 11.67 },
                    { name: '上海', value: 30.12 },
                    { name: '江苏', value: 27.12 },
                    { name: '浙江', value: 13.23 },
                    { name: '安徽', value: 73.12 },
                    { name: '福建', value: 32.90 },
                    { name: '江西', value: 10.89 },
                    { name: '山东', value: 20.78 },
                    { name: '河南', value: 15.12 },
                    { name: '湖北', value: 17.89 },
                    { name: '湖南', value: 16.23 },
                    { name: '广东', value: 23.45 },
                    { name: '广西', value: 14.12 },
                    { name: '海南', value: 10.12 },
                    { name: '重庆', value: 24.45 },
                    { name: '四川', value: 28.67 },
                    { name: '贵州', value: 13.67 },
                    { name: '云南', value: 15.78 },
                    { name: '西藏', value: 20.89 },
                    { name: '陕西', value: 18.67 },
                    { name: '甘肃', value: 17.89 },
                    { name: '青海', value: 12.67 },
                    { name: '宁夏', value: 15.12 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 9.12 }
                ],
                2017: [
                    { name: '北京', value: 17.45 },
                    { name: '天津', value: 14.56 },
                    { name: '河北', value: 11.89 },
                    { name: '山西', value: 14.12 },
                    { name: '内蒙古', value: 12.67 },
                    { name: '辽宁', value: 17.23 },
                    { name: '吉林', value: 14.89 },
                    { name: '黑龙江', value: 11.23 },
                    { name: '上海', value: 29.34 },
                    { name: '江苏', value: 26.45 },
                    { name: '浙江', value: 12.67 },
                    { name: '安徽', value: 71.89 },
                    { name: '福建', value: 32.12 },
                    { name: '江西', value: 10.45 },
                    { name: '山东', value: 20.12 },
                    { name: '河南', value: 14.67 },
                    { name: '湖北', value: 17.23 },
                    { name: '湖南', value: 15.67 },
                    { name: '广东', value: 22.89 },
                    { name: '广西', value: 13.67 },
                    { name: '海南', value: 9.89 },
                    { name: '重庆', value: 23.78 },
                    { name: '四川', value: 27.89 },
                    { name: '贵州', value: 13.23 },
                    { name: '云南', value: 15.23 },
                    { name: '西藏', value: 20.23 },
                    { name: '陕西', value: 18.12 },
                    { name: '甘肃', value: 17.23 },
                    { name: '青海', value: 12.23 },
                    { name: '宁夏', value: 14.67 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 8.89 }
                ]
            },
            policyQuality: {
                2023: [
                    { name: '北京', value: 76.50 },
                    { name: '天津', value: 68.34 },
                    { name: '河北', value: 62.45 },
                    { name: '山西', value: 65.78 },
                    { name: '内蒙古', value: 60.28 },
                    { name: '辽宁', value: 73.45 },
                    { name: '吉林', value: 64.56 },
                    { name: '黑龙江', value: 58.90 },
                    { name: '上海', value: 85.67 },
                    { name: '江苏', value: 82.34 },
                    { name: '浙江', value: 59.23 },
                    { name: '安徽', value: 97.35 },
                    { name: '福建', value: 81.79 },
                    { name: '江西', value: 57.89 },
                    { name: '山东', value: 78.90 },
                    { name: '河南', value: 67.45 },
                    { name: '湖北', value: 72.34 },
                    { name: '湖南', value: 69.56 },
                    { name: '广东', value: 80.48 },
                    { name: '广西', value: 63.45 },
                    { name: '海南', value: 55.67 },
                    { name: '重庆', value: 62.87 },
                    { name: '四川', value: 88.90 },
                    { name: '贵州', value: 60.28 },
                    { name: '云南', value: 68.90 },
                    { name: '西藏', value: 75.34 },
                    { name: '陕西', value: 73.56 },
                    { name: '甘肃', value: 75.81 },
                    { name: '青海', value: 58.90 },
                    { name: '宁夏', value: 61.23 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 45.67 }
                ],
                2022: [
                    { name: '北京', value: 74.23 },
                    { name: '天津', value: 66.89 },
                    { name: '河北', value: 61.23 },
                    { name: '山西', value: 64.56 },
                    { name: '内蒙古', value: 59.12 },
                    { name: '辽宁', value: 72.34 },
                    { name: '吉林', value: 63.45 },
                    { name: '黑龙江', value: 57.78 },
                    { name: '上海', value: 84.23 },
                    { name: '江苏', value: 81.12 },
                    { name: '浙江', value: 58.12 },
                    { name: '安徽', value: 95.67 },
                    { name: '福建', value: 80.45 },
                    { name: '江西', value: 56.78 },
                    { name: '山东', value: 77.56 },
                    { name: '河南', value: 66.23 },
                    { name: '湖北', value: 71.23 },
                    { name: '湖南', value: 68.34 },
                    { name: '广东', value: 79.23 },
                    { name: '广西', value: 62.34 },
                    { name: '海南', value: 54.56 },
                    { name: '重庆', value: 61.45 },
                    { name: '四川', value: 87.56 },
                    { name: '贵州', value: 59.12 },
                    { name: '云南', value: 67.56 },
                    { name: '西藏', value: 74.23 },
                    { name: '陕西', value: 72.34 },
                    { name: '甘肃', value: 74.56 },
                    { name: '青海', value: 57.78 },
                    { name: '宁夏', value: 60.12 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 44.56 }
                ],
                2021: [
                    { name: '北京', value: 72.56 },
                    { name: '天津', value: 65.34 },
                    { name: '河北', value: 60.12 },
                    { name: '山西', value: 63.23 },
                    { name: '内蒙古', value: 58.23 },
                    { name: '辽宁', value: 71.12 },
                    { name: '吉林', value: 62.34 },
                    { name: '黑龙江', value: 56.67 },
                    { name: '上海', value: 82.89 },
                    { name: '江苏', value: 80.23 },
                    { name: '浙江', value: 57.23 },
                    { name: '安徽', value: 94.23 },
                    { name: '福建', value: 79.34 },
                    { name: '江西', value: 55.67 },
                    { name: '山东', value: 76.45 },
                    { name: '河南', value: 65.12 },
                    { name: '湖北', value: 70.12 },
                    { name: '湖南', value: 67.23 },
                    { name: '广东', value: 78.12 },
                    { name: '广西', value: 61.23 },
                    { name: '海南', value: 53.45 },
                    { name: '重庆', value: 60.34 },
                    { name: '四川', value: 86.45 },
                    { name: '贵州', value: 58.23 },
                    { name: '云南', value: 66.45 },
                    { name: '西藏', value: 73.12 },
                    { name: '陕西', value: 71.23 },
                    { name: '甘肃', value: 73.45 },
                    { name: '青海', value: 56.67 },
                    { name: '宁夏', value: 59.23 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 43.45 }
                ],
                2020: [
                    { name: '北京', value: 70.89 },
                    { name: '天津', value: 63.78 },
                    { name: '河北', value: 58.89 },
                    { name: '山西', value: 61.89 },
                    { name: '内蒙古', value: 57.12 },
                    { name: '辽宁', value: 69.89 },
                    { name: '吉林', value: 61.12 },
                    { name: '黑龙江', value: 55.45 },
                    { name: '上海', value: 81.56 },
                    { name: '江苏', value: 79.12 },
                    { name: '浙江', value: 56.12 },
                    { name: '安徽', value: 92.89 },
                    { name: '福建', value: 78.23 },
                    { name: '江西', value: 54.56 },
                    { name: '山东', value: 75.34 },
                    { name: '河南', value: 64.23 },
                    { name: '湖北', value: 69.23 },
                    { name: '湖南', value: 66.12 },
                    { name: '广东', value: 77.23 },
                    { name: '广西', value: 60.12 },
                    { name: '海南', value: 52.34 },
                    { name: '重庆', value: 59.23 },
                    { name: '四川', value: 85.34 },
                    { name: '贵州', value: 57.12 },
                    { name: '云南', value: 65.34 },
                    { name: '西藏', value: 72.23 },
                    { name: '陕西', value: 70.12 },
                    { name: '甘肃', value: 72.34 },
                    { name: '青海', value: 55.56 },
                    { name: '宁夏', value: 58.12 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 42.34 }
                ],
                2019: [
                    { name: '北京', value: 69.23 },
                    { name: '天津', value: 62.45 },
                    { name: '河北', value: 57.67 },
                    { name: '山西', value: 60.56 },
                    { name: '内蒙古', value: 56.23 },
                    { name: '辽宁', value: 68.67 },
                    { name: '吉林', value: 60.23 },
                    { name: '黑龙江', value: 54.34 },
                    { name: '上海', value: 80.23 },
                    { name: '江苏', value: 78.23 },
                    { name: '浙江', value: 55.23 },
                    { name: '安徽', value: 91.56 },
                    { name: '福建', value: 77.12 },
                    { name: '江西', value: 53.45 },
                    { name: '山东', value: 74.23 },
                    { name: '河南', value: 63.12 },
                    { name: '湖北', value: 68.12 },
                    { name: '湖南', value: 65.23 },
                    { name: '广东', value: 76.12 },
                    { name: '广西', value: 59.23 },
                    { name: '海南', value: 51.23 },
                    { name: '重庆', value: 58.12 },
                    { name: '四川', value: 84.23 },
                    { name: '贵州', value: 56.23 },
                    { name: '云南', value: 64.23 },
                    { name: '西藏', value: 71.12 },
                    { name: '陕西', value: 69.23 },
                    { name: '甘肃', value: 71.23 },
                    { name: '青海', value: 54.45 },
                    { name: '宁夏', value: 57.23 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 41.23 }
                ],
                2018: [
                    { name: '北京', value: 67.89 },
                    { name: '天津', value: 61.23 },
                    { name: '河北', value: 56.45 },
                    { name: '山西', value: 59.34 },
                    { name: '内蒙古', value: 55.12 },
                    { name: '辽宁', value: 67.45 },
                    { name: '吉林', value: 59.12 },
                    { name: '黑龙江', value: 53.23 },
                    { name: '上海', value: 79.12 },
                    { name: '江苏', value: 77.12 },
                    { name: '浙江', value: 54.12 },
                    { name: '安徽', value: 90.23 },
                    { name: '福建', value: 76.23 },
                    { name: '江西', value: 52.34 },
                    { name: '山东', value: 73.12 },
                    { name: '河南', value: 62.23 },
                    { name: '湖北', value: 67.23 },
                    { name: '湖南', value: 64.12 },
                    { name: '广东', value: 75.23 },
                    { name: '广西', value: 58.12 },
                    { name: '海南', value: 50.12 },
                    { name: '重庆', value: 57.23 },
                    { name: '四川', value: 83.12 },
                    { name: '贵州', value: 55.12 },
                    { name: '云南', value: 63.12 },
                    { name: '西藏', value: 70.23 },
                    { name: '陕西', value: 68.12 },
                    { name: '甘肃', value: 70.12 },
                    { name: '青海', value: 53.34 },
                    { name: '宁夏', value: 56.12 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 40.12 }
                ],
                2017: [
                    { name: '北京', value: 66.56 },
                    { name: '天津', value: 60.12 },
                    { name: '河北', value: 55.23 },
                    { name: '山西', value: 58.12 },
                    { name: '内蒙古', value: 54.23 },
                    { name: '辽宁', value: 66.23 },
                    { name: '吉林', value: 58.23 },
                    { name: '黑龙江', value: 52.12 },
                    { name: '上海', value: 78.23 },
                    { name: '江苏', value: 76.23 },
                    { name: '浙江', value: 53.23 },
                    { name: '安徽', value: 89.12 },
                    { name: '福建', value: 75.12 },
                    { name: '江西', value: 51.23 },
                    { name: '山东', value: 72.23 },
                    { name: '河南', value: 61.12 },
                    { name: '湖北', value: 66.12 },
                    { name: '湖南', value: 63.23 },
                    { name: '广东', value: 74.12 },
                    { name: '广西', value: 57.23 },
                    { name: '海南', value: 49.23 },
                    { name: '重庆', value: 56.12 },
                    { name: '四川', value: 82.23 },
                    { name: '贵州', value: 54.23 },
                    { name: '云南', value: 62.23 },
                    { name: '西藏', value: 69.12 },
                    { name: '陕西', value: 67.23 },
                    { name: '甘肃', value: 69.23 },
                    { name: '青海', value: 52.23 },
                    { name: '宁夏', value: 55.23 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 39.23 }
                ]
            },
            coordination: {
                2023: [
                    { name: '北京', value: 55.87 },
                    { name: '天津', value: 47.23 },
                    { name: '河北', value: 38.90 },
                    { name: '山西', value: 41.23 },
                    { name: '内蒙古', value: 77.42 },
                    { name: '辽宁', value: 51.23 },
                    { name: '吉林', value: 39.78 },
                    { name: '黑龙江', value: 34.56 },
                    { name: '上海', value: 58.90 },
                    { name: '江苏', value: 54.67 },
                    { name: '浙江', value: 35.67 },
                    { name: '安徽', value: 77.48 },
                    { name: '福建', value: 49.76 },
                    { name: '江西', value: 32.45 },
                    { name: '山东', value: 52.34 },
                    { name: '河南', value: 43.56 },
                    { name: '湖北', value: 48.90 },
                    { name: '湖南', value: 45.67 },
                    { name: '广东', value: 33.77 },
                    { name: '广西', value: 39.89 },
                    { name: '海南', value: 29.90 },
                    { name: '重庆', value: 48.80 },
                    { name: '四川', value: 65.45 },
                    { name: '贵州', value: 77.42 },
                    { name: '云南', value: 44.56 },
                    { name: '西藏', value: 51.23 },
                    { name: '陕西', value: 49.78 },
                    { name: '甘肃', value: 52.78 },
                    { name: '青海', value: 33.45 },
                    { name: '宁夏', value: 36.78 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 21.34 }
                ],
                2022: [
                    { name: '北京', value: 54.56 },
                    { name: '天津', value: 46.12 },
                    { name: '河北', value: 37.89 },
                    { name: '山西', value: 40.12 },
                    { name: '内蒙古', value: 76.23 },
                    { name: '辽宁', value: 50.12 },
                    { name: '吉林', value: 38.67 },
                    { name: '黑龙江', value: 33.45 },
                    { name: '上海', value: 57.78 },
                    { name: '江苏', value: 53.45 },
                    { name: '浙江', value: 34.56 },
                    { name: '安徽', value: 76.34 },
                    { name: '福建', value: 48.67 },
                    { name: '江西', value: 31.34 },
                    { name: '山东', value: 51.23 },
                    { name: '河南', value: 42.45 },
                    { name: '湖北', value: 47.78 },
                    { name: '湖南', value: 44.56 },
                    { name: '广东', value: 32.56 },
                    { name: '广西', value: 38.78 },
                    { name: '海南', value: 28.78 },
                    { name: '重庆', value: 47.67 },
                    { name: '四川', value: 64.34 },
                    { name: '贵州', value: 76.23 },
                    { name: '云南', value: 43.45 },
                    { name: '西藏', value: 50.12 },
                    { name: '陕西', value: 48.67 },
                    { name: '甘肃', value: 51.67 },
                    { name: '青海', value: 32.34 },
                    { name: '宁夏', value: 35.67 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 20.23 }
                ],
                2021: [
                    { name: '北京', value: 53.34 },
                    { name: '天津', value: 45.23 },
                    { name: '河北', value: 36.78 },
                    { name: '山西', value: 39.23 },
                    { name: '内蒙古', value: 75.12 },
                    { name: '辽宁', value: 49.23 },
                    { name: '吉林', value: 37.56 },
                    { name: '黑龙江', value: 32.34 },
                    { name: '上海', value: 56.67 },
                    { name: '江苏', value: 52.34 },
                    { name: '浙江', value: 33.45 },
                    { name: '安徽', value: 75.23 },
                    { name: '福建', value: 47.56 },
                    { name: '江西', value: 30.23 },
                    { name: '山东', value: 50.12 },
                    { name: '河南', value: 41.34 },
                    { name: '湖北', value: 46.67 },
                    { name: '湖南', value: 43.45 },
                    { name: '广东', value: 31.45 },
                    { name: '广西', value: 37.67 },
                    { name: '海南', value: 27.67 },
                    { name: '重庆', value: 46.56 },
                    { name: '四川', value: 63.23 },
                    { name: '贵州', value: 75.12 },
                    { name: '云南', value: 42.34 },
                    { name: '西藏', value: 49.23 },
                    { name: '陕西', value: 47.56 },
                    { name: '甘肃', value: 50.56 },
                    { name: '青海', value: 31.23 },
                    { name: '宁夏', value: 34.56 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 19.12 }
                ],
                2020: [
                    { name: '北京', value: 52.23 },
                    { name: '天津', value: 44.12 },
                    { name: '河北', value: 35.67 },
                    { name: '山西', value: 38.12 },
                    { name: '内蒙古', value: 74.23 },
                    { name: '辽宁', value: 48.12 },
                    { name: '吉林', value: 36.45 },
                    { name: '黑龙江', value: 31.23 },
                    { name: '上海', value: 55.56 },
                    { name: '江苏', value: 51.23 },
                    { name: '浙江', value: 32.34 },
                    { name: '安徽', value: 74.12 },
                    { name: '福建', value: 46.45 },
                    { name: '江西', value: 29.12 },
                    { name: '山东', value: 49.23 },
                    { name: '河南', value: 40.23 },
                    { name: '湖北', value: 45.56 },
                    { name: '湖南', value: 42.34 },
                    { name: '广东', value: 30.34 },
                    { name: '广西', value: 36.56 },
                    { name: '海南', value: 26.56 },
                    { name: '重庆', value: 45.45 },
                    { name: '四川', value: 62.12 },
                    { name: '贵州', value: 74.23 },
                    { name: '云南', value: 41.23 },
                    { name: '西藏', value: 48.12 },
                    { name: '陕西', value: 46.45 },
                    { name: '甘肃', value: 49.45 },
                    { name: '青海', value: 30.12 },
                    { name: '宁夏', value: 33.45 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 18.23 }
                ],
                2019: [
                    { name: '北京', value: 51.12 },
                    { name: '天津', value: 43.23 },
                    { name: '河北', value: 34.56 },
                    { name: '山西', value: 37.23 },
                    { name: '内蒙古', value: 73.12 },
                    { name: '辽宁', value: 47.23 },
                    { name: '吉林', value: 35.34 },
                    { name: '黑龙江', value: 30.12 },
                    { name: '上海', value: 54.45 },
                    { name: '江苏', value: 50.12 },
                    { name: '浙江', value: 31.23 },
                    { name: '安徽', value: 73.23 },
                    { name: '福建', value: 45.34 },
                    { name: '江西', value: 28.23 },
                    { name: '山东', value: 48.12 },
                    { name: '河南', value: 39.12 },
                    { name: '湖北', value: 44.45 },
                    { name: '湖南', value: 41.23 },
                    { name: '广东', value: 29.23 },
                    { name: '广西', value: 35.45 },
                    { name: '海南', value: 25.45 },
                    { name: '重庆', value: 44.34 },
                    { name: '四川', value: 61.23 },
                    { name: '贵州', value: 73.12 },
                    { name: '云南', value: 40.12 },
                    { name: '西藏', value: 47.23 },
                    { name: '陕西', value: 45.34 },
                    { name: '甘肃', value: 48.34 },
                    { name: '青海', value: 29.23 },
                    { name: '宁夏', value: 32.34 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 17.34 }
                ],
                2018: [
                    { name: '北京', value: 50.23 },
                    { name: '天津', value: 42.12 },
                    { name: '河北', value: 33.45 },
                    { name: '山西', value: 36.12 },
                    { name: '内蒙古', value: 72.23 },
                    { name: '辽宁', value: 46.12 },
                    { name: '吉林', value: 34.23 },
                    { name: '黑龙江', value: 29.23 },
                    { name: '上海', value: 53.34 },
                    { name: '江苏', value: 49.23 },
                    { name: '浙江', value: 30.12 },
                    { name: '安徽', value: 72.12 },
                    { name: '福建', value: 44.23 },
                    { name: '江西', value: 27.12 },
                    { name: '山东', value: 47.23 },
                    { name: '河南', value: 38.23 },
                    { name: '湖北', value: 43.34 },
                    { name: '湖南', value: 40.12 },
                    { name: '广东', value: 28.12 },
                    { name: '广西', value: 34.34 },
                    { name: '海南', value: 24.34 },
                    { name: '重庆', value: 43.23 },
                    { name: '四川', value: 60.12 },
                    { name: '贵州', value: 72.23 },
                    { name: '云南', value: 39.23 },
                    { name: '西藏', value: 46.12 },
                    { name: '陕西', value: 44.23 },
                    { name: '甘肃', value: 47.23 },
                    { name: '青海', value: 28.12 },
                    { name: '宁夏', value: 31.23 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 16.45 }
                ],
                2017: [
                    { name: '北京', value: 49.12 },
                    { name: '天津', value: 41.23 },
                    { name: '河北', value: 32.34 },
                    { name: '山西', value: 35.23 },
                    { name: '内蒙古', value: 71.12 },
                    { name: '辽宁', value: 45.23 },
                    { name: '吉林', value: 33.12 },
                    { name: '黑龙江', value: 28.12 },
                    { name: '上海', value: 52.23 },
                    { name: '江苏', value: 48.12 },
                    { name: '浙江', value: 29.23 },
                    { name: '安徽', value: 71.23 },
                    { name: '福建', value: 43.12 },
                    { name: '江西', value: 26.23 },
                    { name: '山东', value: 46.12 },
                    { name: '河南', value: 37.12 },
                    { name: '湖北', value: 42.23 },
                    { name: '湖南', value: 39.23 },
                    { name: '广东', value: 27.23 },
                    { name: '广西', value: 33.23 },
                    { name: '海南', value: 23.23 },
                    { name: '重庆', value: 42.12 },
                    { name: '四川', value: 59.23 },
                    { name: '贵州', value: 71.12 },
                    { name: '云南', value: 38.12 },
                    { name: '西藏', value: 45.23 },
                    { name: '陕西', value: 43.12 },
                    { name: '甘肃', value: 46.12 },
                    { name: '青海', value: 27.23 },
                    { name: '宁夏', value: 30.12 },
                    { name: '台湾', value: 0.00 },
                    { name: '南海诸岛', value: 0.00 },
                    { name: '新疆', value: 15.56 }
                ]
            }
        };

        function updateMapData(type) {
            var option = {
                tooltip: {
                    trigger: 'item',
                    confine: true,
                    position: function (point, params, dom, rect, size) {
                        return ['45%', '45%'];
                    },
                    formatter: params => {
                        return `${params.name}<br/>${params.seriesName}：${params.value?.toFixed(2) || '暂无数据'}`;
                    },
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    padding: [5, 10],
                    textStyle: {
                        color: '#333'
                    }
                },
                visualMap: {
                    type: 'continuous',
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['#fff7bc', '#fec44f', '#ec7014', '#993404']
                    },
                    left: 'left',
                    top: 'bottom',
                    textStyle: {
                        color: '#000'
                    },
                    formatter: value => value.toFixed(1)
                },
                series: [{
                    name: buttons.find(b => b.id === type).text,
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    data: mapData[type][currentYear], // 修改这行
                    label: {
                        show: true,
                        fontSize: 8,
                        color: '#000'
                    }
                }]
            };

            // 根据不同指标调整visualMap的范围和文本
            switch (type) {
                case 'totalScore':
                    option.visualMap.min = 15;
                    option.visualMap.max = 60;
                    option.visualMap.text = ['发展指数高', '发展指数低'];
                    break;
                case 'policyCount':
                    option.visualMap.min = 10;
                    option.visualMap.max = 90;
                    option.visualMap.text = ['政策数量多', '政策数量少'];
                    break;
                case 'policyQuality':
                    option.visualMap.min = 55;
                    option.visualMap.max = 100;
                    option.visualMap.text = ['政策质量高', '政策质量低'];
                    break;
                case 'coordination':
                    option.visualMap.min = 5;
                    option.visualMap.max = 85;
                    option.visualMap.text = ['协同程度高', '协同程度低'];
                    break;
            }

            // 完全重置图表配置
            myChart.clear();
            myChart.setOption(option, true);
        }

        var option = {
            // title: {
            //     text: '2023年全国各省份健康中国行动得分情况',
            //     left: 'center',
            //     top: 'top'
            // },
            tooltip: {
                trigger: 'item',
                confine: true,
                position: function (point, params, dom, rect, size) {
                    // 计算tooltip的理想位置，确保更居中
                    return ['45%', '45%'];
                },
                formatter: params => {
                    return `${params.name}<br/>${params.seriesName}：${params.value?.toFixed(2) || '暂无数据'}`;
                },
                backgroundColor: 'rgba(255, 255, 255, 0.7)', // 增加透明度
                borderColor: '#ccc',
                borderWidth: 1,
                padding: [5, 10],
                textStyle: {
                    color: '#333'
                }
            },
            visualMap: {
                type: 'continuous',
                min: 15,
                max: 70,
                text: ['高', '低'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['#fff7bc', '#fec44f', '#ec7014', '#993404']
                },
                left: 'left',
                top: 'bottom',
                textStyle: {
                    color: '#000'
                },
                formatter: value => value.toFixed(1)
            },
            geo: {
                map: 'china',
                roam: false,
                center: [104.5, 35.5],
                zoom: 1,
                label: {
                    show: true,
                    fontSize: 8,
                    color: '#000'
                },
                roam: false,
                itemStyle: {
                    borderColor: '#666',
                    borderWidth: 0.5,
                    areaColor: '#fff'
                },
                emphasis: {
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    itemStyle: {
                        areaColor: '#ff9933'
                    }
                }
            },
            // 在初始化 option 中修改
            series: [{
                name: `${currentYear}年健康中国建设发展指数`,
                type: 'map',
                mapType: 'china',
                roam: false,
                data: mapData.totalScore[currentYear], // 修改这行
                label: {
                    show: true,
                    fontSize: 8,
                    color: '#000'
                }
            }]
        };
        myChart.setOption(option);

        // 监听地图的点击事件
        myChart.on('click', function (params) {
            if (params.name) {
                createProvincePopup(params.name);
            }
        });

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    // 定义内蒙古数据
    const nmData = [
        { "省市名称": "内蒙古", "年份": "2016年", "健康中国建设发展指数": 13.8480981247, "政策数量": 3.6556266988, "政策质量": 43.7808290696, "协同机制": 0.4274898156, "防控重大疾病": 5, "全方位干预健康影响因素": 4, "维护全生命周期健康": 2, "按时完成率": 15.2173913043, "总体完成率": 93.4782608696, "平均完成月数": 33.9302325581, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 6 },
        { "省市名称": "内蒙古", "年份": "2017年", "健康中国建设发展指数": 19.5624813032, "政策数量": 5.4553124008, "政策质量": 50.1096438741, "协同机制": 19.1824665241, "防控重大疾病": 5, "全方位干预健康影响因素": 3, "维护全生命周期健康": 4, "按时完成率": 28.2608695652, "总体完成率": 93.4782608696, "平均完成月数": 23.8604651163, "发文联合率": 14.2857142857, "平均协作规模": 1.1428571429, "参与部门数量": 9 },
        { "省市名称": "内蒙古", "年份": "2018年", "健康中国建设发展指数": 17.361501082, "政策数量": 9.7536682133, "政策质量": 50.1096438741, "协同机制": 7.2113283235, "防控重大疾病": 25, "全方位干预健康影响因素": 16, "维护全生命周期健康": 18, "按时完成率": 28.2608695652, "总体完成率": 93.4782608696, "平均完成月数": 23.8604651163, "发文联合率": 23.8095238095, "平均协作规模": 1.6825396825, "参与部门数量": 27 },
        { "省市名称": "内蒙古", "年份": "2019年", "健康中国建设发展指数": 24.1681953139, "政策数量": 8.1232892647, "政策质量": 50.2525049213, "协同机制": 31.181746332, "防控重大疾病": 16, "全方位干预健康影响因素": 14, "维护全生命周期健康": 7, "按时完成率": 47.8260869565, "总体完成率": 86.9565217391, "平均完成月数": 17.575, "发文联合率": 16.6666666667, "平均协作规模": 1.5238095238, "参与部门数量": 17 },
        { "省市名称": "内蒙古", "年份": "2020年", "健康中国建设发展指数": 37.3604998637, "政策数量": 14.6814534833, "政策质量": 63.5294995496, "协同机制": 54.9603852824, "防控重大疾病": 25, "全方位干预健康影响因素": 14, "维护全生命周期健康": 16, "按时完成率": 47.8260869565, "总体完成率": 86.9565217391, "平均完成月数": 15.275, "发文联合率": 22.4137931034, "平均协作规模": 2.0862068966, "参与部门数量": 30 },
        { "省市名称": "内蒙古", "年份": "2021年", "健康中国建设发展指数": 28.053597208, "政策数量": 9.2935455093, "政策质量": 56.4423145234, "协同机制": 36.8554910526, "防控重大疾病": 8, "全方位干预健康影响因素": 15, "维护全生命周期健康": 19, "按时完成率": 41.3043478261, "总体完成率": 71.7391304348, "平均完成月数": 13.2727272727, "发文联合率": 21.2765957447, "平均协作规模": 1.9574468085, "参与部门数量": 26 },
        { "省市名称": "内蒙古", "年份": "2022年", "健康中国建设发展指数": 30.762451122, "政策数量": 12.6321717378, "政策质量": 56.0781690892, "协同机制": 41.241867553, "防控重大疾病": 3, "全方位干预健康影响因素": 11, "维护全生命周期健康": 7, "按时完成率": 28.2608695652, "总体完成率": 67.3913043478, "平均完成月数": 13.4193548387, "发文联合率": 9.375, "平均协作规模": 1.6875, "参与部门数量": 23 },
        { "省市名称": "内蒙古", "年份": "2023年", "健康中国建设发展指数": 43.7691021145, "政策数量": 16.4221924973, "政策质量": 60.2763015452, "协同机制": 77.4177952975, "防控重大疾病": 13, "全方位干预健康影响因素": 32, "维护全生命周期健康": 31, "按时完成率": 58.6956521739, "总体完成率": 65.2173913043, "平均完成月数": 5.6666666667, "发文联合率": 10.7438016529, "平均协作规模": 1.173553719, "参与部门数量": 24 }
    ];

    function createProvincePopup(province) {
        // 使用fetch加载对应省份的数据
        let provinceData;

        if (province === '内蒙古') {
            provinceData = nmData;
        } else if (province === '安徽') {
            provinceData = [
                { "省市名称": "安徽", "年份": "2016年", "健康中国建设发展指数": 41.9978584275, "政策数量": 24.2529053219, "政策质量": 49.548572971, "协同机制": 59.8673247292, "防控重大疾病": 0, "全方位干预健康影响因素": 5, "维护全生命周期健康": 2, "按时完成率": 21.7391304348, "总体完成率": 97.8260869565, "平均完成月数": 33.3777777778, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 3 },
                { "省市名称": "安徽", "年份": "2017年", "健康中国建设发展指数": 39.1809892548, "政策数量": 28.0691106009, "政策质量": 61.1064357826, "协同机制": 44.9190013932, "防控重大疾病": 18, "全方位干预健康影响因素": 14, "维护全生命周期健康": 10, "按时完成率": 50.0, "总体完成率": 97.8260869565, "平均完成月数": 24.4, "发文联合率": 17.3913043478, "平均协作规模": 1.2608695652, "参与部门数量": 12 },
                { "省市名称": "安徽", "年份": "2018年", "健康中国建设发展指数": 44.569907586, "政策数量": 30.1833758144, "政策质量": 61.1064357826, "协同机制": 56.5327288563, "防控重大疾病": 6, "全方位干预健康影响因素": 11, "维护全生命周期健康": 2, "按时完成率": 50.0, "总体完成率": 97.8260869565, "平均完成月数": 24.4, "发文联合率": 29.1666666667, "平均协作规模": 1.5, "参与部门数量": 16 },
                { "省市名称": "安徽", "年份": "2019年", "健康中国建设发展指数": 58.1998540941, "政策数量": 54.1496466337, "政策质量": 61.3240866555, "协同机制": 64.3206112561, "防控重大疾病": 8, "全方位干预健康影响因素": 14, "维护全生命周期健康": 11, "按时完成率": 56.5217391304, "总体完成率": 89.1304347826, "平均完成月数": 18.2195121951, "发文联合率": 19.4444444444, "平均协作规模": 1.7222222222, "参与部门数量": 24 },
                { "省市名称": "安徽", "年份": "2020年", "健康中国建设发展指数": 71.8425803002, "政策数量": 93.0057470726, "政策质量": 73.8645356701, "协同机制": 57.8925584476, "防控重大疾病": 9, "全方位干预健康影响因素": 11, "维护全生命周期健康": 11, "按时完成率": 43.4782608696, "总体完成率": 84.7826086957, "平均完成月数": 18.5384615385, "发文联合率": 21.875, "平均协作规模": 1.6875, "参与部门数量": 23 },
                { "省市名称": "安徽", "年份": "2021年", "健康中国建设发展指数": 67.3875817514, "政策数量": 73.8936942405, "政策质量": 84.9304809287, "协同机制": 61.9930132046, "防控重大疾病": 7, "全方位干预健康影响因素": 15, "维护全生命周期健康": 22, "按时完成": 45.652173913, "总体完成率": 80.4347826087, "平均完成月数": 14.3513513514, "发文联合率": 32.6086956522, "平均协作规模": 2.2826086957, "参与部门数量": 31 },
                { "省市名称": "安徽", "年份": "2022年", "健康中国建设发展指数": 68.0808548686, "政策数量": 75.4343704986, "政策质量": 92.5848505098, "协同机制": 62.1521907227, "防控重大疾病": 4, "全方位干预健康影响因素": 20, "维护全生命周期健康": 16, "按时完成率": 43.4782608696, "总体完成率": 78.2608695652, "平均完成月数": 10.25, "发文联合率": 36.170212766, "平均协作规模": 2.1063829787, "参与部门数量": 29 },
                { "省市名称": "安徽", "年份": "2023年", "健康中国建设发展指数": 81.5569409048, "政策数量": 81.9258155176, "政策质量": 97.3474325483, "协同机制": 77.4844711643, "防控重大疾病": 20, "全方位干预健康影响因素": 16, "维护全生命周期健康": 19, "按时完成率": 67.3913043478, "总体完成率": 69.5652173913, "平均完成月数": 5.4375, "发文联合率": 33.3333333333, "平均协作规模": 2.1290322581, "参与部门数量": 43 }
            ];
        } else if (province === '北京') {
            provinceData = [
                { "省市名称": "北京", "年份": "2016年", "健康中国建设发展指数": 15.8438378339, "政策数量": 2.1142652135, "政策质量": 49.2605334365, "协同机制": 0.8549796312, "防控重大疾病": 2, "全方位干预健康影响因素": 9, "维护全生命周期健康": 16, "按时完成率": 32.6086956522, "总体完成率": 97.8260869565, "平均完成月数": 24.8888888889, "发文联合率": 41.3793103448, "平均协作规模": 1.9310344828, "参与部门数量": 19 },
                { "省市名称": "北京", "年份": "2017年", "健康中国建设发展指数": 27.7725492181, "政策数量": 19.09674701, "政策质量": 70.8605496054, "协同机制": 19.0663923159, "防控重大疾病": 9, "全方位干预健康影响因素": 15, "维护全生命周期健康": 19, "按时完成率": 56.5217391304, "总体完成率": 97.8260869565, "平均完成月数": 18.9333333333, "发文联合率": 38.0, "平均协作规模": 1.94, "参与部门数量": 27 },
                { "省市名称": "北京", "年份": "2018年", "健康中国建设发展指数": 28.957718065, "政策数量": 7.8516653918, "政策质量": 70.8605496054, "协同机制": 31.5333287825, "防控重大疾病": 5, "全方位干预健康影响因素": 17, "维护全生命周期健康": 8, "按时完成率": 56.5217391304, "总体完成率": 97.8260869565, "平均完成月数": 18.9333333333, "发文联合率": 12.5, "平均协作规模": 1.21875, "参与部门数量": 12 },
                { "省市名称": "北京", "年份": "2019年", "健康中国建设发展指数": 29.6704614053, "政策数量": 12.8381269154, "政策质量": 73.4820918211, "协同机制": 32.9968710927, "防控重大疾病": 13, "全方位干预健康影响因素": 27, "维护全生命周期健康": 23, "按时完成率": 69.5652173913, "总体完成率": 97.8260869565, "平均完成月数": 12.9333333333, "发文联合率": 23.5294117647, "平均协作规模": 1.8823529412, "参与部门数量": 32 },
                { "省市名称": "北京", "年份": "2020年", "健康中国建设发展指数": 28.2246408162, "政策数量": 12.5961837829, "政策质量": 62.8473752944, "协同机制": 33.4022584184, "防控重大疾病": 14, "全方位干预健康影响因素": 15, "维护全生命周期健康": 22, "按时完成率": 54.347826087, "总体完成率": 95.652173913, "平均完成月数": 13.6136363636, "发文联合率": 22.8070175439, "平均协作规模": 1.4736842105, "参与部门数量": 18 },
                { "省市名称": "北京", "年份": "2021年", "健康中国建设发展指数": 37.1853810731, "政策数量": 15.8719770678, "政策质量": 63.7477836364, "协同机制": 52.8508541234, "防控重大疾病": 6, "全方位干预健康影响因素": 21, "维护全生命周期健康": 36, "按时完成率": 67.3913043478, "总体完成率": 95.652173913, "平均完成月数": 10.3863636364, "发文联合率": 36.231884058, "平均协作规模": 2.2753623188, "参与部门数量": 34 },
                { "省市名称": "北京", "年份": "2022年", "健康中国建设发展指数": 36.0005047444, "政策数量": 13.5499961873, "政策质量": 62.5929484422, "协同机制": 51.147874668, "防控重大疾病": 7, "全方位干预健康影响因素": 15, "维护全生命周期健康": 40, "按时完成率": 47.8260869565, "总体完成率": 84.7826086957, "平均完成月数": 10.7948717949, "发文联合率": 41.5384615385, "平均协作规模": 2.2615384615, "参与部门数量": 38 },
                { "省市名称": "北京", "年份": "2023年", "健康中国建设发展指数": 40.7501314462, "政策数量": 23.7836644097, "政策质量": 76.4974888201, "协同机制": 55.8656118714, "防控重大疾病": 22, "全方位干预健康影响因素": 23, "维护全生命周期健康": 51, "按时完成率": 71.7391304348, "总体完成率": 76.0869565217, "平均完成月数": 6.4571428571, "发文联合率": 24.7706422018, "平均协作规模": 1.9036697248, "参与部门数量": 49 }
            ];
        } else if (province === '重庆') {
            provinceData = [
                { "省市名称": "重庆", "年份": "2016年", "健康中国建设发展指数": 23.3885061425, "政策数量": 8.6787366465, "政策质量": 59.0090886418, "协同机制": 23.5702546821, "防控重大疾病": 0, "全方位干预健康影响因素": 2, "维护全生命周期健康": 4, "按时完成率": 10.8695652174, "总体完成率": 89.1304347826, "平均完成月数": 42.7804878049, "发文联合率": 12.5, "平均协作规模": 1.25, "参与部门数量": 7 },
                { "省市名称": "重庆", "年份": "2017年", "健康中国建设发展指数": 27.5682458824, "政策数量": 12.7194287116, "政策质量": 66.8158960751, "协同机制": 28.6920052849, "防控重大疾病": 0, "全方位干预健康影响因素": 3, "维护全生命周期健康": 6, "按时完成率": 19.5652173913, "总体完成率": 89.1304347826, "平均完成月数": 34.7317073171, "发文联合率": 11.1111111111, "平均协作规模": 1.1111111111, "参与部门数量": 6 },
                { "省市名称": "重庆", "年份": "2018年", "健康中国建设发展指数": 24.7888176441, "政策数量": 9.2202239029, "政策质量": 66.8158960751, "协同机制": 23.6213031214, "防控重大疾病": 3, "全方位干预健康影响因素": 28, "维护全生命周期健康": 12, "按时完成率": 19.5652173913, "总体完成率": 89.1304347826, "平均完成月数": 34.7317073171, "发文联合率": 18.6046511628, "平均协作规模": 1.7441860465, "参与部门数量": 26 },
                { "省市名称": "重庆", "年份": "2019年", "健康中国建设发展指数": 35.7279499619, "政策数量": 15.3734454501, "政策质量": 77.9626848883, "协同机制": 43.8089270249, "防控重大疾病": 4, "全方位干预健康影响因素": 20, "维护全生命周期健康": 8, "按时完成率": 43.4782608696, "总体完成率": 89.1304347826, "平均完成月数": 19.9024390244, "发文联合率": 18.4210526316, "平均协作规模": 1.6315789474, "参与部门数量": 18 },
                { "省市名称": "重庆", "年份": "2020年", "健康中国建设发展指数": 37.4291358005, "政策数量": 17.1242583338, "政策质量": 63.083896101, "协同机制": 51.6350821464, "防控重大疾病": 7, "全方位干预健康影响因素": 14, "维护全生命周期健康": 9, "按时完成率": 34.7826086957, "总体完成率": 78.2608695652, "平均完成月数": 17.25, "发文联合率": 5.5555555556, "平均协作规模": 1.4722222222, "参与部门数量": 22 },
                { "省市名称": "重庆", "年份": "2021年", "健康中国建设发展指数": 39.3394831073, "政策数量": 22.1369043769, "政策质量": 83.3504264988, "协同机制": 47.0053664552, "防控重大疾病": 2, "全方位干预健康影响因素": 21, "维护全生命周期健康": 14, "按时完成率": 41.3043478261, "总体完成率": 73.9130434783, "平均完成月数": 14.2058823529, "发文联合率": 11.6279069767, "平均协作规模": 1.3720930233, "参与部门数量": 21 },
                { "省市名称": "重庆", "年份": "2022年", "健康中国建设发展指数": 40.9204371925, "政策数量": 24.4152443915, "政策质量": 77.4228702386, "协同机制": 49.6072922431, "防控重大疾病": 1, "全方位干预健康影响因素": 23, "维护全生命周期健康": 12, "按时完成率": 39.1304347826, "总体完成率": 71.7391304348, "平均完成月数": 10.4242424242, "发文联合率": 10.8695652174, "平均协作规模": 1.5869565217, "参与部门数量": 26 },
                { "省市名称": "重庆", "年份": "2023年", "健康中国建设发展指数": 39.3099164542, "政策数量": 28.4709718443, "政策质量": 62.8700503195, "协同机制": 48.8027137598, "防控重大疾病": 6, "全方位干预健康影响因素": 33, "维护全生命周期健康": 20, "按时完成率": 63.0434782609, "总体完成率": 67.3913043478, "平均完成月数": 4.0, "发文联合率": 18.75, "平均协作规模": 1.475, "参与部门数量": 28 }
            ];
        } else if (province === '福建') {
            provinceData = [
                { "省市名称": "福建", "年份": "2016年", "健康中国建设发展指数": 34.215870854, "政策数量": 8.9416323463, "政策质量": 59.0362514611, "协同机制": 46.9924233565, "防控重大疾病": 1, "全方位干预健康影响因素": 6, "维护全生命周期健康": 10, "按时完成率": 39.1304347826, "总体完成率": 89.1304347826, "平均完成月数": 29.4634146341, "发文联合率": 5.5555555556, "平均协作规模": 1.0555555556, "参与部门数量": 6 },
                { "省市名称": "福建", "年份": "2017年", "健康中国建设发展指数": 37.9589305935, "政策数量": 16.2605386549, "政策质量": 76.8348111936, "协同机制": 48.6056723334, "防控重大疾病": 9, "全方位干预健康影响因素": 2, "维护全生命周期健康": 10, "按时完成率": 41.3043478261, "总体完成率": 89.1304347826, "平均完成月数": 26.1951219512, "发文联合率": 20.0, "平均协作规模": 1.28, "参与部门数量": 10 },
                { "省市名称": "福建", "年份": "2018年", "健康中国建设发展指数": 24.9173899563, "政策数量": 10.8418746783, "政策质量": 76.8348111936, "协同机制": 15.5421907254, "防控重大疾病": 8, "全方位干预健康影响因素": 4, "维护全生命周期健康": 6, "按时完成率": 41.3043478261, "总体完成率": 89.1304347826, "平均完成月数": 26.1951219512, "发文联合率": 26.0869565217, "平均协作规模": 2.3913043478, "参与部门数量": 22 },
                { "省市名称": "福建", "年份": "2019年", "健康中国建设发展指数": 38.7230776079, "政策数量": 23.7149142864, "政策质量": 87.3452134359, "协同机制": 41.4219721516, "防控重大疾病": 2, "全方位干预健康影响因素": 8, "维护全生命周期健康": 5, "按时完成率": 34.7826086957, "总体完成率": 89.1304347826, "平均完成月数": 19.2195121951, "发文联合率": 35.2941176471, "平均协作规模": 2.0588235294, "参与部门数量": 15 },
                { "省市名称": "福建", "年份": "2020年", "健康中国建设发展指数": 31.7165373664, "政策数量": 20.468801742, "政策质量": 76.0351371491, "协同机制": 28.2755941682, "防控重大疾病": 4, "全方位干预健康影响因素": 26, "维护全生命周期健康": 19, "按时完成率": 56.5217391304, "总体完成率": 89.1304347826, "平均完成月数": 13.4634146341, "发文联合率": 41.5094339623, "平均协作规模": 1.7547169811, "参与部门数量": 19 },
                { "省市名称": "福建", "年份": "2021年", "健康中国建设发展指数": 43.0622702382, "政策数量": 21.3283647308, "政策质量": 85.737258891, "协同机制": 56.1094223032, "防控重大疾病": 8, "全方位干预健康影响因素": 23, "维护全生命周期健康": 15, "按时完成率": 50.0, "总体完成率": 86.9565217391, "平均完成月数": 11.85, "发文联合率": 38.0, "平均协作规模": 1.84, "参与部门数量": 27 },
                { "省市名称": "福建", "年份": "2022年", "健康中国建设发展指数": 43.090656739, "政策数量": 21.4208784149, "政策质量": 68.025162299, "协同机制": 60.6606244837, "防控重大疾病": 5, "全方位干预健康影响因素": 16, "维护全生命周期健康": 28, "按时完成率": 60.8695652174, "总体完成率": 84.7826086957, "平均完成月数": 8.358974359, "发文联合率": 34.375, "平均协作规模": 2.34375, "参与部门数量": 34 },
                { "省市名称": "福建", "年份": "2023年", "健康中国建设发展指数": 45.8542874504, "政策数量": 37.0585652613, "政策质量": 81.7913016897, "协同机制": 49.7589954633, "防控重大疾病": 10, "全方位干预健康影响因素": 27, "维护全生命周期健康": 22, "按时完成率": 63.0434782609, "总体完成率": 76.0869565217, "平均完成月数": 6.9428571429, "发文联合率": 25.2873563218, "平均协作规模": 2.1724137931, "参与部门数量": 45 }
            ];
        } else if (province === '甘肃') {
            provinceData = [

                { "省市名称": "甘肃", "年份": "2016年", "健康中国建设发展指数": 17.423574177, "政策数量": 5.5366769531, "政策质量": 58.5225889204, "协同机制": 6.2675730157, "防控重大疾病": 1, "全方位干预健康影响因素": 2, "维护全生命周期健康": 4, "按时完成率": 13.0434782609, "总体完成率": 91.3043478261, "平均完成月数": 39.4047619048, "发文联合率": 14.2857142857, "平均协作规模": 1.5714285714, "参与部门数量": 8 },
                { "省市名称": "甘肃", "年份": "2017年", "健康中国建设发展指数": 23.1950147472, "政策数量": 9.592014371, "政策质量": 60.935554896, "协同机制": 20.0359815723, "防控重大疾病": 2, "全方位干预健康影响因素": 4, "维护全生命周期健康": 3, "按时完成率": 23.9130434783, "总体完成率": 91.3043478261, "平均完成月数": 33.7142857143, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 4 },
                { "省市名称": "甘肃", "年份": "2018年", "健康中国建设发展指数": 32.3777781168, "政策数量": 8.3013241913, "政策质量": 60.935554896, "协同机制": 47.0248808482, "防控重大疾病": 0, "全方位干预健康影响因素": 5, "维护全生命周期健康": 7, "按时完成率": 23.9130434783, "总体完成率": 91.3043478261, "平均完成月数": 33.7142857143, "发文联合率": 7.1428571429, "平均协作规模": 1.0714285714, "参与部门数量": 7 },
                { "省市名称": "甘肃", "年份": "2019年", "健康中国建设发展指数": 31.1642437811, "政策数量": 5.2510929547, "政策质量": 58.5883537518, "协同机制": 43.8714717547, "防控重大疾病": 5, "全方位干预健康影响因素": 16, "维护全生命周期健康": 9, "按时完成率": 43.4782608696, "总体完成率": 89.1304347826, "平均完成月数": 17.0975609756, "发文联合率": 29.0322580645, "平均协作规模": 2.0967741935, "参与部门数量": 24 },
                { "省市名称": "甘肃", "年份": "2020年", "健康中国建设发展指数": 36.8368466484, "政策数量": 16.2720778217, "政策质量": 74.8685465779, "协同机制": 44.1581688881, "防控重大疾病": 8, "全方位干预健康影响因素": 13, "维护全生命周期健康": 4, "按时完成率": 45.652173913, "总体完成率": 84.7826086957, "平均完成月数": 13.1025641026, "发文联合率": 18.1818181818, "平均协作规模": 1.3333333333, "参与部门数量": 14 },
                { "省市名称": "甘肃", "年份": "2021年", "健康中国建设发展指数": 36.7195189962, "政策数量": 16.7671132185, "政策质量": 70.0680050491, "协同机制": 46.955513513, "防控重大疾病": 10, "全方位干预健康影响因素": 8, "维护全生命周期健康": 19, "按时完成率": 58.6956521739, "总体完成率": 84.7826086957, "平均完成月数": 12.0512820513, "发文联合率": 13.9534883721, "平均协作规模": 1.3953488372, "参与部门数量": 17 },
                { "省市名称": "甘肃", "年份": "2022年", "健康中国建设发展指数": 40.2787916021, "政策数量": 16.7077764957, "政策质量": 77.4965894382, "协同机制": 56.1638939831, "防控重大疾病": 3, "全方位干预健康影响因素": 20, "维护全生命周期健康": 6, "按时完成率": 36.9565217391, "总体完成率": 80.4347826087, "平均完成月数": 13.2432432432, "发文联合率": 26.4705882353, "平均协作规模": 2.0, "参与部门数量": 26 },
                { "省市名称": "甘肃", "年份": "2023年", "健康中国建设发展指数": 38.2636347402, "政策数量": 21.4365742718, "政策质量": 75.8088198048, "协同机制": 52.7826109167, "防控重大疾病": 19, "全方位干预健康影响因素": 27, "维护全生命周期健康": 21, "按时完成率": 67.3913043478, "总体完成率": 80.4347826087, "平均完成月数": 7.0540540541, "发文联合率": 19.512195122, "平均协作规模": 1.5853658537, "参与部门数量": 31 }

            ];
        } else if (province === '广东') {
            provinceData = [
                { "省市名称": "广东", "年份": "2016年", "健康中国建设发展指数": 18.6383207191, "政策数量": 2.4888666752, "政策质量": 38.9921058734, "协同机制": 20.6848566364, "防控重大疾病": 8, "全方位干预健康影响因素": 24, "维护全生命周期健康": 8, "按时完成率": 50.0, "总体完成率": 91.3043478261, "平均完成月数": 18.2380952381, "发文联合率": 23.4042553191, "平均协作规模": 1.8936170213, "参与部门数量": 25 },
                { "省市名称": "广东", "年份": "2017年", "健康中国建设发展指数": 14.6701366789, "政策数量": 3.436371865, "政策质量": 47.9520558135, "协同机制": 1.2824694468, "防控重大疾病": 22, "全方位干预健康影响因素": 15, "维护全生命周期健康": 11, "按时完成率": 54.347826087, "总体完成率": 91.3043478261, "平均完成月数": 17.619047619, "发文联合率": 24.5614035088, "平均协作规模": 2.2631578947, "参与部门数量": 40 },
                { "省市名称": "广东", "年份": "2018年", "健康中国建设发展指数": 15.9787039818, "政策数量": 3.6556266988, "政策质量": 47.9520558135, "协同机制": 7.875098242, "防控重大疾病": 6, "全方位干预健康影响因素": 18, "维护全生命周期健康": 10, "按时完成率": 54.347826087, "总体完成率": 91.3043478261, "平均完成月数": 17.619047619, "发文联合率": 30.0, "平均协作规模": 2.2, "参与部门数量": 29 },
                { "省市名称": "广东", "年份": "2019年", "健康中国建设发展指数": 32.7761959342, "政策数量": 10.8506028515, "政策质量": 65.0478167017, "协同机制": 44.7232265008, "防控重大疾病": 6, "全方位干预健康影响因素": 14, "维护全生命周期健康": 12, "按时完成率": 43.4782608696, "总体完成率": 89.1304347826, "平均完成月数": 14.5853658537, "发文联合率": 48.8372093023, "平均协作规模": 2.6976744186, "参与部门数量": 36 },
                { "省市名称": "广东", "年份": "2020年", "健康中国建设发展指数": 24.1308911284, "政策数量": 10.380676712, "政策质量": 65.8922218994, "协同机制": 21.5743774903, "防控重大疾病": 16, "全方位干预健康影响因素": 16, "维护全生命周期健康": 16, "按时完成率": 63.0434782609, "总体完成率": 86.9565217391, "平均完成月数": 10.55, "发文联合率": 27.4509803922, "平均协作规模": 1.9215686275, "参与部门数量": 29 },
                { "省市名称": "广东", "年份": "2021年", "健康中国建设发展指数": 26.6426969688, "政策数量": 14.820419027, "政策质量": 74.9600184231, "协同机制": 21.434508108, "防控重大疾病": 7, "全方位干预健康影响因素": 21, "维护全生命周期健康": 21, "按时完成率": 52.1739130435, "总体完成率": 76.0869565217, "平均完成月数": 9.8857142857, "发文联合率": 40.7407407407, "平均协作规模": 1.9444444444, "参与部门数量": 29 },
                { "省市名称": "广东", "年份": "2022年", "健康中国建设发展指数": 30.6895302544, "政策数量": 9.8105839774, "政策质量": 58.2299185116, "协同机制": 42.4995919489, "防控重大疾病": 4, "全方位干预健康影响因素": 11, "维护全生命周期健康": 15, "按时完成率": 50.0, "总体完成率": 73.9130434783, "平均完成月数": 8.6470588235, "发文联合率": 29.2682926829, "平均协作规模": 2.0, "参与部门数量": 32 },
                { "省市名称": "广东", "年份": "2023年", "健康中国建设发展指数": 34.2902836582, "政策数量": 27.0385051273, "政策质量": 80.477253139, "协同机制": 33.7701397921, "防控重大疾病": 6, "全方位干预健康影响因素": 25, "维护全生命周期健康": 24, "按时完成率": 60.8695652174, "总体完成率": 65.2173913043, "平均完成月数": 6.4666666667, "发文联合率": 32.9411764706, "平均协作规模": 2.3058823529, "参与部门数量": 43 }
            ];
        } else if (province === '贵州') {
            provinceData = [
                { "省市名称": "贵州", "年份": "2016年", "健康中国建设发展指数": 15.1163148271, "政策数量": 5.692023581, "政策质量": 49.5977221178, "协同机制": 1.2824694468, "防控重大疾病": 5, "全方位干预健康影响因素": 11, "维护全生命周期健康": 10, "按时完成率": 34.7826086957, "总体完成率": 95.652173913, "平均完成月数": 26.2272727273, "发文联合率": 17.8571428571, "平均协作规模": 1.75, "参与部门数量": 18 },
                { "省市名称": "贵州", "年份": "2017年", "健康中国建设发展指数": 22.4783132479, "政策数量": 11.1211514622, "政策质量": 65.8068146999, "协同机制": 15.8085699998, "防控重大疾病": 8, "全方位干预健康影响因素": 8, "维护全生命周期健康": 8, "按时完成率": 52.1739130435, "总体完成率": 93.4782608696, "平均完成月数": 21.1860465116, "发文联合率": 31.0344827586, "平均协作规模": 2.6551724138, "参与部门数量": 27 },
                { "省市名称": "贵州", "年份": "2018年", "健康中国建设发展指数": 31.176570236, "政策数量": 7.5985731275, "政策质量": 65.8068146999, "协同机制": 43.006314094, "防控重大疾病": 11, "全方位干预健康影响因素": 6, "维护全生命周期健康": 9, "按时完成率": 52.1739130435, "总体完成率": 93.4782608696, "平均完成月数": 21.1860465116, "发文联合率": 10.7142857143, "平均协作规模": 1.2857142857, "参与部门数量": 11 },
                { "省市名称": "贵州", "年份": "2019年", "健康中国建设发展指数": 31.9482746157, "政策数量": 8.0744164465, "政策质量": 61.750539995, "协同机制": 44.8505201101, "防控重大疾病": 7, "全方位干预健康影响因素": 4, "维护全生命周期健康": 18, "按时完成率": 52.1739130435, "总体完成率": 91.3043478261, "平均完成月数": 16.2380952381, "发文联合率": 35.4838709677, "平均协作规模": 2.5806451613, "参与部门数量": 29 },
                { "省市名称": "贵州", "年份": "2020年", "健康中国建设发展指数": 28.6949218918, "政策数量": 13.7566365921, "政策质量": 68.3417649284, "协同机制": 31.0099733609, "防控重大疾病": 28, "全方位干预健康影响因素": 10, "维护全生命周期健康": 12, "按时完成率": 47.8260869565, "总体完成率": 89.1304347826, "平均完成月数": 14.2195121951, "发文联合率": 16.9811320755, "平均协作规模": 1.5849056604, "参与部门数量": 21 },
                { "省市名称": "贵州", "年份": "2021年", "健康中国建设发展指数": 28.1137002559, "政策数量": 17.0904209032, "政策质量": 61.2739142379, "协同机制": 27.3442913481, "防控重大疾病": 11, "全方位干预健康影响因素": 36, "维护全生命周期健康": 21, "按时完成率": 63.0434782609, "总体完成率": 84.7826086957, "平均完成月数": 9.8717948718, "发文联合率": 20.5128205128, "平均协作规模": 1.6282051282, "参与部门数量": 29 },
                { "省市名称": "贵州", "年份": "2022年", "健康中国建设发展指数": 23.5848449576, "政策数量": 12.6513638156, "政策质量": 55.9841608795, "协同机制": 22.2497131823, "防控重大疾病": 8, "全方位干预健康影响因素": 21, "维护全生命周期健康": 23, "按时完成率": 65.2173913043, "总体完成率": 80.4347826087, "平均完成月数": 6.4324324324, "发文联合率": 29.0322580645, "平均协作规模": 1.6612903226, "参与部门数量": 31 },
                { "省市名称": "贵州", "年份": "2023年", "健康中国建设发展指数": 30.2318153732, "政策数量": 15.7480469118, "政策质量": 64.0738381976, "协同机制": 42.384512915, "防控重大疾病": 5, "全方位干预健康影响因素": 40, "维护全生命周期健康": 20, "按时完成率": 60.8695652174, "总体完成率": 67.3913043478, "平均完成月数": 5.0322580645, "发文联合率": 32.0, "平均协作规模": 2.2666666667, "参与部门数量": 44 }
            ];
        } else if (province === '海南') {
            provinceData = [
                { "省市名称": "海南", "年份": "2016年", "健康中国建设发展指数": 26.0680002582, "政策数量": 9.6611545292, "政策质量": 59.2161190351, "协同机制": 29.97220421, "防控重大疾病": 0, "全方位干预健康影响因素": 2, "维护全生命周期健康": 0, "按时完成率": 8.6956521739, "总体完成率": 93.4782608696, "平均完成月数": 40.7441860465, "发文联合率": 14.2857142857, "平均协作规模": 1.4285714286, "参与部门数量": 7 },
                { "省市名称": "海南", "年份": "2017年", "健康中国建设发展指数": 37.6310761579, "政策数量": 10.1160452809, "政策质量": 71.4772720649, "协同机制": 56.3782530628, "防控重大疾病": 5, "全方位干预健康影响因素": 12, "维护全生命周期健康": 1, "按时完成率": 39.1304347826, "总体完成率": 93.4782608696, "平均完成月数": 29.3953488372, "发文联合率": 8.6956521739, "平均协作规模": 1.6086956522, "参与部门数量": 16 },
                { "省市名称": "海南", "年份": "2018年", "健康中国建设发展指数": 23.5881622807, "政策数量": 11.7952970477, "政策质量": 71.4772720649, "协同机制": 15.1868493579, "防控重大疾病": 3, "全方位干预健康影响因素": 10, "维护全生命周期健康": 3, "按时完成率": 39.1304347826, "总体完成率": 93.4782608696, "平均完成月数": 29.3953488372, "发文联合率": 28.5714285714, "平均协作规模": 1.4761904762, "参与部门数量": 11 },
                { "省市名称": "海南", "年份": "2019年", "健康中国建设发展指数": 38.9302292213, "政策数量": 11.3439025169, "政策质量": 72.0294527677, "协同机制": 58.5769693985, "防控重大疾病": 2, "全方位干预健康影响因素": 12, "维护全生命周期健康": 5, "按时完成率": 36.9565217391, "总体完成率": 91.3043478261, "平均完成月数": 24.7857142857, "发文联合率": 39.1304347826, "平均协作规模": 2.3913043478, "参与部门数量": 20 },
                { "省市名称": "海南", "年份": "2020年", "健康中国建设发展指数": 32.3758492288, "政策数量": 25.0820075004, "政策质量": 68.807244994, "协同机制": 28.0236645835, "防控重大疾病": 1, "全方位干预健康影响因素": 7, "维护全生命周期健康": 2, "按时完成率": 30.4347826087, "总体完成率": 82.6086956522, "平均完成月数": 23.6315789474, "发文联合率": 33.3333333333, "平均协作规模": 2.25, "参与部门数量": 21 },
                { "省市名称": "海南", "年份": "2021年", "健康中国建设发展指数": 35.4378193922, "政策数量": 24.4808883288, "政策质量": 78.5158083245, "协同机制": 34.2008443852, "防控重大疾病": 1, "全方位干预健康影响因素": 9, "维护全生命周期健康": 11, "按时完成率": 28.2608695652, "总体完成率": 80.4347826087, "平均完成月数": 17.7027027027, "发文联合率": 27.5862068966, "平均协作规模": 1.3448275862, "参与部门数量": 14 },
                { "省市名称": "海南", "年份": "2022年", "健康中国建设发展指数": 35.6287396728, "政策数量": 18.6342033473, "政策质量": 79.1982399727, "协同机制": 40.5294797018, "防控重大疾病": 1, "全方位干预健康影响因素": 18, "维护全生命周期健康": 16, "按时完成率": 43.4782608696, "总体完成率": 78.2608695652, "平均完成月数": 11.9444444444, "发文联合率": 18.6046511628, "平均协作规模": 1.2558139535, "参与部门数量": 20 },
                { "省市名称": "海南", "年份": "2023年", "健康中国建设发展指数": 39.8042381048, "政策数量": 21.4306570922, "政策质量": 71.3447516597, "协同机制": 57.7930794515, "防控重大疾病": 7, "全方位干预健康影响因素": 24, "维护全生命周期健康": 21, "按时完成率": 56.5217391304, "总体完成率": 69.5652173913, "平均完成月数": 6.875, "发文联合率": 31.0344827586, "平均协作规模": 1.9310344828, "参与部门数量": 31 }
            ];
        } else if (province === '河南') {
            provinceData = [
                { "省市名称": "河南", "年份": "2016年", "健康中国建设发展指数": 26.8713609812, "政策数量": 15.3957437139, "政策质量": 65.0899235712, "协同机制": 24.7646239471, "防控重大疾病": 0, "全方位干预健康影响因素": 21, "维护全生命周期健康": 4, "按时完成率": 36.9565217391, "总体完成率": 97.8260869565, "平均完成月数": 24.4222222222, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 5 },
                { "省市名称": "河南", "年份": "2017年", "健康中国建设发展指数": 26.0565882634, "政策数量": 14.2604001621, "政策质量": 53.421700567, "协同机制": 21.388785083, "防控重大疾病": 12, "全方位干预健康影响因素": 18, "维护全生命周期健康": 24, "按时完成率": 52.1739130435, "总体完成率": 97.8260869565, "平均完成月数": 19.4666666667, "发文联合率": 8.8235294118, "平均协作规模": 1.1029411765, "参与部门数量": 11 },
                { "省市名称": "河南", "年份": "2018年", "健康中国建设发展指数": 18.3633880809, "政策数量": 7.9930518942, "政策质量": 53.421700567, "协同机制": 8.7166925346, "防控重大疾病": 9, "全方位干预健康影响因素": 31, "维护全生命周期健康": 14, "按时完成率": 52.1739130435, "总体完成率": 97.8260869565, "平均完成月数": 19.4666666667, "发文联合率": 13.1147540984, "平均协作规模": 1.3770491803, "参与部门数量": 24 },
                { "省市名称": "河南", "年份": "2019年", "健康中国建设发展指数": 29.0329805843, "政策数量": 14.3504928875, "政策质量": 69.5398288608, "协同机制": 29.5013380644, "防控重大疾病": 9, "全方位干预健康影响因素": 9, "维护全生命周期健康": 13, "按时完成率": 45.652173913, "总体完成率": 89.1304347826, "平均完成月数": 17.2926829268, "发文联合率": 15.0, "平均协作规模": 1.525, "参与部门数量": 20 },
                { "省市名称": "河南", "年份": "2020年", "健康中国建设发展指数": 33.8403448005, "政策数量": 23.7574798902, "政策质量": 81.2257221355, "协同机制": 27.4336360916, "防控重大疾病": 16, "全方位干预健康影响因素": 9, "维护全生命周期健康": 11, "按时完成率": 47.8260869565, "总体完成率": 80.4347826087, "平均完成月数": 15.0540540541, "发文联合率": 25.0, "平均协作规模": 1.475, "参与部门数量": 12 },
                { "省市名称": "河南", "年份": "2021年", "健康中国建设发展指数": 38.2774588969, "政策数量": 29.1359992218, "政策质量": 89.5098378799, "协同机制": 32.2831441697, "防控重大疾病": 8, "全方位干预健康影响因素": 10, "维护全生命周期健康": 13, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 11.4571428571, "发文联合率": 25.0, "平均协作规模": 1.7222222222, "参与部门数量": 17 },
                { "省市名称": "河南", "年份": "2022年", "健康中国建设发展指数": 35.2299862581, "政策数量": 13.0172371041, "政策质量": 70.0097028491, "协同机制": 46.1061273679, "防控重大疾病": 9, "全方位干预健康影响因素": 29, "维护全生命周期健康": 25, "按时完成率": 71.7391304348, "总体完成率": 76.0869565217, "平均完成月数": 4.4, "发文联合率": 9.3333333333, "平均协作规模": 1.4533333333, "参与部门数量": 23 },
                { "省市名称": "河南", "年份": "2023年", "健康中国建设发展指数": 33.9151757044, "政策数量": 21.9665223614, "政策质量": 80.8554295716, "协同机制": 39.6446250051, "防控重大疾病": 5, "全方位干预健康影响因素": 25, "维护全生命周期健康": 22, "按时完成率": 52.1739130435, "总体完成率": 58.6956521739, "平均完成月数": 6.2222222222, "发文联合率": 25.0, "平均协作规模": 1.796875, "参与部门数量": 33 }
            ];
        } else if (province === '河北') {
            provinceData = [
                { "省市名称": "河北", "年份": "2016年", "健康中国建设发展指数": 17.7315928638, "政策数量": 0.5990882478, "政策质量": 36.57140511, "协同机制": 17.8999970773, "防控重大疾病": 16, "全方位干预健康影响因素": 5, "维护全生命周期健康": 11, "按时完成率": 45.652173913, "总体完成率": 93.4782608696, "平均完成月数": 28.0697674419, "发文联合率": 17.0731707317, "平均协作规模": 1.487804878, "参与部门数量": 17 },
                { "省市名称": "河北", "年份": "2017年", "健康中国建设发展指数": 22.3397248392, "政策数量": 7.1862479795, "政策质量": 60.3228338921, "协同机制": 21.4864133298, "防控重大疾病": 18, "全方位干预健康影响因素": 3, "维护全生命周期健康": 5, "按时完成率": 28.2608695652, "总体完成率": 93.4782608696, "平均完成月数": 28.023255814, "发文联合率": 26.4705882353, "平均协作规模": 1.2647058824, "参与部门数量": 5 },
                { "省市名称": "河北", "年份": "2018年", "健康中国建设发展指数": 26.1488976364, "政策数量": 5.8903258475, "政策质量": 60.3228338921, "协同机制": 28.6586952076, "防控重大疾病": 8, "全方位干预健康影响因素": 4, "维护全生命周期健康": 5, "按时完成率": 28.2608695652, "总体完成率": 93.4782608696, "平均完成月数": 28.023255814, "发文联合率": 10.0, "平均协作规模": 1.1, "参与部门数量": 4 },
                { "省市名称": "河北", "年份": "2019年", "健康中国建设发展指数": 35.1801753627, "政策数量": 6.4492694502, "政策质量": 59.3161688419, "协同机制": 53.7143328701, "防控重大疾病": 13, "全方位干预健康影响因素": 5, "维护全生命周期健康": 14, "按时完成率": 47.8260869565, "总体完成率": 93.4782608696, "平均完成月数": 17.8139534884, "发文联合率": 23.2558139535, "平均协作规模": 1.5581395349, "参与部门数量": 17 },
                { "省市名称": "河北", "年份": "2020年", "健康中国建设发展指数": 31.1352305352, "政策数量": 3.3700427004, "政策质量": 51.7111377816, "协同机制": 48.4569957917, "防控重大疾病": 20, "全方位干预健康影响因素": 19, "维护全生命周期健康": 16, "按时完成率": 63.0434782609, "总体完成率": 93.4782608696, "平均完成月数": 12.7906976744, "发文联合率": 27.4193548387, "平均协作规模": 1.3387096774, "参与部门数量": 15 },
                { "省市名称": "河北", "年份": "2021年", "健康中国建设发展指数": 24.2663352988, "政策数量": 6.7435816218, "政策质量": 51.0890461968, "协同机制": 27.2036097901, "防控重大疾病": 23, "全方位干预健康影响因素": 17, "维护全生命周期健康": 29, "按时完成率": 73.9130434783, "总体完成率": 93.4782608696, "平均完成月数": 9.4186046512, "发文联合率": 25.0, "平均协作规模": 1.4583333333, "参与部门数量": 25 },
                { "省市名称": "河北", "年份": "2022年", "健康中国建设发展指数": 24.6977116896, "政策数量": 10.980840222, "政策质量": 62.0989992475, "协同机制": 23.1046928135, "防控重大疾病": 5, "全方位干预健康影响因素": 15, "维护全生命周期健康": 17, "按时完成率": 50.0, "总体完成率": 86.9565217391, "平均完成月数": 12.05, "发文联合率": 37.7777777778, "平均协作规模": 1.8222222222, "参与部门数量": 26 },
                { "省市名称": "河北", "年份": "2023年", "健康中国建设发展指数": 33.4136638759, "政策数量": 18.2596018856, "政策质量": 68.7773282228, "协同机制": 46.1387863843, "防控重大疾病": 14, "全方位干预健康影响因素": 20, "维护全生命周期健康": 22, "按时完成率": 67.3913043478, "总体完成率": 80.4347826087, "平均完成月数": 5.7567567568, "发文联合率": 29.702970297, "平均协作规模": 1.5841584158, "参与部门数量": 31 }
            ];
        } else if (province === '黑龙江') {
            provinceData = [
                { "省市名称": "黑龙江", "年份": "2016年", "健康中国建设发展指数": 19.5667256819, "政策数量": 7.5235157897, "政策质量": 62.0927353417, "协同机制": 1.7099592624, "防控重大疾病": 6, "全方位干预健康影响因素": 8, "维护全生命周期健康": 3, "按时完成率": 36.9565217391, "总体完成率": 89.1304347826, "平均完成月数": 22.6829268293, "发文联合率": 10.5263157895, "平均协作规模": 1.1052631579, "参与部门数量": 6 },
                { "省市名称": "黑龙江", "年份": "2017年", "健康中国建设发展指数": 26.5315174905, "政策数量": 20.6706002294, "政策质量": 73.7588932463, "协同机制": 11.0771771776, "防控重大疾病": 9, "全方位干预健康影响因素": 9, "维护全生命周期健康": 9, "按时完成率": 50.0, "总体完成率": 86.9565217391, "平均完成月数": 18.05, "发文联合率": 10.0, "平均协作规模": 1.1333333333, "参与部门数量": 13 },
                { "省市名称": "黑龙江", "年份": "2018年", "健康中国建设发展指数": 29.841874328, "政策数量": 19.5118831516, "政策质量": 73.7588932463, "协同机制": 23.6398341208, "防控重大疾病": 1, "全方位干预健康影响因素": 12, "维护全生命周期健康": 7, "按时完成率": 50.0, "总体完成率": 86.9565217391, "平均完成月数": 18.05, "发文联合率": 13.0434782609, "平均协作规模": 1.6086956522, "参与部门数量": 19 },
                { "省市名称": "黑龙江", "年份": "2019年", "健康中国建设发展指数": 25.8582191973, "政策数量": 12.6136401293, "政策质量": 66.4511592135, "协同机制": 25.4617367046, "防控重大疾病": 8, "全方位干预健康影响因素": 10, "维护全生命周期健康": 6, "按时完成率": 41.3043478261, "总体完成率": 73.9130434783, "平均完成月数": 16.0, "发文联合率": 28.5714285714, "平均协作规模": 1.4642857143, "参与部门数量": 20 },
                { "省市名称": "黑龙江", "年份": "2020年", "健康中国建设发展指数": 28.1645501719, "政策数量": 16.5939202094, "政策质量": 65.0031607757, "协同机制": 27.000803037, "防控重大疾病": 2, "全方位干预健康影响因素": 7, "维护全生命周期健康": 13, "按时完成率": 28.2608695652, "总体完成率": 69.5652173913, "平均完成月数": 21.15625, "发文联合率": 26.0869565217, "平均协作规模": 2.5217391304, "参与部门数量": 29 },
                { "省市名称": "黑龙江", "年份": "2021年", "健康中国建设发展指数": 27.9505025174, "政策数量": 12.256495014, "政策质量": 61.350851499, "协同机制": 33.217811421, "防控重大疾病": 0, "全方位干预健康影响因素": 7, "维护全生命周期健康": 13, "按时完成率": 28.2608695652, "总体完成率": 67.3913043478, "平均完成月数": 16.8064516129, "发文联合率": 7.6923076923, "平均协作规模": 1.9615384615, "参与部门数量": 36 },
                { "省市名称": "黑龙江", "年份": "2022年", "健康中国建设发展指数": 31.1091184357, "政策数量": 22.3037901716, "政策质量": 82.3909814614, "协同机制": 22.2839559119, "防控重大疾病": 1, "全方位干预健康影响因素": 12, "维护全生命周期健康": 9, "按时完成率": 32.6086956522, "总体完成率": 60.8695652174, "平均完成月数": 12.25, "发文联合率": 20.8333333333, "平均协作规模": 1.3333333333, "参与部门数量": 16 },
                { "省市名称": "黑龙江", "年份": "2023年", "健康中国建设发展指数": 30.5457440244, "政策数量": 17.5540398282, "政策质量": 61.5961671039, "协同机制": 41.2895378677, "防控重大疾病": 7, "全方位干预健康影响因素": 15, "维护全生命周期健康": 15, "按时完成率": 47.8260869565, "总体完成率": 54.347826087, "平均完成月数": 7.08, "发文联合率": 29.6296296296, "平均协作规模": 1.8333333333, "参与部门数量": 30 }
            ];
        }
        else if (province === '湖北') {
            provinceData = [
                { "省市名称": "湖北", "年份": "2016年", "健康中国建设发展指数": 18.8335349084, "政策数量": 7.2613053172, "政策质量": 59.0389529948, "协同机制": 9.9629470651, "防控重大疾病": 0, "全方位干预健康影响因素": 3, "维护全生命周期健康": 1, "按时完成率": 8.6956521739, "总体完成率": 93.4782608696, "平均完成月数": 37.9302325581, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 3 },
                { "省市名称": "湖北", "年份": "2017年", "健康中国建设发展指数": 22.0865639703, "政策数量": 11.380550941, "政策质量": 68.2606368483, "协同机制": 13.1141538151, "防控重大疾病": 13, "全方位干预健康影响因素": 5, "维护全生命周期健康": 6, "按时完成率": 36.9565217391, "总体完成率": 93.4782608696, "平均完成月数": 27.7209302326, "发文联合率": 7.4074074074, "平均协作规模": 1.0740740741, "参与部门数量": 7 },
                { "省市名称": "湖北", "年份": "2018年", "健康中国建设发展指数": 24.3432955146, "政策数量": 6.4091248051, "政策质量": 68.2606368483, "协同机制": 25.2836933277, "防控重大疾病": 3, "全方位干预健康影响因素": 15, "维护全生命周期健康": 11, "按时完成率": 36.9565217391, "总体完成率": 93.4782608696, "平均完成月数": 27.7209302326, "发文联合率": 13.1578947368, "平均协作规模": 1.1842105263, "参与部门数量": 14 },
                { "省市名称": "湖北", "年份": "2019年", "健康中国建设发展指数": 27.1115891532, "政策数量": 10.0985889345, "政策质量": 57.6761344414, "协同机制": 32.3096560694, "防控重大疾病": 2, "全方位干预健康影响因素": 8, "维护全生命周期健康": 11, "按时完成率": 34.7826086957, "总体完成率": 89.1304347826, "平均完成月数": 21.3902439024, "发文联合率": 35.7142857143, "平均协作规模": 2.2857142857, "参与部门数量": 19 },
                { "省市名称": "湖北", "年份": "2020年", "健康中国建设发展指数": 32.3113137859, "政策数量": 7.4177272073, "政策质量": 45.6312915622, "协同机制": 52.1696906275, "防控重大疾病": 1, "全方位干预健康影响因素": 7, "维护全生命周期健康": 10, "按时完成率": 36.9565217391, "总体完成率": 84.7826086957, "平均完成月数": 17.7179487179, "发文联合率": 25.0, "平均协作规模": 1.8333333333, "参与部门数量": 18 },
                { "省市名称": "湖北", "年份": "2021年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 },
                { "省市名称": "湖北", "年份": "2022年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 },
                { "省市名称": "湖北", "年份": "2023年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 }
            ];
        } else if (province === '湖南') {
            provinceData = [
                { "省市名称": "湖南", "年份": "2016年", "健康中国建设发展指数": 13.759007263, "政策数量": 1.2069046687, "政策质量": 37.3917035057, "协同机制": 0.8549796312, "防控重大疾病": 1, "全方位干预健康影响因素": 7, "维护全生命周期健康": 3, "按时完成率": 19.5652173913, "总体完成率": 80.4347826087, "平均完成月数": 38.8918918919, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 4 },
                { "省市名称": "湖南", "年份": "2017年", "健康中国建设发展指数": 20.1625093977, "政策数量": 11.884314511, "政策质量": 59.3507226273, "协同机制": 8.0717708105, "防控重大疾病": 2, "全方位干预健康影响因素": 8, "维护全生命周期健康": 4, "按时完成率": 26.0869565217, "总体完成率": 80.4347826087, "平均完成月数": 29.4864864865, "发文联合率": 16.6666666667, "平均协作规模": 1.1666666667, "参与部门数量": 8 },
                { "省市名称": "湖南", "年份": "2018年", "健康中国建设发展指数": 21.8331791706, "政策数量": 9.8542248434, "政策质量": 59.3507226273, "协同机制": 16.207744729, "防控重大疾病": 5, "全方位干预健康影响因素": 4, "维护全生命周期健康": 4, "按时完成率": 26.0869565217, "总体完成率": 80.4347826087, "平均完成月数": 29.4864864865, "发文联合率": 7.1428571429, "平均协作规模": 1.1428571429, "参与部门数量": 8 },
                { "省市名称": "湖南", "年份": "2019年", "健康中国建设发展指数": 33.4610629903, "政策数量": 7.1007267371, "政策质量": 57.9555615808, "协同机制": 49.5685167553, "防控重大疾病": 0, "全方位干预健康影响因素": 5, "维护全生命周期健康": 11, "按时完成率": 34.7826086957, "总体完成率": 80.4347826087, "平均完成月数": 25.8648648649, "发文联合率": 26.3157894737, "平均协作规模": 2.0, "参与部门数量": 15 },
                { "省市名称": "湖南", "年份": "2020年", "健康中国建设发展指数": 35.2814244575, "政策数量": 3.6783149975, "政策质量": 49.5426165345, "协同机制": 56.998886223, "防控重大疾病": 2, "全方位干预健康影响因素": 8, "维护全生命周期健康": 11, "按时完成率": 39.1304347826, "总体完成率": 76.0869565217, "平均完成月数": 20.2857142857, "发文联合率": 25.0, "平均协作规模": 1.75, "参与部门数量": 14 },
                { "省市名称": "湖南", "年份": "2021年", "健康中国建设发展指数": 35.2814244575, "政策数量": 3.6783149975, "政策质量": 49.5426165345, "协同机制": 56.998886223, "防控重大疾病": 2, "全方位干预健康影响因素": 8, "维护全生命周期健康": 11, "按时完成率": 39.1304347826, "总体完成率": 76.0869565217, "平均完成月数": 20.2857142857, "发文联合率": 25.0, "平均协作规模": 1.75, "参与部门数量": 14 },
                { "省市名称": "湖南", "年份": "2022年", "健康中国建设发展指数": 35.2814244575, "政策数量": 3.6783149975, "政策质量": 49.5426165345, "协同机制": 56.998886223, "防控重大疾病": 2, "全方位干预健康影响因素": 8, "维护全生命周期健康": 11, "按时完成率": 39.1304347826, "总体完成率": 76.0869565217, "平均完成月数": 20.2857142857, "发文联合率": 25.0, "平均协作规模": 1.75, "参与部门数量": 14 },
                { "省市名称": "湖南", "年份": "2023年", "健康中国建设发展指数": 35.2814244575, "政策数量": 3.6783149975, "政策质量": 49.5426165345, "协同机制": 56.998886223, "防控重大疾病": 2, "全方位干预健康影响因素": 8, "维护全生命周期健康": 11, "按时完成率": 39.1304347826, "总体完成率": 76.0869565217, "平均完成月数": 20.2857142857, "发文联合率": 25.0, "平均协作规模": 1.75, "参与部门数量": 14 }
            ];
        } else if (province === '吉林') {
            provinceData = [
                { "省市名称": "吉林", "年份": "2016年", "健康中国建设发展指数": 11.5830940342, "政策数量": 3.6783149975, "政策质量": 39.0712736366, "协同机制": 1.2824694468, "防控重大疾病": 2, "全方位干预健康影响因素": 9, "维护全生命周期健康": 9, "按时完成率": 34.7826086957, "总体完成率": 86.9565217391, "平均完成月数": 20.075, "发文联合率": 17.3913043478, "平均协作规模": 1.4782608696, "参与部门数量": 14 },
                { "省市名称": "吉林", "年份": "2017年", "健康中国建设发展指数": 17.5826123347, "政策数量": 4.9428206576, "政策质量": 46.1937208938, "协同机制": 15.3828005222, "防控重大疾病": 6, "全方位干预健康影响因素": 2, "维护全生命周期健康": 10, "按时完成率": 32.6086956522, "总体完成率": 82.6086956522, "平均完成月数": 18.9736842105, "发文联合率": 13.6363636364, "平均协作规模": 1.1363636364, "参与部门数量": 10 },
                { "省市名称": "吉林", "年份": "2018年", "健康中国建设发展指数": 14.8128557963, "政策数量": 5.7147118796, "政策质量": 46.1937208938, "协同机制": 9.4812729293, "防控重大疾病": 0, "全方位干预健康影响因素": 19, "维护全生命周期健康": 15, "按时完成率": 32.6086956522, "总体完成率": 82.6086956522, "平均完成月数": 18.9736842105, "发文联合率": 29.7297297297, "平均协作规模": 1.5945945946, "参与部门数量": 19 },
                { "省市名称": "吉林", "年份": "2019年", "健康中国建设发展指数": 27.0356595365, "政策数量": 4.8887158871, "政策质量": 53.0903542625, "协同机制": 37.7076673787, "防控重大疾病": 12, "全方位干预健康影响因素": 8, "维护全生命周期健康": 11, "按时完成率": 47.8260869565, "总体完成率": 71.7391304348, "平均完成月数": 11.7878787879, "发文联合率": 30.5555555556, "平均协作规模": 2.5277777778, "参与部门数量": 32 },
                { "省市名称": "吉林", "年份": "2020年", "健康中国建设发展指数": 31.890787268, "政策数量": 5.8676375488, "政策质量": 43.1921902282, "协同机制": 51.9309307446, "防控重大疾病": 12, "全方位干预健康影响因素": 8, "维护全生命周期健康": 10, "按时完成率": 36.9565217391, "总体完成率": 63.0434782609, "平均完成月数": 14.2413793103, "发文联合率": 12.1212121212, "平均协作规模": 1.5454545455, "参与部门数量": 21 },
                { "省市名称": "吉林", "年份": "2021年", "健康中国建设发展指数": 31.0018725416, "政策数量": 8.4745172004, "政策质量": 53.9108146135, "协同机制": 44.8932509345, "防控重大疾病": 0, "全方位干预健康影响因素": 11, "维护全生命周期健康": 9, "按时完成率": 26.0869565217, "总体完成率": 60.8695652174, "平均完成月数": 13.1428571429, "发文联合率": 21.7391304348, "平均协作规模": 1.3913043478, "参与部门数量": 12 },
                { "省市名称": "吉林", "年份": "2022年", "健康中国建设发展指数": 34.0566595869, "政策数量": 11.7440032708, "政策质量": 57.0708851175, "协同机制": 48.7983970944, "防控重大疾病": 8, "全方位干预健康影响因素": 12, "维护全生命周期健康": 16, "按时完成率": 43.4782608696, "总体完成率": 54.347826087, "平均完成月数": 8.16, "发文联合率": 21.4285714286, "平均协作规模": 1.880952381, "参与部门数量": 27 },
                { "省市名称": "吉林", "年份": "2023年", "健康中国建设发展指数": 40.3248100161, "政策数量": 13.3481976998, "政策质量": 67.2617143381, "协同机制": 71.1119901863, "防控重大疾病": 4, "全方位干预健康影响因素": 9, "维护全生命周期健康": 10, "按时完成率": 36.9565217391, "总体完成率": 45.652173913, "平均完成月数": 7.5238095238, "发文联合率": 33.3333333333, "平均协作规模": 2.7666666667, "参与部门数量": 40 }
            ];
        } else if (province === '江苏') {
            provinceData = [
                { "省市名称": "江苏", "年份": "2016年", "健康中国建设发展指数": 22.423968491, "政策数量": 6.7837262668, "政策质量": 57.4487681246, "协同机制": 23.5086737306, "防控重大疾病": 0, "全方位干预健康影响因素": 5, "维护全生命周期健康": 4, "按时完成率": 17.3913043478, "总体完成率": 84.7826086957, "平均完成月数": 31.7435897436, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 2 },
                { "省市名称": "江苏", "年份": "2017年", "健康中国建设发展指数": 19.0236629464, "政策数量": 7.6219466534, "政策质量": 54.5291880417, "协同机制": 13.9849852783, "防控重大疾病": 3, "全方位干预健康影响因素": 7, "维护全生命周期健康": 9, "按时完成率": 39.1304347826, "总体完成率": 84.7826086957, "平均完成月数": 24.8974358974, "发文联合率": 9.0909090909, "平均协作规模": 1.1515151515, "参与部门数量": 9 },
                { "省市名称": "江苏", "年份": "2018年", "健康中国建设发展指数": 28.4018683516, "政策数量": 10.3154228096, "政策质量": 54.5291880417, "协同机制": 34.70243857, "防控重大疾病": 6, "全方位干预健康影响因素": 12, "维护全生命周期健康": 15, "按时完成率": 39.1304347826, "总体完成率": 84.7826086957, "平均完成月数": 24.8974358974, "发文联合率": 15.5172413793, "平均协作规模": 1.5344827586, "参与部门数量": 24 },
                { "省市名称": "江苏", "年份": "2019年", "健康中国建设发展指数": 37.257628593, "政策数量": 13.6676191288, "政策质量": 62.3944807078, "协同机制": 56.1364737457, "防控重大疾病": 4, "全方位干预健康影响因素": 7, "维护全生命周期健康": 12, "按时完成率": 41.3043478261, "总体完成率": 82.6086956522, "平均完成月数": 15.4473684211, "发文联合率": 15.625, "平均协作规模": 1.5, "参与部门数量": 12 },
                { "省市名称": "江苏", "年份": "2020年", "健康中国建设发展指数": 22.706234182, "政策数量": 13.3593468317, "政策质量": 50.8173386957, "协同机制": 24.5616495959, "防控重大疾病": 7, "全方位干预健康影响因素": 3, "维护全生命周期健康": 10, "按时完成率": 41.3043478261, "总体完成率": 76.0869565217, "平均完成月数": 14.5714285714, "发文联合率": 27.5862068966, "平均协作规模": 2.3448275862, "参与部门数量": 21 },
                { "省市名称": "江苏", "年份": "2021年", "健康中国建设发展指数": 20.595231513, "政策数量": 6.0694360362, "政策质量": 42.9462549352, "协同机制": 23.7335839371, "防控重大疾病": 1, "全方位干预健康影响因素": 15, "维护全生命周期健康": 18, "按时完成率": 47.8260869565, "总体完成率": 60.8695652174, "平均完成月数": 10.2142857143, "发文联合率": 7.9365079365, "平均协作规模": 1.1428571429, "参与部门数量": 9 },
                { "省市名称": "江苏", "年份": "2022年", "健康中国建设发展指数": 29.0607133557, "政策数量": 13.7804001529, "政策质量": 53.409989695, "协同机制": 38.0462720535, "防控重大疾病": 5, "全方位干预健康影响因素": 12, "维护全生命周期健康": 18, "按时完成率": 41.3043478261, "总体完成率": 52.1739130435, "平均完成月数": 6.5, "发文联合率": 9.2592592593, "平均协作规模": 1.4074074074, "参与部门数量": 21 },
                { "省市名称": "江苏", "年份": "2023年", "健康中国建设发展指数": 33.5198451631, "政策数量": 8.4053770422, "政策质量": 45.6539720099, "协同机制": 65.1051228602, "防控重大疾病": 3, "全方位干预健康影响因素": 9, "维护全生命周期健康": 8, "按时完成率": 26.0869565217, "总体完成率": 26.0869565217, "平均完成月数": 2.9166666667, "发文联合率": 6.0606060606, "平均协作规模": 1.1818181818, "参与部门数量": 11 }
            ];
        }
        else if (province === '江西') {
            provinceData = [
                { "省市名称": "江西", "年份": "2016年", "健康中国建设发展指数": 12.6797414199, "政策数量": 2.7308098076, "政策质量": 41.4752626814, "协同机制": 0.4274898156, "防控重大疾病": 0, "全方位干预健康影响因素": 0, "维护全生命周期健康": 5, "按时完成率": 10.8695652174, "总体完成率": 97.8260869565, "平均完成月数": 27.4222222222, "发文联合率": 40.0, "平均协作规模": 3.2, "参与部门数量": 11 },
                { "省市名称": "江西", "年份": "2017年", "健康中国建设发展指数": 18.248547212, "政策数量": 6.8413272582, "政策质量": 58.0732189053, "协同机制": 11.1783994048, "防控重大疾病": 23, "全方位干预健康影响因素": 11, "维护全生命周期健康": 12, "按时完成率": 63.0434782609, "总体完成率": 97.8260869565, "平均完成月数": 15.9333333333, "发文联合率": 8.7719298246, "平均协作规模": 1.1754385965, "参与部门数量": 13 },
                { "省市名称": "江西", "年份": "2018年", "健康中国建设发展指数": 25.1985165423, "政策数量": 12.1587493775, "政策质量": 58.0732189053, "协同机制": 27.6273522827, "防控重大疾病": 7, "全方位干预健康影响因素": 21, "维护全生命周期健康": 8, "按时完成率": 63.0434782609, "总体完成率": 97.8260869565, "平均完成月数": 15.9333333333, "发文联合率": 4.2553191489, "平均协作规模": 1.1489361702, "参与部门数量": 11 },
                { "省市名称": "江西", "年份": "2019年", "健康中国建设发展指数": 22.5254413118, "政策数量": 8.4228333886, "政策质量": 61.398038712, "协同机制": 21.9907824914, "防控重大疾病": 5, "全方位干预健康影响因素": 20, "维护全生命周期健康": 15, "按时完成率": 52.1739130435, "总体完成率": 93.4782608696, "平均完成月数": 18.5813953488, "发文联合率": 30.1886792453, "平均协作规模": 1.9622641509, "参与部门数量": 30 },
                { "省市名称": "江西", "年份": "2020年", "健康中国建设发展指数": 31.8811955849, "政策数量": 8.5781800165, "政策质量": 58.9827802489, "协同机制": 46.6976267034, "防控重大疾病": 16, "全方位干预健康影响因素": 22, "维护全生命周期健康": 24, "按时完成率": 56.5217391304, "总体完成率": 86.9565217391, "平均完成月数": 15.075, "发文联合率": 30.0, "平均协作规模": 1.9714285714, "参与部门数量": 30 },
                { "省市名称": "江西", "年份": "2021年", "健康中国建设发展指数": 19.6000484094, "政策数量": 10.6987524445, "政策质量": 58.4021927905, "协同机制": 10.3678154646, "防控重大疾病": 10, "全方位干预健康影响因素": 20, "维护全生命周期健康": 23, "按时完成率": 52.1739130435, "总体完成率": 82.6086956522, "平均完成月数": 11.4210526316, "发文联合率": 19.4029850746, "平均协作规模": 1.3582089552, "参与部门数量": 22 },
                { "省市名称": "江西", "年份": "2022年", "健康中国建设发展指数": 21.9953167969, "政策数量": 12.4268770295, "政策质量": 51.5434737267, "协同机制": 20.6282806427, "防控重大疾病": 6, "全方位干预健康影响因素": 26, "维护全生命周期健康": 30, "按时完成率": 63.0434782609, "总体完成率": 76.0869565217, "平均完成月数": 7.7428571429, "发文联合率": 23.4567901235, "平均协作规模": 1.950617284, "参与部门数量": 39 },
                { "省市名称": "江西", "年份": "2023年", "健康中国建设发展指数": 10.6782108215, "政策数量": 7.1321432089, "政策质量": 31.684077603, "协同机制": 10.7806804157, "防控重大疾病": 9, "全方位干预健康影响因素": 27, "维护全生命周期健康": 20, "按时完成率": 54.347826087, "总体完成率": 60.8695652174, "平均完成月数": 6.5, "发文联合率": 22.5806451613, "平均协作规模": 1.7419354839, "参与部门数量": 29 }
            ];
        }
        else if (province === '辽宁') {
            provinceData = [
                { "省市名称": "辽宁", "年份": "2016年", "健康中国建设发展指数": 37.5519454618, "政策数量": 1.5413614853, "政策质量": 43.6955298582, "协同机制": 63.7146492745, "防控重大疾病": 0, "全方位干预健康影响因素": 5, "维护全生命周期健康": 7, "按时完成率": 19.5652173913, "总体完成率": 89.1304347826, "平均完成月数": 34.9512195122, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 2 },
                { "省市名称": "辽宁", "年份": "2017年", "健康中国建设发展指数": 28.9650679877, "政策数量": 22.0981054284, "政策质量": 82.0900123147, "协同机制": 13.098633847, "防控重大疾病": 6, "全方位干预健康影响因素": 3, "维护全生命周期健康": 2, "按时完成率": 26.0869565217, "总体完成率": 89.1304347826, "平均完成月数": 28.2682926829, "发文联合率": 14.2857142857, "平均协作规模": 1.4285714286, "参与部门数量": 10 },
                { "省市名称": "辽宁", "年份": "2018年", "健康中国建设发展指数": 25.092092203, "政策数量": 13.3534296521, "政策质量": 82.0900123147, "协同机制": 6.8399490494, "防控重大疾病": 2, "全方位干预健康影响因素": 4, "维护全生命周期健康": 4, "按时完成率": 26.0869565217, "总体完成率": 89.1304347826, "平均完成月数": 28.2682926829, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 3 },
                { "省市名称": "辽宁", "年份": "2019年", "健康中国建设发展指数": 27.5254413118, "政策数量": 8.4228333886, "政策质量": 61.398038712, "协同机制": 21.9907824914, "防控重大疾病": 5, "全方位干预健康影响因素": 20, "维护全生命周期健康": 15, "按时完成率": 52.1739130435, "总体完成率": 93.4782608696, "平均完成月数": 18.5813953488, "发文联合率": 30.1886792453, "平均协作规模": 1.9622641509, "参与部门数量": 30 },
                { "省市名称": "辽宁", "年份": "2020年", "健康中国建设发展指数": 31.8811955849, "政策数量": 8.5781800165, "政策质量": 58.9827802489, "协同机制": 46.6976267034, "防控重大疾病": 16, "全方位干预健康影响因素": 22, "维护全生命周期健康": 24, "按时完成率": 56.5217391304, "总体完成率": 86.9565217391, "平均完成月数": 15.075, "发文联合率": 30.0, "平均协作规模": 1.9714285714, "参与部门数量": 30 },
                { "省市名称": "辽宁", "年份": "2021年", "健康中国建设发展指数": 19.6000484094, "政策数量": 10.6987524445, "政策质量": 58.4021927905, "协同机制": 10.3678154646, "防控重大疾病": 10, "全方位干预健康影响因素": 20, "维护全生命周期健康": 23, "按时完成率": 52.1739130435, "总体完成率": 82.6086956522, "平均完成月数": 11.4210526316, "发文联合率": 19.4029850746, "平均协作规模": 1.3582089552, "参与部门数量": 22 },
                { "省市名称": "辽宁", "年份": "2022年", "健康中国建设发展指数": 21.9953167969, "政策数量": 12.4268770295, "政策质量": 51.5434737267, "协同机制": 20.6282806427, "防控重大疾病": 6, "全方位干预健康影响因素": 26, "维护全生命周期健康": 30, "按时完成率": 63.0434782609, "总体完成率": 76.0869565217, "平均完成月数": 7.7428571429, "发文联合率": 23.4567901235, "平均协作规模": 1.950617284, "参与部门数量": 39 },
                { "省市名称": "辽宁", "年份": "2023年", "健康中国建设发展指数": 10.6782108215, "政策数量": 7.1321432089, "政策质量": 31.684077603, "协同机制": 10.7806804157, "防控重大疾病": 9, "全方位干预健康影响因素": 27, "维护全生命周期健康": 20, "按时完成率": 54.347826087, "总体完成率": 60.8695652174, "平均完成月数": 6.5, "发文联合率": 22.5806451613, "平均协作规模": 1.7419354839, "参与部门数量": 29 }
            ];
        }
        else if (province === '宁夏') {
            provinceData = [
                { "省市名称": "宁夏", "年份": "2016年", "健康中国建设发展指数": 15.0310237515, "政策数量": 5.0981672855, "政策质量": 42.938415627, "协同机制": 2.137449078, "防控重大疾病": 1, "全方位干预健康影响因素": 1, "维护全生命周期健康": 1, "按时完成率": 4.347826087, "总体完成率": 76.0869565217, "平均完成月数": 61.5142857143, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 3 },
                { "省市名称": "宁夏", "年份": "2017年", "健康中国建设发展指数": 19.5455460952, "政策数量": 5.4151677558, "政策质量": 54.6351998466, "协同机制": 14.0402372216, "防控重大疾病": 5, "全方位干预健康影响因素": 1, "维护全生命周期健康": 0, "按时完成率": 6.5217391304, "总体完成率": 78.2608695652, "平均完成月数": 49.3333333333, "发文联合率": 10.0, "平均协作规模": 1.1, "参与部门数量": 5 },
                { "省市名称": "宁夏", "年份": "2018年", "健康中国建设发展指数": 34.4981806373, "政策数量": 26.7588383085, "政策质量": 54.6351998466, "协同机制": 36.1493055688, "防控重大疾病": 2, "全方位干预健康影响因素": 4, "维护全生命周期健康": 3, "按时完成率": 6.5217391304, "总体完成率": 78.2608695652, "平均完成月数": 49.3333333333, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 5 },
                { "省市名称": "宁夏", "年份": "2019年", "健康中国建设发展指数": 27.3098602823, "政策数量": 16.8585516405, "政策质量": 66.9388818665, "协同机制": 25.1236332212, "防控重大疾病": 9, "全方位干预健康影响因素": 0, "维护全生命周期健康": 6, "按时完成率": 19.5652173913, "总体完成率": 78.2608695652, "平均完成月数": 30.9444444444, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 4 },
                { "省市名称": "宁夏", "年份": "2020年", "健康中国建设发展指数": 37.5204016588, "政策数量": 25.5432054666, "政策质量": 67.6093571668, "协同机制": 43.2856255423, "防控重大疾病": 20, "全方位干预健康影响因素": 7, "维护全生命周期健康": 13, "按时完成率": 23.9130434783, "总体完成率": 69.5652173913, "平均完成月数": 20.96875, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 4 },
                { "省市名称": "宁夏", "年份": "2021年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 },
                { "省市名称": "宁夏", "年份": "2022年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 },
                { "省市名称": "宁夏", "年份": "2023年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 }
            ];
        } else if (province === '青海') {
            provinceData = [
                { "省市名称": "青海", "年份": "2016年", "健康中国建设发展指数": 7.9739491156, "政策数量": 1.2645056601, "政策质量": 20.4746349965, "协同机制": 0.8549796312, "防控重大疾病": 11, "全方位干预健康影响因素": 7, "维护全生命周期健康": 8, "按时完成率": 34.7826086957, "总体完成率": 91.3043478261, "平均完成月数": 25.6904761905, "发文联合率": 3.8461538462, "平均协作规模": 1.0384615385, "参与部门数量": 4 },
                { "省市名称": "青海", "年份": "2017年", "健康中国建设发展指数": 11.8852482661, "政策数量": 3.5829903197, "政策质量": 26.3759408361, "协同机制": 9.1441823502, "防控重大疾病": 26, "全方位干预健康影响因素": 11, "维护全生命周期健康": 8, "按时完成率": 47.8260869565, "总体完成率": 91.3043478261, "平均完成月数": 22.119047619, "发文联合率": 15.6862745098, "平均协作规模": 1.4901960784, "参与部门数量": 22 },
                { "省市名称": "青海", "年份": "2018年", "健康中国建设发展指数": 9.4980155541, "政策数量": 3.436371865, "政策质量": 26.3759408361, "协同机制": 1.7099592624, "防控重大疾病": 0, "全方位干预健康影响因素": 14, "维护全生命周期健康": 10, "按时完成率": 47.8260869565, "总体完成率": 91.3043478261, "平均完成月数": 22.119047619, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 5 },
                { "省市名称": "青海", "年份": "2019年", "健康中国建设发展指数": 13.0065250868, "政策数量": 7.7598369349, "政策质量": 40.4978404689, "协同机制": 1.2824694468, "防控重大疾病": 3, "全方位干预健康影响因素": 10, "维护全生命周期健康": 9, "按时完成率": 28.2608695652, "总体完成率": 86.9565217391, "平均完成月数": 22.85, "发文联合率": 20.8333333333, "平均协作规模": 1.5416666667, "参与部门数量": 16 },
                { "省市名称": "青海", "年份": "2020年", "健康中国建设发展指数": 19.1974472496, "政策数量": 19.2381335124, "政策质量": 41.9820686481, "协同机制": 8.4938614517, "防控重大疾病": 14, "全方位干预健康影响因素": 18, "维护全生命周期健康": 22, "按时完成率": 52.1739130435, "总体完成率": 84.7826086957, "平均完成月数": 17.641025641, "发文联合率": 8.3333333333, "平均协作规模": 1.2, "参与部门数量": 14 },
                { "省市名称": "青海", "年份": "2021年", "健康中国建设发展指数": 18.175530906, "政策数量": 7.5067446706, "政策质量": 42.9664121566, "协同机制": 20.853779311, "防控重大疾病": 6, "全方位干预健康影响因素": 12, "维护全生命周期健康": 17, "按时完成率": 32.6086956522, "总体完成率": 78.2608695652, "平均完成月数": 17.4166666667, "发文联合率": 10.8108108108, "平均协作规模": 1.2162162162, "参与部门数量": 12 },
                { "省市名称": "青海", "年份": "2022年", "健康中国建设发展指数": 21.2357074201, "政策数量": 19.912279098, "政策质量": 54.9942970411, "协同机制": 5.2699945636, "防控重大疾病": 3, "全方位干预健康影响因素": 13, "维护全生命周期健康": 18, "按时完成率": 45.652173913, "总体完成率": 76.0869565217, "平均完成月数": 10.4571428571, "发文联合率": 5.8823529412, "平均协作规模": 1.1176470588, "参与部门数量": 10 },
                { "省市名称": "青海", "年份": "2023年", "健康中国建设发展指数": 17.7603369259, "政策数量": 12.4118416419, "政策质量": 48.1438419766, "协同机制": 18.2083120897, "防控重大疾病": 14, "全方位干预健康影响因素": 14, "维护全生命周期健康": 9, "按时完成率": 47.8260869565, "总体完成率": 56.5217391304, "平均完成月数": 7.7692307692, "发文联合率": 7.1428571429, "平均协作规模": 1.3035714286, "参与部门数量": 18 }
            ];
        }
        else if (province === '山东') {
            provinceData = [
                { "省市名称": "山东", "年份": "2016年", "健康中国建设发展指数": 18.6918020652, "政策数量": 11.7865688746, "政策质量": 57.5921980873, "协同机制": 4.141786019, "防控重大疾病": 0, "全方位干预健康影响因素": 4, "维护全生命周期健康": 7, "按时完成率": 17.3913043478, "总体完成率": 89.1304347826, "平均完成月数": 36.5853658537, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 1 },
                { "省市名称": "山东", "年份": "2017年", "健康中国建设发展指数": 30.7352770543, "政策数量": 22.8350839577, "政策质量": 67.3946450436, "协同机制": 26.1393419411, "防控重大疾病": 8, "全方位干预健康影响因素": 10, "维护全生命周期健康": 12, "按时完成率": 39.1304347826, "总体完成率": 89.1304347826, "平均完成月数": 29.9024390244, "发文联合率": 8.5714285714, "平均协作规模": 1.2857142857, "参与部门数量": 11 },
                { "省市名称": "山东", "年份": "2018年", "健康中国建设发展指数": 19.3399280964, "政策数量": 7.2763407049, "政策质量": 67.3946450436, "协同机制": 1.7099592624, "防控重大疾病": 0, "全方位干预健康影响因素": 11, "维护全生命周期健康": 7, "按时完成率": 39.1304347826, "总体完成率": 89.1304347826, "平均完成月数": 29.9024390244, "发文联合率": 28.5714285714, "平均协作规模": 1.4761904762, "参与部门数量": 9 },
                { "省市名称": "山东", "年份": "2019年", "健康中国建设发展指数": 23.6068636326, "政策数量": 7.7399596299, "政策质量": 52.2591569785, "协同机制": 27.4008414016, "防控重大疾病": 1, "全方位干预健康影响因素": 4, "维护全生命周期健康": 3, "按时完成率": 15.2173913043, "总体完成率": 84.7826086957, "平均完成月数": 30.358974359, "发文联合率": 27.2727272727, "平均协作规模": 2.1818181818, "参与部门数量": 14 },
                { "省市名称": "山东", "年份": "2020年", "健康中国建设发展指数": 25.7735363124, "政策数量": 21.3674341136, "政策质量": 68.9498785581, "协同机制": 13.6777387997, "防控重大疾病": 9, "全方位干预健康影响因素": 5, "维护全生命周期健康": 8, "按时完成率": 26.0869565217, "总体完成率": 82.6086956522, "平均完成月数": 21.4473684211, "发文联合率": 13.0434782609, "平均协作规模": 1.9130434783, "参与部门数量": 15 },
                { "省市名称": "山东", "年份": "2021年", "健康中国建设发展指数": 19.998894865, "政策数量": 12.7752939717, "政策质量": 53.20267274, "协同机制": 14.5233413858, "防控重大疾病": 0, "全方位干预健康影响因素": 8, "维护全生命周期健康": 12, "按时完成率": 32.6086956522, "总体完成率": 73.9130434783, "平均完成月数": 16.3235294118, "发文联合率": 24.0, "平均协作规模": 1.88, "参与部门数量": 20 },
                { "省市名称": "山东", "年份": "2022年", "健康中国建设发展指数": 20.1503657806, "政策数量": 11.4130426751, "政策质量": 63.1025852061, "协同机制": 9.191162404, "防控重大疾病": 8, "全方位干预健康影响因素": 15, "维护全生命周期健康": 12, "按时完成率": 47.8260869565, "总体完成率": 71.7391304348, "平均完成月数": 10.1515151515, "发文联合率": 20.5128205128, "平均协作规模": 1.5897435897, "参与部门数量": 26 },
                { "省市名称": "山东", "年份": "2023年", "健康中国建设发展指数": 19.8435201169, "政策数量": 16.1617177563, "政策质量": 57.3345501597, "协同机制": 16.4082120467, "防控重大疾病": 4, "全方位干预健康影响因素": 21, "维护全生命周期健康": 17, "按时完成率": 45.652173913, "总体完成率": 47.8260869565, "平均完成月数": 4.5909090909, "发文联合率": 33.3333333333, "平均协作规模": 2.2916666667, "参与部门数量": 45 }
            ];
        }
        else if (province === '山西') {
            provinceData = [
                { "省市名称": "山西", "年份": "2016年", "健康中国建设发展指数": 13.5040759874, "政策数量": 3.356082575, "政策质量": 41.8442347283, "协同机制": 0.0, "防控重大疾病": 7, "全方位干预健康影响因素": 11, "维护全生命周期健康": 8, "按时完成率": 47.8260869565, "总体完成率": 89.1304347826, "平均完成月数": 22.8536585366, "发文联合率": 3.3333333333, "平均协作规模": 1.0333333333, "参与部门数量": 4 },
                { "省市名称": "山西", "年份": "2017年", "健康中国建设发展指数": 20.5693463603, "政策数量": 11.9482227169, "政策质量": 58.3946084813, "协同机制": 13.9474070149, "防控重大疾病": 16, "全方位干预健康影响因素": 10, "维护全生命周期健康": 18, "按时完成率": 56.5217391304, "总体完成率": 89.1304347826, "平均完成月数": 18.9268292683, "发文联合率": 15.0943396226, "平均协作规模": 2.1320754717, "参与部门数量": 22 },
                { "省市名称": "山西", "年份": "2018年", "健康中国建设发展指数": 25.4705500183, "政策数量": 5.4522887945, "政策质量": 58.3946084813, "协同机制": 28.7634724114, "防控重大疾病": 4, "全方位干预健康影响因素": 9, "维护全生命周期健康": 4, "按时完成率": 56.5217391304, "总体完成率": 89.1304347826, "平均完成月数": 18.9268292683, "发文联合率": 23.0769230769, "平均协作规模": 2.0, "参与部门数量": 14 },
                { "省市名称": "山西", "年份": "2019年", "健康中国建设发展指数": 38.0410888464, "政策数量": 14.2178345583, "政策质量": 73.2034876916, "协同机制": 53.3995340835, "防控重大疾病": 0, "全方位干预健康影响因素": 5, "维护全生命周期健康": 11, "按时完成率": 21.7391304348, "总体完成率": 78.2608695652, "平均完成月数": 25.1944444444, "发文联合率": 47.0588235294, "平均协作规模": 2.5294117647, "参与部门数量": 18 },
                { "省市名称": "山西", "年份": "2020年", "健康中国建设发展指数": 36.7192333566, "政策数量": 22.3260884354, "政策质量": 67.4344505667, "协同机制": 43.6436658008, "防控重大疾病": 10, "全方位干预健康影响因素": 8, "维护全生命周期健康": 12, "按时完成率": 41.3043478261, "总体完成率": 78.2608695652, "平均完成月数": 18.1111111111, "发文联合率": 9.375, "平均协作规模": 1.40625, "参与部门数量": 15 },
                { "省市名称": "山西", "年份": "2021年", "健康中国建设发展指数": 39.218290312, "政策数量": 16.5199381338, "政策质量": 67.4639752938, "协同机制": 56.132109974, "防控重大疾病": 1, "全方位干预健康影响因素": 8, "维护全生命周期健康": 11, "按时完成率": 23.9130434783, "总体完成率": 73.9130434783, "平均完成月数": 17.5, "发文联合率": 45.0, "平均协作规模": 3.35, "参与部门数量": 29 },
                { "省市名称": "山西", "年份": "2022年", "健康中国建设发展指数": 39.892561526, "政策数量": 13.316781228, "政策质量": 75.4923221475, "协同机制": 59.8123508306, "防控重大疾病": 3, "全方位干预健康影响因素": 18, "维护全生命周期健康": 16, "按时完成率": 47.8260869565, "总体完成率": 73.9130434783, "平均完成月数": 10.2647058824, "发文联合率": 32.5, "平均协作规模": 2.125, "参与部门数量": 31 },
                { "省市名称": "山西", "年份": "2023年", "健康中国建设发展指数": 35.8426650192, "政策数量": 22.0066670064, "政策质量": 63.6286151074, "协同机制": 48.477564953, "防控重大疾病": 8, "全方位干预健康影响因素": 24, "维护全生命周期健康": 27, "按时完成率": 63.0434782609, "总体完成率": 67.3913043478, "平均完成月数": 5.5483870968, "发文联合率": 44.2307692308, "平均协作规模": 2.3846153846, "参与部门数量": 47 }
            ];
        } else if (province === '陕西') {
            provinceData = [
                { "省市名称": "陕西", "年份": "2016年", "健康中国建设发展指数": 19.5109093811, "政策数量": 10.3579884134, "政策质量": 66.2902963587, "协同机制": 3.7605438094, "防控重大疾病": 0, "全方位干预健康影响因素": 3, "维护全生命周期健康": 1, "按时完成率": 13.0434782609, "总体完成率": 86.9565217391, "平均完成月数": 34.1, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 2 },
                { "省市名称": "陕西", "年份": "2017年", "健康中国建设发展指数": 32.9373608318, "政策数量": 19.0513704127, "政策质量": 73.2759011137, "协同机制": 36.3889924226, "防控重大疾病": 7, "全方位干预健康影响因素": 6, "维护全生命周期健康": 3, "按时完成率": 32.6086956522, "总体完成率": 84.7826086957, "平均完成月数": 23.9743589744, "发文联合率": 9.5238095238, "平均协作规模": 1.0952380952, "参与部门数量": 5 },
                { "省市名称": "陕西", "年份": "2018年", "健康中国建设发展指数": 22.4478556396, "政策数量": 7.8062887945, "政策质量": 73.2759011137, "协同机制": 14.8565703773, "防控重大疾病": 4, "全方位干预健康影响因素": 9, "维护全生命周期健康": 4, "按时完成率": 32.6086956522, "总体完成率": 84.7826086957, "平均完成月数": 23.9743589744, "发文联合率": 4.7619047619, "平均协作规模": 1.0476190476, "参与部门数量": 6 },
                { "省市名称": "陕西", "年份": "2019年", "健康中国建设发展指数": 14.7910117098, "政策数量": 6.1270370276, "政策质量": 51.817596592, "协同机制": 2.137449078, "防控重大疾病": 4, "全方位干预健康影响因素": 6, "维护全生命周期健康": 10, "按时完成率": 36.9565217391, "总体完成率": 80.4347826087, "平均完成月数": 19.3783783784, "发文联合率": 40.9090909091, "平均协作规模": 3.6363636364, "参与部门数量": 33 },
                { "省市名称": "陕西", "年份": "2020年", "健康中国建设发展指数": 25.8417759276, "政策数量": 14.2415981192, "政策质量": 58.9411358203, "协同机制": 27.7502447706, "防控重大疾病": 11, "全方位干预健康影响因素": 6, "维护全生命周期健康": 8, "按时完成率": 41.3043478261, "总体完成率": 76.0869565217, "平均完成月数": 15.7428571429, "发文联合率": 25.0, "平均协作规模": 1.8333333333, "参与部门数量": 18 },
                { "省市名称": "陕西", "年份": "2021年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 },
                { "省市名称": "陕西", "年份": "2022年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 },
                { "省市名称": "陕西", "年份": "2023年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 }
            ];
        }
        else if (province === '上海') {
            provinceData = [
                { "省市名称": "上海", "年份": "2016年", "健康中国建设发展指数": 12.4963073956, "政策数量": 1.2069046687, "政策质量": 38.7580992785, "协同机制": 0.4274898156, "防控重大疾病": 23, "全方位干预健康影响因素": 9, "维护全生命周期健康": 10, "按时完成率": 56.5217391304, "总体完成率": 95.652173913, "平均完成月数": 19.4545454545, "发文联合率": 18.3673469388, "平均协作规模": 1.4081632653, "参与部门数量": 17 },
                { "省市名称": "上海", "年份": "2017年", "健康中国建设发展指数": 17.2440780357, "政策数量": 7.3189063087, "政策质量": 53.9616378616, "协同机制": 8.790171727, "防控重大疾病": 31, "全方位干预健康影响因素": 18, "维护全生命周期健康": 11, "按时完成率": 63.0434782609, "总体完成率": 95.652173913, "平均完成月数": 16.5909090909, "发文联合率": 28.125, "平均协作规模": 1.609375, "参与部门数量": 22 },
                { "省市名称": "上海", "年份": "2018年", "健康中国建设发展指数": 16.1860805384, "政策数量": 6.5557432598, "政策质量": 53.9616378616, "协同机制": 5.6775553103, "防控重大疾病": 27, "全方位干预健康影响因素": 14, "维护全生命周期健康": 11, "按时完成率": 63.0434782609, "总体完成率": 95.652173913, "平均完成月数": 16.5909090909, "发文联合率": 28.3333333333, "平均协作规模": 1.5833333333, "参与部门数量": 28 },
                { "省市名称": "上海", "年份": "2019年", "健康中国建设发展指数": 43.9774315692, "政策数量": 7.5067446706, "政策质量": 56.4414591324, "协同机制": 80.8459422765, "防控重大疾病": 16, "全方位干预健康影响因素": 11, "维护全生命周期健康": 21, "按时完成率": 47.8260869565, "总体完成率": 91.3043478261, "平均完成月数": 18.380952381, "发文联合率": 30.1886792453, "平均协作规模": 2.641509434, "参与部门数量": 38 },
                { "省市名称": "上海", "年份": "2020年", "健康中国建设发展指数": 38.0159494951, "政策数量": 11.7952970477, "政策质量": 63.9991561609, "协同机制": 57.0810254227, "防控重大疾病": 12, "全方位干预健康影响因素": 8, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 82.6086956522, "平均完成月数": 15.4473684211, "发文联合率": 25.0, "平均协作规模": 1.8333333333, "参与部门数量": 18 },
                { "省市名称": "上海", "年份": "2021年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 },
                { "省市名称": "上海", "年份": "2022年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 },
                { "省市名称": "上海", "年份": "2023年", "健康中国建设发展指数": 31.5935399435, "政策数量": 12.0603235091, "政策质量": 58.2172840499, "协同机制": 45.0644444444, "防控重大疾病": 2, "全方位干预健康影响因素": 14, "维护全生命周期健康": 14, "按时完成率": 43.4782608696, "总体完成率": 76.0869565217, "平均完成月数": 12.7428571429, "发文联合率": 25.0, "平均协作规模": 1.7142857143, "参与部门数量": 20 }
            ];
        } else if (province === '天津') {
            provinceData = [
                { "省市名称": "天津", "年份": "2016年", "健康中国建设发展指数": 22.1447210047, "政策数量": 6.0345233435, "政策质量": 57.2197375318, "协同机制": 20.0374461553, "防控重大疾病": 0, "全方位干预健康影响因素": 3, "维护全生命周期健康": 2, "按时完成率": 19.5652173913, "总体完成率": 86.9565217391, "平均完成月数": 41.125, "发文联合率": 22.2222222222, "平均协作规模": 1.2222222222, "参与部门数量": 5 },
                { "省市名称": "天津", "年份": "2017年", "健康中国建设发展指数": 31.9331410852, "政策数量": 14.1916500388, "政策质量": 70.4692005656, "协同机制": 37.8684544433, "防控重大疾病": 3, "全方位干预健康影响因素": 11, "维护全生命周期健康": 10, "按时完成率": 39.1304347826, "总体完成率": 86.9565217391, "平均完成月数": 32.75, "发文联合率": 15.3846153846, "平均协作规模": 1.4615384615, "参与部门数量": 13 },
                { "省市名称": "天津", "年份": "2018年", "健康中国建设发展指数": 27.2711544037, "政策数量": 8.4832453736, "政策质量": 70.4692005656, "协同机制": 28.7634724114, "防控重大疾病": 0, "全方位干预健康影响因素": 5, "维护全生命周期健康": 6, "按时完成率": 39.1304347826, "总体完成率": 86.9565217391, "平均完成月数": 32.75, "发文联合率": 23.0769230769, "平均协作规模": 2.0, "参与部门数量": 14 },
                { "省市名称": "天津", "年份": "2019年", "健康中国建设发展指数": 38.0410888464, "政策数量": 14.2178345583, "政策质量": 73.2034876916, "协同机制": 53.3995340835, "防控重大疾病": 0, "全方位干预健康影响因素": 5, "维护全生命周期健康": 11, "按时完成率": 21.7391304348, "总体完成率": 78.2608695652, "平均完成月数": 25.1944444444, "发文联合率": 47.0588235294, "平均协作规模": 2.5294117647, "参与部门数量": 18 },
                { "省市名称": "天津", "年份": "2020年", "健康中国建设发展指数": 36.7192333566, "政策数量": 22.3260884354, "政策质量": 67.4344505667, "协同机制": 43.6436658008, "防控重大疾病": 10, "全方位干预健康影响因素": 8, "维护全生命周期健康": 12, "按时完成率": 41.3043478261, "总体完成率": 78.2608695652, "平均完成月数": 18.1111111111, "发文联合率": 9.375, "平均协作规模": 1.40625, "参与部门数量": 15 },
                { "省市名称": "天津", "年份": "2021年", "健康中国建设发展指数": 39.218290312, "政策数量": 16.5199381338, "政策质量": 67.4639752938, "协同机制": 56.132109974, "防控重大疾病": 1, "全方位干预健康影响因素": 8, "维护全生命周期健康": 11, "按时完成率": 23.9130434783, "总体完成率": 73.9130434783, "平均完成月数": 17.5, "发文联合率": 45.0, "平均协作规模": 3.35, "参与部门数量": 29 },
                { "省市名称": "天津", "年份": "2022年", "健康中国建设发展指数": 39.892561526, "政策数量": 13.316781228, "政策质量": 75.4923221475, "协同机制": 59.8123508306, "防控重大疾病": 3, "全方位干预健康影响因素": 18, "维护全生命周期健康": 16, "按时完成率": 47.8260869565, "总体完成率": 73.9130434783, "平均完成月数": 10.2647058824, "发文联合率": 32.5, "平均协作规模": 2.125, "参与部门数量": 31 },
                { "省市名称": "天津", "年份": "2023年", "健康中国建设发展指数": 35.8426650192, "政策数量": 22.0066670064, "政策质量": 63.6286151074, "协同机制": 48.477564953, "防控重大疾病": 8, "全方位干预健康影响因素": 24, "维护全生命周期健康": 27, "按时完成率": 63.0434782609, "总体完成率": 67.3913043478, "平均完成月数": 5.5483870968, "发文联合率": 44.2307692308, "平均协作规模": 2.3846153846, "参与部门数量": 47 }
            ];
        }
        else if (province === '四川') {
            provinceData = [
                { "省市名称": "四川", "年份": "2016年", "健康中国建设发展指数": 30.6700735484, "政策数量": 20.8824725865, "政策质量": 75.7926706052, "协同机制": 24.1989706852, "防控重大疾病": 0, "全方位干预健康影响因素": 15, "维护全生命周期健康": 5, "按时完成率": 30.4347826087, "总体完成率": 97.8260869565, "平均完成月数": 26.1111111111, "发文联合率": 14.2857142857, "平均协作规模": 1.4285714286, "参与部门数量": 12 },
                { "省市名称": "四川", "年份": "2017年", "健康中国建设发展指数": 38.6012322163, "政策数量": 29.1401559119, "政策质量": 81.0081202264, "协同机制": 35.3006221914, "防控重大疾病": 11, "全方位干预健康影响因素": 14, "维护全生命周期健康": 9, "按时完成率": 47.8260869565, "总体完成率": 97.8260869565, "平均完成月数": 20.7333333333, "发文联合率": 23.6842105263, "平均协作规模": 1.8947368421, "参与部门数量": 23 },
                { "省市名称": "四川", "年份": "2018年", "健康中国建设发展指数": 37.7592545945, "政策数量": 25.3152224597, "政策质量": 81.0081202264, "协同机制": 37.5563335644, "防控重大疾病": 0, "全方位干预健康影响因素": 17, "维护全生命周期健康": 11, "按时完成率": 47.8260869565, "总体完成率": 97.8260869565, "平均完成月数": 20.7333333333, "发文联合率": 16.6666666667, "平均协作规模": 1.6666666667, "参与部门数量": 20 },
                { "省市名称": "四川", "年份": "2019年", "健康中国建设发展指数": 42.0439149867, "政策数量": 20.2757314278, "政策质量": 68.484340925, "协同机制": 60.3659619797, "防控重大疾病": 11, "全方位干预健康影响因素": 11, "维护全生命周期健康": 12, "按时完成率": 52.1739130435, "总体完成率": 95.652173913, "平均完成月数": 18.3181818182, "发文联合率": 32.5581395349, "平均协作规模": 2.3953488372, "参与部门数量": 28 },
                { "省市名称": "四川", "年份": "2020年", "健康中国建设发展指数": 28.3498991399, "政策数量": 18.6481634728, "政策质量": 75.9519379919, "协同机制": 20.6682507227, "防控重大疾病": 21, "全方位干预健康影响因素": 11, "维护全生命周期健康": 17, "按时完成率": 47.8260869565, "总体完成率": 86.9565217391, "平均完成月数": 15.875, "发文联合率": 30.3571428571, "平均协作规模": 1.8035714286, "参与部门数量": 31 },
                { "省市名称": "四川", "年份": "2021年", "健康中国建设发展指数": 29.5260422094, "政策数量": 24.7088713358, "政策质量": 70.8723280058, "协同机制": 17.234978929, "防控重大疾病": 8, "全方位干预健康影响因素": 16, "维护全生命周期健康": 21, "按时完成率": 50.0, "总体完成率": 80.4347826087, "平均完成月数": 11.6216216216, "发文联合率": 37.2549019608, "平均协作规模": 2.137254902, "参与部门数量": 38 },
                { "省市名称": "四川", "年份": "2022年", "健康中国建设发展指数": 22.341469424, "政策数量": 15.4135900951, "政策质量": 68.5932067922, "协同机制": 5.2367949064, "防控重大疾病": 5, "全方位干预健康影响因素": 16, "维护全生命周期健康": 17, "按时完成率": 63.0434782609, "总体完成率": 76.0869565217, "平均完成月数": 8.0285714286, "发文联合率": 27.6595744681, "平均协作规模": 2.4893617021, "参与部门数量": 46 },
                { "省市名称": "四川", "年份": "2023年", "健康中国建设发展指数": 55.2589515945, "政策数量": 52.9152117489, "政策质量": 83.3420719559, "协同机制": 52.1185689364, "防控重大疾病": 15, "全方位干预健康影响因素": 20, "维护全生命周期健康": 20, "按时完成率": 54.347826087, "总体完成率": 58.6956521739, "平均完成月数": 4.2592592593, "发文联合率": 25.0, "平均协作规模": 2.1029411765, "参与部门数量": 38 }
            ];
        }
        else if (province === '西藏') {
            provinceData = [
                { "省市名称": "西藏", "年份": "2016年", "健康中国建设发展指数": 18.970720977, "政策数量": 1.5151769658, "政策质量": 41.0909026234, "协同机制": 18.230455013, "防控重大疾病": 0, "全方位干预健康影响因素": 4, "维护全生命周期健康": 0, "按时完成率": 8.6956521739, "总体完成率": 93.4782608696, "平均完成月数": 41.4651162791, "发文联合率": 40.0, "平均协作规模": 1.8, "参与部门数量": 8 },
                { "省市名称": "西藏", "年份": "2017年", "健康中国建设发展指数": 21.7982850266, "政策数量": 8.3477760508, "政策质量": 56.6743116118, "协同机制": 21.6445558312, "防控重大疾病": 3, "全方位干预健康影响因素": 6, "维护全生命周期健康": 0, "按时完成率": 19.5652173913, "总体完成率": 93.4782608696, "平均完成月数": 31.3255813953, "发文联合率": 20.0, "平均协作规模": 1.3, "参与部门数量": 7 },
                { "省市名称": "西藏", "年份": "2018年", "健康中国建设发展指数": 26.2010909285, "政策数量": 3.3473544018, "政策质量": 56.6743116118, "协同机制": 35.4067964239, "防控重大疾病": 9, "全方位干预健康影响因素": 7, "维护全生命周期健康": 6, "按时完成率": 19.5652173913, "总体完成率": 93.4782608696, "平均完成月数": 31.3255813953, "发文联合率": 13.0434782609, "平均协作规模": 1.2173913043, "参与部门数量": 10 },
                { "省市名称": "西藏", "年份": "2019年", "健康中国建设发展指数": 36.1709012862, "政策数量": 4.8887158871, "政策质量": 43.6342514266, "协同机制": 59.724175965, "防控重大疾病": 5, "全方位干预健康影响因素": 10, "维护全生命周期健康": 14, "按时完成率": 39.1304347826, "总体完成率": 86.9565217391, "平均完成月数": 16.875, "发文联合率": 16.1290322581, "平均协作规模": 1.4838709677, "参与部门数量": 16 },
                { "省市名称": "西藏", "年份": "2020年", "健康中国建设发展指数": 21.5123647693, "政策数量": 12.6625129475, "政策质量": 58.8411253732, "协同机制": 18.111187877, "防控重大疾病": 14, "全方位干预健康影响因素": 13, "维护全生命周期健康": 9, "按时完成率": 32.6086956522, "总体完成率": 84.7826086957, "平均完成月数": 19.3846153846, "发文联合率": 20.0, "平均协作规模": 1.4, "参与部门数量": 14 },
                { "省市名称": "西藏", "年份": "2021年", "健康中国建设发展指数": 21.5123647693, "政策数量": 12.6625129475, "政策质量": 58.8411253732, "协同机制": 18.111187877, "防控重大疾病": 14, "全方位干预健康影响因素": 13, "维护全生命周期健康": 9, "按时完成率": 32.6086956522, "总体完成率": 84.7826086957, "平均完成月数": 19.3846153846, "发文联合率": 20.0, "平均协作规模": 1.4, "参与部门数量": 14 },
                { "省市名称": "西藏", "年份": "2022年", "健康中国建设发展指数": 21.5123647693, "政策数量": 12.6625129475, "政策质量": 58.8411253732, "协同机制": 18.111187877, "防控重大疾病": 14, "全方位干预健康影响因素": 13, "维护全生命周期健康": 9, "按时完成率": 32.6086956522, "总体完成率": 84.7826086957, "平均完成月数": 19.3846153846, "发文联合率": 20.0, "平均协作规模": 1.4, "参与部门数量": 14 },
                { "省市名称": "西藏", "年份": "2023年", "健康中国建设发展指数": 21.5123647693, "政策数量": 12.6625129475, "政策质量": 58.8411253732, "协同机制": 18.111187877, "防控重大疾病": 14, "全方位干预健康影响因素": 13, "维护全生命周期健康": 9, "按时完成率": 32.6086956522, "总体完成率": 84.7826086957, "平均完成月数": 19.3846153846, "发文联合率": 20.0, "平均协作规模": 1.4, "参与部门数量": 14 }
            ];
        } else if (province === '新疆') {
            provinceData = [
                { "省市名称": "新疆", "年份": "2016年", "健康中国建设发展指数": 28.6647235615, "政策数量": 1.1981764955, "政策质量": 36.3612460169, "协同机制": 39.329956342, "防控重大疾病": 1, "全方位干预健康影响因素": 4, "维护全生命周期健康": 5, "按时完成率": 19.5652173913, "总体完成率": 91.3043478261, "平均完成月数": 42.7380952381, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 3 },
                { "省市名称": "新疆", "年份": "2017年", "健康中国建设发展指数": 20.3501291887, "政策数量": 3.7673324608, "政策质量": 46.6181455063, "协同机制": 19.0835438896, "防控重大疾病": 2, "全方位干预健康影响因素": 6, "维护全生命周期健康": 3, "按时完成率": 26.0869565217, "总体完成率": 91.3043478261, "平均完成月数": 37.8095238095, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 4 },
                { "省市名称": "新疆", "年份": "2018年", "健康中国建设发展指数": 19.6093122526, "政策数量": 9.8566458021, "政策质量": 46.6181455063, "协同机制": 14.979141777, "防控重大疾病": 1, "全方位干预健康影响因素": 6, "维护全生命周期健康": 2, "按时完成率": 26.0869565217, "总体完成率": 91.3043478261, "平均完成月数": 37.8095238095, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 5 },
                { "省市名称": "新疆", "年份": "2019年", "健康中国建设发展指数": 23.9541092325, "政策数量": 10.5946995935, "政策质量": 61.3020487389, "协同机制": 23.7261226027, "防控重大疾病": 3, "全方位干预健康影响因素": 5, "维护全生命周期健康": 7, "按时完成率": 26.0869565217, "总体完成率": 86.9565217391, "平均完成月数": 27.975, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 7 },
                { "省市名称": "新疆", "年份": "2020年", "健康中国建设发展指数": 22.9836780562, "政策数量": 15.8621736324, "政策质量": 71.6476765226, "协同机制": 8.9903436605, "防控重大疾病": 1, "全方位干预健康影响因素": 8, "维护全生命周期健康": 4, "按时完成率": 23.9130434783, "总体完成率": 86.9565217391, "平均完成月数": 25.875, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 8 },
                { "省市名称": "新疆", "年份": "2021年", "健康中国建设发展指数": 22.9836780562, "政策数量": 15.8621736324, "政策质量": 71.6476765226, "协同机制": 8.9903436605, "防控重大疾病": 1, "全方位干预健康影响因素": 8, "维护全生命周期健康": 4, "按时完成率": 23.9130434783, "总体完成率": 86.9565217391, "平均完成月数": 25.875, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 8 },
                { "省市名称": "新疆", "年份": "2022年", "健康中国建设发展指数": 22.9836780562, "政策数量": 15.8621736324, "政策质量": 71.6476765226, "协同机制": 8.9903436605, "防控重大疾病": 1, "全方位干预健康影响因素": 8, "维护全生命周期健康": 4, "按时完成率": 23.9130434783, "总体完成率": 86.9565217391, "平均完成月数": 25.875, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 8 },
                { "省市名称": "新疆", "年份": "2023年", "健康中国建设发展指数": 22.9836780562, "政策数量": 15.8621736324, "政策质量": 71.6476765226, "协同机制": 8.9903436605, "防控重大疾病": 1, "全方位干预健康影响因素": 8, "维护全生命周期健康": 4, "按时完成率": 23.9130434783, "总体完成率": 86.9565217391, "平均完成月数": 25.875, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 8 }
            ];
        }
        else if (province === '云南') {
            provinceData = [
                { "省市名称": "云南", "年份": "2016年", "健康中国建设发展指数": 13.8181843624, "政策数量": 3.39622722, "政策质量": 42.4010706604, "协同机制": 0.8549796312, "防控重大疾病": 1, "全方位干预健康影响因素": 6, "维护全生命周期健康": 4, "按时完成率": 26.0869565217, "总体完成率": 91.3043478261, "平均完成月数": 30.6428571429, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 4 },
                { "省市名称": "云南", "年份": "2017年", "健康中国建设发展指数": 14.76171009, "政策数量": 4.0354601128, "政策质量": 48.2184715675, "协同机制": 1.2824694468, "防控重大疾病": 17, "全方位干预健康影响因素": 9, "维护全生命周期健康": 13, "按时完成率": 56.5217391304, "总体完成率": 91.3043478261, "平均完成月数": 21.0476190476, "发文联合率": 15.2173913043, "平均协作规模": 1.3260869565, "参与部门数量": 17 },
                { "省市名称": "云南", "年份": "2018年", "健康中国建设发展指数": 14.7019249058, "政策数量": 3.0704985766, "政策质量": 48.2184715675, "协同机制": 1.7099592624, "防控重大疾病": 0, "全方位干预健康影响因素": 10, "维护全生命周期健康": 10, "按时完成率": 56.5217391304, "总体完成率": 91.3043478261, "平均完成月数": 21.0476190476, "发文联合率": 13.6363636364, "平均协作规模": 1.5, "参与部门数量": 15 },
                { "省市名称": "云南", "年份": "2019年", "健康中国建设发展指数": 14.9897299003, "政策数量": 5.6256944164, "政策质量": 49.3049403959, "协同机制": 2.5649388936, "防控重大疾病": 5, "全方位干预健康影响因素": 6, "维护全生命周期健康": 9, "按时完成率": 32.6086956522, "总体完成率": 78.2608695652, "平均完成月数": 25.5833333333, "发文联合率": 29.1666666667, "平均协作规模": 2.125, "参与部门数量": 17 },
                { "省市名称": "云南", "年份": "2020年", "健康中国建设发展指数": 16.0782703185, "政策数量": 4.2861314184, "政策质量": 49.4698915147, "协同机制": 8.283572038, "防控重大疾病": 3, "全方位干预健康影响因素": 6, "维护全生命周期健康": 4, "按时完成率": 21.7391304348, "总体完成率": 73.9130434783, "平均完成月数": 23.0294117647, "发文联合率": 16.6666666667, "平均协作规模": 1.7777777778, "参与部门数量": 17 },
                { "省市名称": "云南", "年份": "2021年", "健康中国建设发展指数": 23.7656120392, "政策数量": 10.4794976107, "政策质量": 61.4517381068, "协同机制": 22.7407644823, "防控重大疾病": 0, "全方位干预健康影响因素": 8, "维护全生命周期健康": 10, "按时完成率": 28.2608695652, "总体完成率": 73.9130434783, "平均完成月数": 17.2941176471, "发文联合率": 22.7272727273, "平均协作规模": 1.5, "参与部门数量": 12 },
                { "省市名称": "云南", "年份": "2022年", "健康中国建设发展指数": 22.5134401094, "政策数量": 9.5058079013, "政策质量": 63.1699726056, "协同机制": 19.1328190724, "防控重大疾病": 2, "全方位干预健康影响因素": 21, "维护全生命周期健康": 16, "按时完成率": 50.0, "总体完成率": 73.9130434783, "平均完成月数": 9.5294117647, "发文联合率": 14.2857142857, "平均协作规模": 1.3265306122, "参与部门数量": 13 },
                { "省市名称": "云南", "年份": "2023年", "健康中国建设发展指数": 37.2759025448, "政策数量": 27.0744930823, "政策质量": 81.6945490163, "协同机制": 41.1866126675, "防控重大疾病": 4, "全方位干预健康影响因素": 22, "维护全生命周期健康": 27, "按时完成率": 54.347826087, "总体完成率": 67.3913043478, "平均完成月数": 6.9032258065, "发文联合率": 22.2222222222, "平均协作规模": 1.6296296296, "参与部门数量": 35 }
            ];
        } else if (province === '浙江') {
            provinceData = [
                { "省市名称": "浙江", "年份": "2016年", "健康中国建设发展指数": 15.1603431622, "政策数量": 3.6870431707, "政策质量": 50.3076337351, "协同机制": 1.2824694468, "防控重大疾病": 4, "全方位干预健康影响因素": 13, "维护全生命周期健康": 7, "按时完成率": 34.7826086957, "总体完成率": 93.4782608696, "平均完成月数": 23.8837209302, "发文联合率": 12.9032258065, "平均协作规模": 1.4838709677, "参与部门数量": 20 },
                { "省市名称": "浙江", "年份": "2017年", "健康中国建设发展指数": 27.7028889602, "政策数量": 17.8671540427, "政策质量": 73.5478690857, "协同机制": 21.0226266534, "防控重大疾病": 7, "全方位干预健康影响因素": 23, "维护全生命周期健康": 4, "按时完成率": 45.652173913, "总体完成率": 91.3043478261, "平均完成月数": 19.0952380952, "发文联合率": 13.9534883721, "平均协作规模": 1.6279069767, "参与部门数量": 25 },
                { "省市名称": "浙江", "年份": "2018年", "健康中国建设发展指数": 24.4569585101, "政策数量": 6.0781642094, "政策质量": 73.5478690857, "协同机制": 22.123011885, "防控重大疾病": 3, "全方位干预健康影响因素": 17, "维护全生命周期健康": 7, "按时完成率": 45.652173913, "总体完成率": 91.3043478261, "平均完成月数": 19.0952380952, "发文联合率": 16.1290322581, "平均协作规模": 1.4516129032, "参与部门数量": 17 },
                { "省市名称": "浙江", "年份": "2019年", "健康中国建设发展指数": 29.269409505, "政策数量": 7.8551616127, "政策质量": 50.8219995723, "协同机制": 42.2743112257, "防控重大疾病": 4, "全方位干预健康影响因素": 23, "维护全生命周期健康": 19, "按时完成率": 63.0434782609, "总体完成率": 84.7826086957, "平均完成月数": 11.7692307692, "发文联合率": 32.6530612245, "平均协作规模": 1.8367346939, "参与部门数量": 27 },
                { "省市名称": "浙江", "年份": "2020年", "健康中国建设发展指数": 21.3103199455, "政策数量": 5.000421649, "政策质量": 42.4849792252, "协同机制": 29.3145127651, "防控重大疾病": 9, "全方位干预健康影响因素": 22, "维护全生命周期健康": 15, "按时完成率": 41.3043478261, "总体完成率": 84.7826086957, "平均完成月数": 12.7179487179, "发文联合率": 35.2112676056, "平均协作规模": 2.014084507, "参与部门数量": 35 },
                { "省市名称": "浙江", "年份": "2021年", "健康中国建设发展指数": 22.0462508316, "政策数量": 5.4790759617, "政策质量": 48.5375486703, "协同机制": 26.0987826813, "防控重大疾病": 11, "全方位干预健康影响因素": 22, "维护全生命周期健康": 27, "按时完成率": 71.7391304348, "总体完成率": 80.4347826087, "平均完成月数": 7.2162162162, "发文联合率": 26.1904761905, "平均协作规模": 2.0238095238, "参与部门数量": 36 },
                { "省市名称": "浙江", "年份": "2022年", "健康中国建设发展指数": 23.7945756071, "政策数量": 12.5361618328, "政策质量": 65.403272917, "协同机制": 18.7811004399, "防控重大疾病": 14, "全方位干预健康影响因素": 22, "维护全生命周期健康": 28, "按时完成率": 63.0434782609, "总体完成率": 80.4347826087, "平均完成月数": 7.5135135135, "发文联合率": 36.4705882353, "平均协作规模": 1.8470588235, "参与部门数量": 35 },
                { "省市名称": "浙江", "年份": "2023年", "健康中国建设发展指数": 29.6040450845, "政策数量": 17.5400797027, "政策质量": 66.4186758613, "协同机制": 37.7780187493, "防控重大疾病": 11, "全方位干预健康影响因素": 38, "维护全生命周期健康": 32, "按时完成率": 54.347826087, "总体完成率": 56.5217391304, "平均完成月数": 3.8076923077, "发文联合率": 26.4516129032, "平均协作规模": 1.864516129, "参与部门数量": 46 }
            ];
        }
        else {
            console.error(`暂无${province}的数据`);
            return;
        }

        // 创建弹出框
        let popupDiv = document.createElement('div');
        popupDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background: rgba(0,19,42,0.9);
            border: 1px solid rgba(255,255,255,.2);
            z-index: 1000;
            padding: 20px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        `;

        // 创建切换按钮容器
        let buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
        `;

        // 创建三个切换按钮，包含总指标和细化指标
        const buttons = [
            {
                text: '健康中国建设发展指数',
                type: 'total_score',
                mainIndicator: '健康中国建设发展指数',
                indicators: []
            },
            {
                text: '政策数量',
                type: 'policy_count',
                mainIndicator: '政策数量',
                indicators: ['防控重大疾病', '全方位干预健康影响因素', '维护全生命周期健康']
            },
            {
                text: '政策质量',
                type: 'policy_quality',
                mainIndicator: '政策质量',
                indicators: ['按时完成率', '总体完成率', '平均完成月数']
            },
            {
                text: '协同机制',
                type: 'coordination',
                mainIndicator: '协同机制',
                indicators: ['发文联合率', '平均协作规模', '参与部门数量']
            }
        ];

        buttons.forEach(btn => {
            let button = document.createElement('button');
            button.textContent = btn.text;
            button.style.cssText = `
                padding: 8px 16px;
                background: rgba(98,201,141,0.2);
                border: 1px solid #62c98d;
                color: #fff;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s;
            `;
            button.onmouseover = () => button.style.background = 'rgba(98,201,141,0.4)';
            button.onmouseout = () => button.style.background = 'rgba(98,201,141,0.2)';
            button.onclick = () => {
                // 移除所有按钮的活跃状态
                buttonContainer.querySelectorAll('button').forEach(b =>
                    b.style.background = 'rgba(98,201,141,0.2)');
                // 设置当前按钮为活跃状态
                button.style.background = 'rgba(98,201,141,0.6)';
                updateChart(btn.type, btn.mainIndicator, btn.indicators);
            };
            buttonContainer.appendChild(button);
        });

        popupDiv.appendChild(buttonContainer);

        // 创建图表容器
        let chartDiv = document.createElement('div');
        chartDiv.style.cssText = 'flex: 1; width: 100%;';
        popupDiv.appendChild(chartDiv);

        // 添加关闭按钮
        let closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.style.cssText = `
            position: absolute;
            right: 10px;
            top: 10px;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
        `;
        closeButton.onclick = () => document.body.removeChild(popupDiv);
        popupDiv.appendChild(closeButton);

        document.body.appendChild(popupDiv);

        // 初始化图表
        let provinceChart = echarts.init(chartDiv);

        function updateChart(type, mainIndicator, indicators) {
            provinceChart.clear();
            let option = {
                title: {
                    text: type === 'total_score' ? '健康中国建设发展指数趋势' :
                        type === 'policy_count' ? '政策数量趋势' :
                            type === 'policy_quality' ? '政策质量趋势' : '协同机制趋势',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    },
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderColor: '#fff',
                    textStyle: { color: '#fff' }
                },
                legend: {
                    show: type !== 'total_score',
                    data: type === 'total_score' ? [mainIndicator] : [mainIndicator, ...indicators],
                    textStyle: { color: '#fff' },
                    top: 30
                },
                grid: {
                    top: type === 'total_score' ? '15%' : '20%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                    axisLabel: {
                        show: true,
                        interval: 0,
                        color: 'rgba(255,255,255,.6)',
                        rotate: 45
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.2)'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: type === 'total_score' ? '健康中国建设\n发展指数' : '',
                    nameTextStyle: {
                        color: 'rgba(255,255,255,.6)'
                    },
                    axisLabel: {
                        color: 'rgba(255,255,255,.6)'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.2)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.1)',
                            type: 'dashed'
                        }
                    }
                },
                series: type === 'total_score' ?
                    [{
                        name: mainIndicator,
                        type: 'line',
                        data: provinceData.map(item => item[mainIndicator]),
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 10,
                        lineStyle: {
                            width: 4
                        },
                        itemStyle: {
                            color: '#62c98d',
                            borderWidth: 2,
                            borderColor: '#fff'
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(98,201,141,0.5)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(98,201,141,0.1)'
                                }]
                            }
                        }
                    }] :
                    [
                        {
                            name: mainIndicator,
                            type: 'line',
                            data: provinceData.map(item => item[mainIndicator]),
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 10,
                            lineStyle: {
                                width: 4
                            },
                            itemStyle: {
                                color: '#62c98d',
                                borderWidth: 2,
                                borderColor: '#fff'
                            }
                        },
                        ...indicators.map((indicator, index) => ({
                            name: indicator,
                            type: 'line',
                            data: provinceData.map(item => item[indicator]),
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 8,
                            lineStyle: {
                                width: 2
                            }
                        }))
                    ]
            };

            provinceChart.setOption(option);
        }

        // 初始显示健康中国建设发展指数及其细化指标
        const firstButton = buttonContainer.querySelector('button');
        firstButton.style.background = 'rgba(98,201,141,0.6)';
        updateChart('total_score', buttons[0].mainIndicator, buttons[0].indicators);

        // 监听窗口调整
        window.addEventListener('resize', () => {
            provinceChart.resize();
        });
    }

    map();
});

