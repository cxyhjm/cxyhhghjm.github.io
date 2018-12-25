$(function(){
	 var index = 0;
	 $("#btn span").mouseover(function(){
		index  =  $("#btn span").index(this);
		showImg(index);
	});	
	 //滑入 停止动画，滑出开始动画.
	 $('#imgnav').hover(function(){
			  if(MyTime){
				 clearInterval(MyTime);
			  }
	 },function(){
			  MyTime = setInterval(function(){
			    showImg(index)
				index++;
				if(index==5){index=0;}
			  } , 4000);
	 });
	 //自动开始
	 var MyTime = setInterval(function(){
		showImg(index)
		index++;
		if(index==5){index=0;}
	 } , 4000);
})
//关键函数：通过控制i ，来显示不通的幻灯片
function showImg(i){
		$("#img img")
			.eq(i).stop(true,true).fadeIn(2000)
			.parent().siblings().find("img").hide();
		$("#msg li")
			.eq(i).stop(true,true).fadeIn(2000)
			.siblings().hide();
		 $("#btn span")
			.eq(i).addClass("hov")
			.siblings().removeClass("hov");
}