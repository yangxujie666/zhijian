scatter();
mapChartFun();
//点击按钮加载地图数据
$(".time-list li").click(function(){
//	调用ajax获取data
	setData(data)
})
$(".panAnaly-left-bottom-ul-num").click(function(){
	alert(1)
})
function scatter(){
	/*气泡图*/
		var dataList = [{"id":"化妆品","value":"93640000000.11"},{"id":"食品","value":"473300000.53"},{"id":"合格","value":"329300.83"},{"id":"皮肤","value":"29340.79"},{"id":"过敏","value":"2705.44"}];
		var dataValue = [];
		dataList.forEach(function(v,i){
			dataValue.push({
				"name": v.id,
	            "nameCode": 'c0'+(i+1),
	            "size": v.value*1
			})
		})
		console.log(dataValue)
	
    var svgChart = new BubbleCloudChart(document.getElementById('hotWordChart'), {
        colors: ['rgba(251,54,1,.75)', 'rgba(255,255,52,.75)', 'rgba(255,108,0,.75)', 'rgba(84,217,41,.75)', 'rgba(55,135,255,.75)'],
        clickHandler: function (e) {
            console.log(e);
        }
    });
    svgChart.init();
    svgChart.setData(dataValue);
    window.addEventListener('resize', function (argument) {
        svgChart.resize();
    });
}
function mapChartFun(){
	//1：红色预警 2：橙色预警 3：黄色预警
    var app = new QualityChecking({
        nanhaiMap: "../images/china-south-sea.png",
        legendMap: "../images/warningLegend.png",
        warningTipMap: "../images/warningTip.png",
        onTooltipClick: function(type,feature) {
            //type 0：省名字被点中 1：第一个数字被点中 2：第二个数字被点中
            console.log("被点中:", feature.id, type,feature.properties.name);
        },
        data: [
            { id: 110000, val1: 110000, val2: 1000, quality: 1 },
            { id: 120000, val1: 120000, val2: 100, quality: 2 },
            { id: 140000, val1: 140000, val2: 500, quality: 3 },
            { id: 150000, val1: 150000, val2: 800, quality: 1 },
            { id: 630000, val1: 630000, val2: 900, quality: 3 }
        ]
    });
    var heightH=$("#mapChart").height();
    var widthH=$("#mapChart").width();
    function window_resizeHandler() {
        app.resize(widthH, heightH );
    }

    function window_blurHandler() {
        app.stop();
    }

    function window_focusHandler() {
        app.start();
    }

    window.addEventListener("resize", window_resizeHandler);
    window.addEventListener("blur", window_blurHandler);
    window.addEventListener("focus", window_focusHandler);
    $("#mapChart").html('');
    document.getElementById("mapChart").appendChild(app.domElement);
    window_resizeHandler();

    app.appear();
}

$(".time-list li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})
$(".panAnaly-right-bottom-list li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})
