$(function () {
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: true,
                        color: '#fff'
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#4c60ff',
                        borderColor: '#002097'
                    },
                    emphasis: {
                        areaColor: '#ffeb7b'
                    }
                }
            },
            series: []
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
        { "省市名称": "内蒙古", "年份": "2016年", "总得分": 13.8480981247, "政策数量": 3.6556266988, "政策质量": 43.7808290696, "协同机制": 0.4274898156, "防控重大疾病": 5, "全方位干预健康影响因素": 4, "维护全生命周期健康": 2, "按时完成率": 15.2173913043, "总体完成率": 93.4782608696, "平均完成月数": 33.9302325581, "发文联合率": 0.0, "平均协作规模": 1.0, "参与部门数量": 6 },
        { "省市名称": "内蒙古", "年份": "2017年", "总得分": 19.5624813032, "政策数量": 5.4553124008, "政策质量": 50.1096438741, "协同机制": 19.1824665241, "防控重大疾病": 5, "全方位干预健康影响因素": 3, "维护全生命周期健康": 4, "按时完成率": 28.2608695652, "总体完成率": 93.4782608696, "平均完成月数": 23.8604651163, "发文联合率": 14.2857142857, "平均协作规模": 1.1428571429, "参与部门数量": 9 },
        { "省市名称": "内蒙古", "年份": "2018年", "总得分": 17.361501082, "政策数量": 9.7536682133, "政策质量": 50.1096438741, "协同机制": 7.2113283235, "防控重大疾病": 25, "全方位干预健康影响因素": 16, "维护全生命周期健康": 18, "按时完成率": 28.2608695652, "总体完成率": 93.4782608696, "平均完成月数": 23.8604651163, "发文联合率": 23.8095238095, "平均协作规模": 1.6825396825, "参与部门数量": 27 },
        { "省市名称": "内蒙古", "年份": "2019年", "总得分": 24.1681953139, "政策数量": 8.1232892647, "政策质量": 50.2525049213, "协同机制": 31.181746332, "防控重大疾病": 16, "全方位干预健康影响因素": 14, "维护全生命周期健康": 7, "按时完成率": 47.8260869565, "总体完成率": 86.9565217391, "平均完成月数": 17.575, "发文联合率": 16.6666666667, "平均协作规模": 1.5238095238, "参与部门数量": 17 },
        { "省市名称": "内蒙古", "年份": "2020年", "总得分": 37.3604998637, "政策数量": 14.6814534833, "政策质量": 63.5294995496, "协同机制": 54.9603852824, "防控重大疾病": 25, "全方位干预健康影响因素": 14, "维护全生命周期健康": 16, "按时完成率": 47.8260869565, "总体完成率": 86.9565217391, "平均完成月数": 15.275, "发文联合率": 22.4137931034, "平均协作规模": 2.0862068966, "参与部门数量": 30 },
        { "省市名称": "内蒙古", "年份": "2021年", "总得分": 28.053597208, "政策数量": 9.2935455093, "政策质量": 56.4423145234, "协同机制": 36.8554910526, "防控重大疾病": 8, "全方位干预健康影响因素": 15, "维护全生命周期健康": 19, "按时完成率": 41.3043478261, "总体完成率": 71.7391304348, "平均完成月数": 13.2727272727, "发文联合率": 21.2765957447, "平均协作规模": 1.9574468085, "参与部门数量": 26 },
        { "省市名称": "内蒙古", "年份": "2022年", "总得分": 30.762451122, "政策数量": 12.6321717378, "政策质量": 56.0781690892, "协同机制": 41.241867553, "防控重大疾病": 3, "全方位干预健康影响因素": 11, "维护全生命周期健康": 7, "按时完成率": 28.2608695652, "总体完成率": 67.3913043478, "平均完成月数": 13.4193548387, "发文联合率": 9.375, "平均协作规模": 1.6875, "参与部门数量": 23 },
        { "省市名称": "内蒙古", "年份": "2023年", "总得分": 43.7691021145, "政策数量": 16.4221924973, "政策质量": 60.2763015452, "协同机制": 77.4177952975, "防控重大疾病": 13, "全方位干预健康影响因素": 32, "维护全生命周期健康": 31, "按时完成率": 58.6956521739, "总体完成率": 65.2173913043, "平均完成月数": 5.6666666667, "发文联合率": 10.7438016529, "平均协作规模": 1.173553719, "参与部门数量": 24 }
    ];

    function createProvincePopup(province) {
        if (province === '内蒙古') {
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
                    text: '总得分',
                    type: 'total_score',
                    mainIndicator: '总得分',
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
                let option = {
                    title: {
                        text: type === 'total_score' ? '总得分趋势' :
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
                        name: type === 'total_score' ? '得分' : '',
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
                            data: nmData.map(item => item[mainIndicator]),
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
                                data: nmData.map(item => item[mainIndicator]),
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
                                data: nmData.map(item => item[indicator]),
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

            // 初始显示总得分及其细化指标
            const firstButton = buttonContainer.querySelector('button');
            firstButton.style.background = 'rgba(98,201,141,0.6)';
            updateChart('total_score', buttons[0].mainIndicator, buttons[0].indicators);

            // 监听窗口调整
            window.addEventListener('resize', () => {
                provinceChart.resize();
            });
        }
    }

    map();
});

