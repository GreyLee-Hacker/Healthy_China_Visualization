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

    // 使用id选择器监听中央维度容器
    $('#central-dimension').hover(
        function () {
            // 鼠标进入时
            updatePieCharts();
        },
        function () {
            // 鼠标离开时
            restorePieCharts();
        }
    );

    function echarts_4() {
        // 移除这里的 switchView 调用，因为它会在 DOM 加载完成前执行
        // 让 index.html 来处理初始化
    }

    function echarts_3() {
    }

    // 更新饼图的函数
    function updatePieCharts() {
        // 更新三个饼图的标题和数据
        updateBt01('政策数量', 75, 25);
        updateBt02('政策质量', 85, 15);
        updateBt03('政策网络', 60, 40);
    }

    // 恢复原始饼图的函数
    function restorePieCharts() {
        bt01();
        bt02();
        bt03();
    }

    // 更新单个饼图的函数
    function updateBt01(title, data1, data2) {
        var myChart = echarts.init(document.getElementById('bt01'));
        var data3 = data1 / (data1 + data2) * 100;
        var option = getBasePieOption(title, data1, data2, data3);
        myChart.setOption(option);
    }

    function updateBt02(title, data1, data2) {
        var myChart = echarts.init(document.getElementById('bt02'));
        var data3 = data1 / (data1 + data2) * 100;
        var option = getBasePieOption(title, data1, data2, data3);
        myChart.setOption(option);
    }

    function updateBt03(title, data1, data2) {
        var myChart = echarts.init(document.getElementById('bt03'));
        var data3 = data1 / (data1 + data2) * 100;
        var option = getBasePieOption(title, data1, data2, data3);
        myChart.setOption(option);
    }

    function bt01() {
        var myChart = echarts.init(document.getElementById('bt01'));
        var data1 = 0//己完成
        var data2 = 0//未完成
        var data3 = data1 / (data1 + data2) * 100
        option = getBasePieOption('指标1', data1, data2, data3);
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function bt02() {
        var myChart = echarts.init(document.getElementById('bt02'));
        var data1 = 0//己完成
        var data2 = 0//未完成
        var data3 = data1 / (data1 + data2) * 100
        option = getBasePieOption('指标2', data1, data2, data3);
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function bt03() {
        var myChart = echarts.init(document.getElementById('bt03'));
        var data1 = 0//己完成
        var data2 = 0//未完成
        var data3 = data1 / (data1 + data2) * 100
        option = getBasePieOption('指标3', data1, data2, data3);
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 获取基础饼图配置的函数
    function getBasePieOption(title, data1, data2, data3) {
        return {
            title: [{
                text: data3.toFixed(1) + '%',
                x: 'center', y: '54%',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#fff'
                }
            }, {
                text: '己完成',
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
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            color: ['#58c485', '#ea7231'],
            series: [{
                name: '检点',
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
                    value: data1,
                    name: '己完成'
                }, {
                    value: data2,
                    name: '未完成'
                }]
            }]
        };
    }
});