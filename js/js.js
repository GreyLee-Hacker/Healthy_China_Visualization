window.currentCentralHoveredData = {
    year: null,
    value: null,
    type: null
};

window.currentDepartmentHoveredData = {
    year: null,
    value: null,
    type: null
};

$(window).load(function () {
    $(".loading").fadeOut()
})

/****/
$(document).ready(function () {
    var whei = $(window).width()
    $("html").css({ fontSize: whei / 20 })
    $(window).resize(function () {
        var whei = $(window).width()
        $("html").css({ fontSize: whei / 20 })
    });
});

$(window).load(function () { $(".loading").fadeOut() })
$(function () {
    echarts_3()
    echarts_4()
    bt01()
    bt02()
    bt03()

    $(document).ready(function () {
        // 初始化行动维度图表
        bt01 = echarts.init(document.getElementById('bt01'));
        bt02 = echarts.init(document.getElementById('bt02'));
        bt03 = echarts.init(document.getElementById('bt03'));

        // 初始显示2016年数据
        restorePieCharts();

        // 监听窗口大小变化
        window.addEventListener('resize', function () {
            if (bt01) {
                bt01.resize();
            }
            if (bt02) {
                bt02.resize();
            }
            if (bt03) {
                bt03.resize();
            }
        });
    });

    // 添加所有维度的悬停事件监听
    $('#province-dimension').hover(
        function () {
            updatePieCharts('province');
        },
        function () {
            restorePieCharts();
        }
    );

    $('#department-dimension').hover(
        function () {
            updatePieCharts('department');
        },
        function () {
            restorePieCharts();
        }
    );

    $('#action-dimension').hover(
        function () {
            updatePieCharts('action');
        },
        function () {
            restorePieCharts();
        }
    );

    $('#central-dimension').hover(
        function () {
            updatePieCharts('central');
        },
        function () {
            restorePieCharts();
        }
    );

    function echarts_4() {
        // 移除这里的 switchView 调用，因为它会在 DOM 加载完成前执行
        // 让 index.html 来处理初始化
    }

    function echarts_3() {
    }

    // 更新饼图的函数，根据不同维度显示不同分数
    function updatePieCharts(dimension) {
        switch (dimension) {
            case 'province':
                updateBt01('政策数量', 82.5);
                updateBt02('政策质量', 78.3);
                updateBt03('政策网络', 65.8);
                break;
            case 'department':
                updateBt01('政策数量', 0);
                updateBt02('政策质量', 0);
                updateBt03('政策网络', 0);
                break;
            case 'action':
                updateBt01('政策数量', 0);
                updateBt02('政策质量', 0);
                updateBt03('政策网络', 0);
                break;
            case 'central':
                // 根据中央维度的当前选中状态来更新饼图
                const currentCentralView = $('.central-btn a.active').text();
                if (currentCentralView === '政策数量') {
                    updateBt01('全方位干预健康影响因素领域\n发文量（件）', 0, 100);
                    updateBt02('维护全生命周期健康领域\n发文量（件）', 0, 100);
                    updateBt03('防控重大疾病领域\n发文量（件）', 0, 100);
                } else if (currentCentralView === '政策质量') {
                    updateBt01('当年完成率（%）', 0, 100);
                    updateBt02('总体完成率（%）', 0, 100);
                    updateBt03('平均发文月数（月）', 0, 12);
                } else if (currentCentralView === '政策网络') {
                    updateBt01('参与部门数量（家）', 0, 100);
                    updateBt02('平均协作规模（家/件）', 0, 5);
                    updateBt03('联合发文率（%）', 0, 100);
                } else {
                    updateBt01('政策数量', 0, 100);
                    updateBt02('政策质量', 0, 100);
                    updateBt03('政策网络', 0, 100);
                }
                break;
        }
    }

    // 恢复原始饼图的函数
    function restorePieCharts() {
        bt01();
        bt02();
        bt03();
    }

    // 更新单个饼图的函数，增加 totalScore 参数
    function updateBt01(title, score, totalScore = 100) {
        var myChart = echarts.init(document.getElementById('bt01'));
        var remainingScore = totalScore - score; // 计算与总分的差值
        var option = getBasePieOption(title, score, remainingScore, score, totalScore);
        myChart.setOption(option);
    }

    function updateBt02(title, score, totalScore = 100) {
        var myChart = echarts.init(document.getElementById('bt02'));
        var remainingScore = totalScore - score;
        var option = getBasePieOption(title, score, remainingScore, score, totalScore);
        myChart.setOption(option);
    }

    function updateBt03(title, score, totalScore = 100) {
        var myChart = echarts.init(document.getElementById('bt03'));
        var remainingScore = totalScore - score;
        var option = getBasePieOption(title, score, remainingScore, score, totalScore);
        myChart.setOption(option);
    }

    function bt01() {
        var myChart = echarts.init(document.getElementById('bt01'));
        var score = 0; // 实际健康中国建设\n发展指数
        var remainingScore = 100 - score;
        option = getBasePieOption('指标1', score, remainingScore, score);
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function bt02() {
        var myChart = echarts.init(document.getElementById('bt02'));
        var score = 0;
        var remainingScore = 100 - score;
        option = getBasePieOption('指标2', score, remainingScore, score);
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function bt03() {
        var myChart = echarts.init(document.getElementById('bt03'));
        var score = 0;
        var remainingScore = 100 - score;
        option = getBasePieOption('指标3', score, remainingScore, score);
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 获取基础饼图配置的函数，修改基础饼图配置函数，增加 totalScore 参数
    function getBasePieOption(title, score, remainingScore, displayScore, totalScore = 100) {
        return {
            title: [{
                text: displayScore.toFixed(1),
                x: 'center', y: '54%',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#fff'
                }
            }, {
                text: '健康中国建设\n发展指数',
                x: 'center', y: '68%',
                textStyle: {
                    fontSize: 10,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: 'rgba(255,255,255,.6)',
                    lineHeight: 12
                }
            }, {
                text: title,
                x: 'center', y: '20',
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#fff'
                }
            }],
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (params.name === '健康中国建设\n发展指数') {
                        return `${params.name}: ${params.value.toFixed(1)}/${totalScore.toFixed(1)}`;
                    } else {
                        return `差值: ${params.value.toFixed(1)}`;
                    }
                }
            },
            color: ['#58c485', '#ea7231'],
            series: [{
                name: '健康中国建设\n发展指数情况',
                type: 'pie',
                center: ['50%', '65%'],
                radius: ['45%', '60%'],
                startAngle: 360,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: score,
                    name: '健康中国建设\n发展指数'
                }, {
                    value: remainingScore,
                    name: '差值'
                }]
            }]
        };
    }

    // 在文件末尾添加以下代码
    window.updateBt01 = updateBt01;
    window.updateBt02 = updateBt02;
    window.updateBt03 = updateBt03;
    window.restorePieCharts = restorePieCharts;

});