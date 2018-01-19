$(function(){
	var $li=$('#wrapper ul li');
	var	$div=$('#wrapper div');
	var num=$('#wrapper ul li.active').index();
	$div.append('<b>'+(num+1)+'</b>');
	$li.each(function(i){
		$(this).append('<b>'+(i+1)+'</b>');
	});
	$li.on("click",function(){
		var index=$(this).index();
		var src=$(this).find('img').attr('src');
		$div.children('img').attr('src',src);
		$div.children('b').text(index+1);
		$(this).addClass('active').siblings().removeClass();
	});
	$('button').click(function() {
		/* Act on the event */
		var class1=$(this).attr('class'); //일기 기능
		//class1=(class="prev")?"+=80":"-=80";
		var marT=$li.eq(0).css('margin-Top');//읽기 기능
		marT=marT.replace("px","");  //mart 값에서 단위인 px제거
		console.log(marT);
		var num=4; //화면에 보여주는 li 갯수
		var len=$li.length; //li 갯수 =6
		len=(len-num)*-80; //-320

		if (class1=="prev") {
			//이전일 경우
			if(marT=="0") class1=0;
			else class1="+=80px";

		} else {
			$li.trigger('hover');
			//다음일 경우
			if(marT>len) class1="-=80px";
		}
		$li.eq(0).stop().animate({marginTop:class1}, 100);
	});
	$('button')
});
