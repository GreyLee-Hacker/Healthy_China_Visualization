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
                updateBt01('政策数量', 71.2);
                updateBt02('政策质量', 68.9);
                updateBt03('政策网络', 73.4);
                break;
            case 'action':
                updateBt01('政策数量', 88.6);
                updateBt02('政策质量', 92.1);
                updateBt03('政策网络', 85.7);
                break;
            case 'central':
                // 根据中央维度的当前选中状态来更新饼图
                const currentView = $('.central-btn a.active').text();
                if (currentView === '政策数量') {
                    updateBt01('全方位干预健康影响因素领域发文量（件）', 68);
                    updateBt02('维护全生命周期健康领域发文量（件）', 74);
                    updateBt03('防控重大疾病领域发文量（件）', 59);
                } else {
                    updateBt01('政策数量', 75.0);
                    updateBt02('政策质量', 85.0);
                    updateBt03('政策网络', 60.0);
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

    // 更新单个饼图的函数
    function updateBt01(title, score) {
        var myChart = echarts.init(document.getElementById('bt01'));
        var remainingScore = 100 - score; // 计算与满分的差值
        var option = getBasePieOption(title, score, remainingScore, score);
        myChart.setOption(option);
    }

    function updateBt02(title, score) {
        var myChart = echarts.init(document.getElementById('bt02'));
        var remainingScore = 100 - score;
        var option = getBasePieOption(title, score, remainingScore, score);
        myChart.setOption(option);
    }

    function updateBt03(title, score) {
        var myChart = echarts.init(document.getElementById('bt03'));
        var remainingScore = 100 - score;
        var option = getBasePieOption(title, score, remainingScore, score);
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

    // 获取基础饼图配置的函数
    function getBasePieOption(title, score, remainingScore, displayScore) {
        return {
            title: [{
                text: displayScore.toFixed(1),  // 直接显示健康中国建设\n发展指数，保留一位小数
                x: 'center', y: '54%',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#fff'
                }
            }, {
                text: '健康中国建设\n发展指数',  // 将"已完成"改为"健康中国建设\n发展指数"
                x: 'center', y: '68%',
                textStyle: {
                    fontSize: 10,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: 'rgba(255,255,255,.6)'
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
                        return `${params.name}: ${params.value.toFixed(1)}分`;
                    } else {
                        return `差值: ${params.value.toFixed(1)}分`;
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