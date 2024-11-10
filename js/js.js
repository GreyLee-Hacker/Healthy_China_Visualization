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
    // bt04()

    function echarts_4() {
        // 移除这里的 switchView 调用，因为它会在 DOM 加载完成前执行
        // 让 index.html 来处理初始化
    }
    function echarts_3() {
    }
    function bt01() {
        var myChart = echarts.init(document.getElementById('bt01'));
        var data1 = 104//己完成
        var data2 = 18//未完成
        var data3 = data1 / (data1 + data2) * 100
        option = {
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
                text: '字段名称4',
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
            series: [
                {
                    name: '检点',
                    type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
                    startAngle: 360,
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
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
                    },
                    {
                        value: data2,
                        name: '未完成'

                    },


                    ]

                }]

        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function bt02() {
        var myChart = echarts.init(document.getElementById('bt02'));
        var data1 = 14//己完成
        var data2 = 18//未完成
        var data3 = data1 / (data1 + data2) * 100
        option = {
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
                text: '字段名称1',
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
            series: [
                {
                    name: '检点',
                    type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
                    startAngle: 360,
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
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
                    },
                    {
                        value: data2,
                        name: '未完成'

                    },


                    ]

                }]

        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function bt03() {
        var myChart = echarts.init(document.getElementById('bt03'));
        var data1 = 104//己完成
        var data2 = 108//未完成
        var data3 = data1 / (data1 + data2) * 100
        option = {
            title: [{
                text: data3.toFixed(1) + '%',
                x: 'center', y: '54%',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#fff'
                }
            },
            {
                text: '己完成',
                x: 'center', y: '68%',
                textStyle: {
                    fontSize: 10,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: 'rgba(255,255,255,.6)'
                }

            }, {
                text: '字段名称2',
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
            series: [
                {
                    name: '检点',
                    type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
                    startAngle: 360,
                    avoidLabelOverlap: false,
                    label: {
                        show: false,

                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: data1,
                            name: '己完成'

                        }, {
                            value: data2,
                            name: '未完成'
                        },
                    ]

                }]

        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    // function bt04() {
    //     var myChart = echarts.init(document.getElementById('bt04'));
    //     var data1 = 1000//己完成
    //     var data2 = 552//未完成
    //     var data3 = data1 / (data1 + data2) * 100
    //     option = {
    //         title: [{
    //             text: data3.toFixed(1) + '%',
    //             x: 'center', y: '54%',
    //             textStyle: {
    //                 fontSize: 18,
    //                 fontWeight: 'bold',
    //                 fontStyle: 'normal',
    //                 color: '#fff'
    //             }
    //         }, {
    //             text: '己完成',
    //             x: 'center', y: '68%',
    //             textStyle: {
    //                 fontSize: 10,
    //                 fontWeight: 'normal',
    //                 fontStyle: 'normal',
    //                 color: 'rgba(255,255,255,.6)'
    //             }

    //         }, {
    //             text: '字段名称3',
    //             x: 'center',
    //             y: '20',
    //             textStyle: {
    //                 fontSize: 14,
    //                 fontWeight: 'bold',
    //                 color: '#fff'
    //             }

    //         }],
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: '{a} <br/>{b}: {c} ({d}%)'
    //         },
    //         color: ['#58c485', '#ea7231'],
    //         series: [
    //             {
    //                 name: '检点',
    //                 type: 'pie',
    //                 center: ['50%', '65%'], radius: ['45%', '60%'],
    //                 startAngle: 360,
    //                 avoidLabelOverlap: false,
    //                 label: {
    //                     normal: {
    //                         show: false,
    //                         position: 'center'
    //                     },
    //                     emphasis: {
    //                         show: false,
    //                         textStyle: {
    //                             fontSize: '30',
    //                             fontWeight: 'bold'
    //                         }
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [{
    //                     value: data1,
    //                     name: '己完成'
    //                 },
    //                 {
    //                     value: data2,
    //                     name: '未完成'

    //                 },


    //                 ]

    //             }]

    //     };
    //     myChart.setOption(option);
    //     window.addEventListener("resize", function () {
    //         myChart.resize();
    //     });
    // }
})