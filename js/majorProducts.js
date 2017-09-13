// 右侧滚动条样式
$("#container-scroll").niceScroll({
	cursorcolor: "#00539a",
	cursoropacitymax: 1,
	touchbehavior: true // 激活拖拽滚动
});
scatter();
// 点击事件
$(".search-input-btn").click(function(){
	scatter();
});
function scatter(){
	/*气泡图*/
	var data = [
			{"id": "食品", "value": 3938},
		    {"id": "纺织品", "value": 3812},
		    {"id": "家电", "value": 6714},
		    {"id": "1家电", "value": 6714},
		    {"id": "电梯", "value": 7480}
		]
	var scatter = new scatterChart();
	var height=$("#echarts2").height();
	var minRadius = height*0.10;
	var maxRadius = height*0.18;
	var width=$("#echarts2").width();
	$("#echarts2").html("");
	scatter.init({
		"domEle":'echarts2',
		"width":width,
		"height":height
	}); 
	scatter.setData({
    	data:data,
    	minRadius:minRadius,
    	maxRadius:maxRadius,
    	zoom:1
    });
    scatter.on('click', function (e) {
        console.log(e);
    });
}
