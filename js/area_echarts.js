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
            if (params.componentType === 'geo') {
                var provinceName = params.name;
                showPopup(provinceName);
            }
        });

        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function showPopup(provinceName) {
        // 创建一个弹出框
        var popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.left = '10%';
        popup.style.top = '0';
        popup.style.width = '80%';
        popup.style.height = '80%';
        popup.style.backgroundColor = 'rgba(30, 50, 100, 0.9)'; // 更深的蓝色
        popup.style.color = '#fff';
        popup.style.padding = '20px';
        popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        popup.style.zIndex = '1000';
        popup.style.backdropFilter = 'blur(5px)'; // 背景虚化
        popup.style.borderRadius = '10px'; // 圆角
        popup.style.cursor = 'move'; // 鼠标指针变为移动样式
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.justifyContent = 'flex-start';
        popup.style.alignItems = 'center';
        popup.innerHTML = `<h1 style="font-size: 28px; margin: 20px 0; font-family: KaiTi; color: #fff;">${provinceName}</h1>`;

        // 添加关闭按钮
        var closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;'; // 叉叉形状
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.fontSize = '24px';
        closeButton.style.color = '#ffeb7b';
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = function () {
            document.body.removeChild(popup);
        };
        popup.appendChild(closeButton);

        // 将弹出框添加到页面
        document.body.appendChild(popup);

        // 使弹出框可拖动
        makeDraggable(popup);
    }

    function makeDraggable(element) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        element.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // 获取鼠标初始位置
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // 计算鼠标移动的距离
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // 设置元素的新位置
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // 停止移动时清除事件
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    map();
});

