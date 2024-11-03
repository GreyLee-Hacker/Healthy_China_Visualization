function createCharts(data) {
    // 创建三个图表容器
    const chartContainer = document.createElement('div');
    chartContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    `;

    const chart1Div = document.createElement('div');
    const chart2Div = document.createElement('div');
    const chart3Div = document.createElement('div');
    [chart1Div, chart2Div, chart3Div].forEach(div => {
        div.style.cssText = 'width: 100%; height: 300px;';
        chartContainer.appendChild(div);
    });

    // 基础指标趋势图
    const chart1 = echarts.init(chart1Div);
    const option1 = {
        title: {
            text: '基础指标趋势',
            textStyle: { color: '#fff', fontSize: 14 }
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderColor: '#fff',
            textStyle: { color: '#fff' }
        },
        legend: {
            data: ['总得分', '政策数量', '政策质量', '协同机制'],
            textStyle: { color: '#fff' },
            top: 25
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.map(item => item.年份),
            axisLabel: { color: '#fff' },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#fff' },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } },
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: [
            {
                name: '总得分',
                type: 'line',
                data: data.map(item => item.总得分),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            },
            {
                name: '政策数量',
                type: 'line',
                data: data.map(item => item.政策数量),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            },
            {
                name: '政策质量',
                type: 'line',
                data: data.map(item => item.政策质量),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            },
            {
                name: '协同机制',
                type: 'line',
                data: data.map(item => item.协同机制),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            }
        ],
        color: ['#62c98d', '#2f89cf', '#ffa93c', '#ee6666']
    };

    // 政策分布趋势图
    const chart2 = echarts.init(chart2Div);
    const option2 = {
        title: {
            text: '政策分布趋势',
            textStyle: { color: '#fff', fontSize: 14 }
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderColor: '#fff',
            textStyle: { color: '#fff' }
        },
        legend: {
            data: ['防控重大疾病', '全方位干预健康影响因素', '维护全生命周期健康'],
            textStyle: { color: '#fff' },
            top: 25
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.map(item => item.年份),
            axisLabel: { color: '#fff' },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#fff' },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } },
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: [
            {
                name: '防控重大疾病',
                type: 'line',
                data: data.map(item => item.防控重大疾病),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            },
            {
                name: '全方位干预健康影响因素',
                type: 'line',
                data: data.map(item => item.全方位干预健康影响因素),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            },
            {
                name: '维护全生命周期健康',
                type: 'line',
                data: data.map(item => item.维护全生命周期健康),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            }
        ],
        color: ['#91cc75', '#fac858', '#ee6666']
    };

    // 执行效果趋势图
    const chart3 = echarts.init(chart3Div);
    const option3 = {
        title: {
            text: '执行效果趋势',
            textStyle: { color: '#fff', fontSize: 14 }
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderColor: '#fff',
            textStyle: { color: '#fff' }
        },
        legend: {
            data: ['按时完成率', '总体完成率', '发文联合率', '平均协作规模'],
            textStyle: { color: '#fff' },
            top: 25
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.map(item => item.年份),
            axisLabel: { color: '#fff' },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#fff' },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,0.3)' } },
            splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: [
            {
                name: '按时完成率',
                type: 'line',
                data: data.map(item => item.按时完成率),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            },
            {
                name: '总体完成率',
                type: 'line',
                data: data.map(item => item.总体完成率),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            },
            {
                name: '发文联合率',
                type: 'line',
                data: data.map(item => item.发文联合率),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            },
            {
                name: '平均协作规模',
                type: 'line',
                data: data.map(item => item.平均协作规模),
                smooth: true,
                symbolSize: 8,
                lineStyle: { width: 2 }
            }
        ],
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666']
    };

    chart1.setOption(option1);
    chart2.setOption(option2);
    chart3.setOption(option3);

    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        chart1.resize();
        chart2.resize();
        chart3.resize();
    });

    return chartContainer;
}

// 修改点击事件处理函数
function handleProvinceClick(params) {
    if (params.name === '内蒙古') {
        // 使用你提供的数据直接创建图表
        const nmData = [
            {"省市名称":"内蒙古","年份":"2016年","总得分":13.8480981247,"政策数量":3.6556266988,"政策质量":43.7808290696,"协同机制":0.4274898156,"防控重大疾病":5,"全方位干预健康影响因素":4,"维护全生命周期健康":2,"按时完成率":15.2173913043,"总体完成率":93.4782608696,"平均完成月数":33.9302325581,"发文联合率":0.0,"平均协作规模":1.0,"参与部门数量":6},
            {"省市名称":"内蒙古","年份":"2017年","总得分":19.5624813032,"政策数量":5.4553124008,"政策质量":50.1096438741,"协同机制":19.1824665241,"防控重大疾病":5,"全方位干预健康影响因素":3,"维护全生命周期健康":4,"按时完成率":28.2608695652,"总体完成率":93.4782608696,"平均完成月数":23.8604651163,"发文联合率":14.2857142857,"平均协作规模":1.1428571429,"参与部门数量":9},
            {"省市名称":"内蒙古","年份":"2018年","总得分":17.361501082,"政策数量":9.7536682133,"政策质量":50.1096438741,"协同机制":7.2113283235,"防控重大疾病":25,"全方位干预健康影响因素":16,"维护全生命周期健康":18,"按时完成率":28.2608695652,"总体完成率":93.4782608696,"平均完成月数":23.8604651163,"发文联合率":23.8095238095,"平均协作规模":1.6825396825,"参与部门数量":27},
            {"省市名称":"内蒙古","年份":"2019年","总得分":24.1681953139,"政策数量":8.1232892647,"政策质量":50.2525049213,"协同机制":31.181746332,"防控重大疾病":16,"全方位干预健康影响因素":14,"维护全生命周期健康":7,"按时完成率":47.8260869565,"总体完成率":86.9565217391,"平均完成月数":17.575,"发文联合率":16.6666666667,"平均协作规模":1.5238095238,"参与部门数量":17},
            {"省市名称":"内蒙古","年份":"2020年","总得分":37.3604998637,"政策数量":14.6814534833,"政策质量":63.5294995496,"协同机制":54.9603852824,"防控重大疾病":25,"全方位干预健康影响因素":14,"维护全生命周期健康":16,"按时完成率":47.8260869565,"总体完成率":86.9565217391,"平均完成月数":15.275,"发文联合率":22.4137931034,"平均协作规模":2.0862068966,"参与部门数量":30},
            {"省市名称":"内蒙古","年份":"2021年","总得分":28.053597208,"政策数量":9.2935455093,"政策质量":56.4423145234,"协同机制":36.8554910526,"防控重大疾病":8,"全方位干预健康影响因素":15,"维护全生命周期健康":19,"按时完成率":41.3043478261,"总体完成率":71.7391304348,"平均完成月数":13.2727272727,"发文联合率":21.2765957447,"平均协作规模":1.9574468085,"参与部门数量":26},
            {"省市名称":"内蒙古","年份":"2022年","总得分":30.762451122,"政策数量":12.6321717378,"政策质量":56.0781690892,"协同机制":41.241867553,"防控重大疾病":3,"全方位干预健康影响因素":11,"维护全生命周期健康":7,"按时完成率":28.2608695652,"总体完成率":67.3913043478,"平均完成月数":13.4193548387,"发文联合率":9.375,"平均协作规模":1.6875,"参与部门数量":23},
            {"省市名称":"内蒙古","年份":"2023年","总得分":43.7691021145,"政策数量":16.4221924973,"政策质量":60.2763015452,"协同机制":77.4177952975,"防控重大疾病":13,"全方位干预健康影响因素":32,"维护全生命周期健康":31,"按时完成率":58.6956521739,"总体完成率":65.2173913043,"平均完成月数":5.6666666667,"发文联合率":10.7438016529,"平均协作规模":1.173553719,"参与部门数量":24}
        ];

        // 创建弹窗容器
        const popupDiv = document.createElement('div');
        popupDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 10px;
            z-index: 1000;
            max-width: 90vw;
            max-height: 90vh;
            overflow-y: auto;
        `;

        // 添加关闭按钮
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.style.cssText = `
            position: absolute;
            right: 10px;
            top: 10px;
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
        `;
        closeButton.onclick = () => document.body.removeChild(popupDiv);
        popupDiv.appendChild(closeButton);

        // 创建并添加图表
        const charts = createCharts(nmData);
        popupDiv.appendChild(charts);
        document.body.appendChild(popupDiv);
    }
}

// 确保在地图初始化时绑定点击事件
map.on('click', handleProvinceClick); 