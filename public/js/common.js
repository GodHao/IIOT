/**
 * 时间：2018年7月27日
 * 作者：jimwang
 * 版本：V1.0
 */

//var baseURL = "http://i3r.scu.edu.cn/"; //服务器地址
var baseURL = "http://127.0.0.1:8020/IIOT/";//测试地址
//加载网页内容
var loadPage = function(page,seq){
	$("#main").load(baseURL + page);
	var select = seq;
	
	var newsList = window.setInterval(function(){//页面加载后执行，针对于新闻侧边栏
		if(newsList && select){
		   $("#newsList").load(baseURL + "newsList.html",function(){
		   	     var len = $("#newsList a").length;
		   	     for(var i = 1; i <= len; i++){
		   	     	if(i == select){
		   	     		$("#newsList a")[i-1].style="color: #46A3FF;";
		   	     	}else{
		   	     		$("#newsList a")[i-1].style="color: #000000";
		   	     	}	
		   	     }
		   });
		   newsList = null;
	    }
	},100);
}