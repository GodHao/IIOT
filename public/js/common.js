/**
 * 时间：2018年7月27日
 * 作者：jimwang
 * 版本：V1.0
 */

//var baseURL = "http://i3r.scu.edu.cn/"; //服务器地址
var baseURL = "http://127.0.0.1:8020/IIOT/";//测试地址
var searchURL = "http://202.115.35.240/ES_Web/query?keywords=工业互联网2018";
//加载网页内容
var loadPage = function(page,seq){
	$("#main").load(baseURL + page);
	if(page == 'index1.html'){
		search();
	}
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

//搜索内容接口
var search = function(){
	$.ajax({
		url:searchURL,
	    type:"get",
	    dataType:"json",
	    success:function(data){
	    	data = eval('('+data+')');
	    	if(data.code == 1){
	    		data = data.data;
	    		//console.log(data.data);
	    		var length = data.length;
	    		if(length > 0){
	    			$("#hotNews").html("");
	    		}
	    		for(var i = 0; i < length / 2; i++){
	    		    var html = '<li><a class="link" href="' + data[i].url + '" target="_blank">(' + (i+1) + ')' + data[i].title 
	    		               + '</a></li>';
	    		    html = $("#hotNews").html() + html; 
	    		    $("#hotNews").html(html);
	    		}
	    	}
	    },
	    error:function(data){
	    	console("搜索服务器错误，请求失败！");
	    }
	});
}
