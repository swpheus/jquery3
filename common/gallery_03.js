$(function(){
	var $li=$('#wrapper ul li')
	$li.each(function(i) {
			var height1=$(this).find('span').height();
			height1+=20;
			$(this).find('span').css('bottom', -height1);
			$(this).hover(function() {
					$(this).find('span').stop().animate({bottom:"0"}, 400,'easeOutBounce');
			},function(){
				var hh=$(this).find('span').height();
				$(this).find('span').stop().animate({bottom:-hh}, 400,'easeOutBounce');
			});
	});

});
