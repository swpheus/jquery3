$(function(){
	$('#wrapper ul img').each(function(i){
		$(this).hover(function(){
			$(this).attr('src','images/banner_0'+(i+1)+'_on.jpg');
			$('#wrapper div img').attr('src','images/slide_0'+(i+1)+'.jpg');
		},function(){
			$(this).attr('src','images/banner_0'+(i+1)+'_off.jpg');
		});
	});
	var src1,src2,num;
	/*$('#wrapper ul img').hover(function(){
			src1=$(this).attr('src');
			src2=src1.replace('off','on');
			num=$(this).parents('li').index()+1;
			console.log(num);
			console.log(src1, src2);
			$(this).attr('src',src2);
			$('#wrapper div img').attr('src','images/slide_0'+num+'.jpg');
		},function(){
			$(this).attr('src',src1);
			console.log(src1, src2);
	});*/
});
