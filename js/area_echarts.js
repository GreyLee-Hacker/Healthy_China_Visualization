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

    function createProvincePopup(province) {
        // 创建弹出框
        let popupDiv = document.createElement('div');
        popupDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 60%;
            background: rgba(0,19,42,0.9);
            border: 1px solid rgba(255,255,255,.2);
            z-index: 1000;
            padding: 20px;
            border-radius: 10px;
        `;

        // 添加关闭按钮
        let closeBtn = document.createElement('div');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            position: absolute;
            right: 10px;
            top: 5px;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
        `;
        closeBtn.onclick = () => popupDiv.remove();

        // 创建图表容器
        let chartDiv = document.createElement('div');
        chartDiv.style.cssText = 'width: 100%; height: 100%;';

        // 添加按钮组
        let buttonGroup = document.createElement('div');
        buttonGroup.style.cssText = `
            position: absolute;
            right: 40px;
            top: 10px;
            display: flex;
            gap: 10px;
        `;

        // 创建三个按钮
        const buttons = [
            { text: '政策数量', type: 'policy_count' },
            { text: '政策质量', type: 'policy_quality' },
            { text: '协同机制', type: 'coordination' }
        ];

        buttons.forEach(btn => {
            let button = document.createElement('button');
            button.innerText = btn.text;
            button.style.cssText = `
                padding: 4px 12px;
                min-width: 80px;
                height: 28px;
                background: rgba(255,255,255,0.1);
                border: 1px solid rgba(255,255,255,0.2);
                color: rgba(255,255,255,0.8);
                border-radius: 4px;
                cursor: pointer;
                font-size: 13px;
                transition: all 0.3s;
                display: inline-block;
                line-height: 1;
                text-align: center;
                user-select: none;
                position: relative;
                outline: none;
                -webkit-tap-highlight-color: transparent;
            `;
            
            button.onmouseover = () => {
                button.style.background = 'rgba(255,255,255,0.2)';
                button.style.transform = 'scale(1.05)';
                button.style.boxShadow = '0 0 10px rgba(255,255,255,0.2)';
            };
            
            button.onmouseout = () => {
                button.style.background = 'rgba(255,255,255,0.1)';
                button.style.transform = 'scale(1)';
                button.style.boxShadow = 'none';
            };
            
            button.onclick = () => {
                buttonGroup.querySelectorAll('button').forEach(b => {
                    b.style.background = 'rgba(255,255,255,0.1)';
                    b.style.borderColor = 'rgba(255,255,255,0.2)';
                });
                
                button.style.background = 'rgba(255,255,255,0.3)';
                button.style.borderColor = 'rgba(255,255,255,0.4)';
                
                updateChart(btn.type);
            };
            
            buttonGroup.appendChild(button);
        });

        popupDiv.appendChild(buttonGroup);

        popupDiv.appendChild(closeBtn);
        popupDiv.appendChild(chartDiv);
        document.body.appendChild(popupDiv);

        // 初始化图表
        let provinceChart = echarts.init(chartDiv);

        function updateChart(type) {
            let option = {
                title: {
                    text: province,
                    textStyle: {
                        color: '#fff',
                        fontSize: '16'
                    },
                    left: 'center',
                    top: '2%'
                },
                grid: {
                    top: '15%',
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
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
                    name: type === 'policy_count' ? '数量' :
                        type === 'policy_quality' ? '质量' : '指数',
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
                series: [{
                    name: type === 'policy_count' ? '政策数量' :
                        type === 'policy_quality' ? '政策质量' : '协同机制',
                    type: 'line',
                    data: [],  // 这里可以根据type添加相应的数据
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 8,
                    itemStyle: {
                        color: '#62c98d',
                        borderWidth: 2,
                        borderColor: '#fff'
                    },
                    lineStyle: {
                        color: '#62c98d',
                        width: 2
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
                }]
            };

            provinceChart.setOption(option);
        }

        // 初始显示政策数量
        updateChart('policy_count');

        // 监听窗口调整
        window.addEventListener('resize', () => {
            provinceChart.resize();
        });
    }

    map();
});

