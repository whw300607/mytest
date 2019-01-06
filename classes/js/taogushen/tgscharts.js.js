/**
 * Created by xy on 15/9/29.
 */

//document.write("<script language=javascript src='http://echarts.baidu.com/build/dist/echarts.js'></script>");
//document.write("<script language=javascript src='/resources/js/lib/require.js'></script>");
//
//// 路径配置
//require.config({
//    paths: {
//        echarts: 'http://echarts.baidu.com/build/dist'
//    }
//});
//
//var tgscharts = {
//   create: function(domId,option){
//       var myChart;
//       require(
//           [
//               'echarts',
//               'echarts/chart/line',   // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
//               'echarts/chart/bar'
//           ],
//           function (ec) {
//               myChart = ec.init(document.getElementById(domId));
//               myChart.setOption(option);
//           }
//       );
//       return myChart;
//   }
//};

var tgscharts = {
   create: function(domId,option){
       var myChart = echarts.init(document.getElementById(domId));
       myChart.setOption(option);
       return myChart;
   }
};


function parseChartsData(dayDatas){
    if(!dayDatas) return;

    // 图表数据
    var dateArr = [];
    var countArr = [];
    var scoreArr = [];
    if(dayDatas && dayDatas.length){
        var item = null;
        for(var i in dayDatas){
            item = dayDatas[i];
            if(item){
                var count = item.userCount || 0;
                if(count != 0){
                    dateArr.push(item.staDate);
                    countArr.push(count);
                    scoreArr.push(item.score || 0);
                }
            }
        }

        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid : {
                x : 55,
                y : 5,
                x2 : 35,
                y2 : 20,
                borderWidth : 0
            },
            calculable : false,
            legend: {
                orient: 'vertical', // 'vertical' | 'horizontal'
                x: '60px', // 'center' | 'left' | {number},
                y: '10px', // 'center' | 'bottom' | {number}
                //backgroundColor: '#eee',
                borderColor: 'rgba(178,34,34,0.8)',
                borderWidth: 0,
                padding: [0,0,0,0],    // [5, 10, 15, 20]
                itemGap: 5,
                textStyle: {color: 'red'},
                selected: {
                    '评价数' : true
                },
                data: [
                    {
                        name:'评分',
                        icon : 'image://../asset/ico/favicon.png',
                        textStyle:{fontSize:'10px', color:'black'}
                    },
                    {
                        name: '评价数',
                        textStyle:{fontSize:'10px', color:'black'}
                    }

                ]
            },
            xAxis :{
                data : dateArr
            },
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}人'
                    },
                    axisLine : {
                        show : true,
                        lineStyle : {
                            color: '#CCCCCC',
                            type: 'solid',
                            width: 1
                        }
                    },
                    splitLine : {
                        show:false,
                        lineStyle: {
                            color: '#EFEFEF',
                            type: 'solid',
                            width: 1
                        }
                    },
                    axisTick : {    // 轴标记
                        show:true,
                        length: 2,
                        lineStyle: {
                            color: '#ccc',
                            type: 'solid',
                            width: 1
                        }
                    }
                },
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}分'
                    },
                    splitLine : {show : false},
                    splitNumber: 5,
                    min : 0,
                    max: 5,
                    axisLabel : {
                        show : true,
                        interval: 'auto',
                        rotate: 0,
                        margin: 8,
                        formatter: '{value}分',
                        textStyle: {
                            color: '#666',
                            fontSize: 10
                        }
                    },
                    splitLine : {
                        show:false,
                        lineStyle: {
                            color: '#EEE',
                            type: 'solid',
                            width: 1
                        }
                    },
                    axisLine : {
                        show : true,
                        lineStyle : {
                            color: '#ddd',
                            type: 'solid',
                            width: 1
                        }
                    }
                }
            ],
            series : [
                {
                    name:'评价数',
                    type:'bar',
                    barWidth : 15,
                    data:countArr
                },
                {
                    name:'评分',
                    type:'line',
                    smooth:true,
                    yAxisIndex: 1,
                    data:scoreArr
                }
            ]
        };
        return option;
    }else{
        $('#review_chart').html('<div style="line-height:150px;text-align:center;">暂无评分数据</div>');
        return null;
    }
}




