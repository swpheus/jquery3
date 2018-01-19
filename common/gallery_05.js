$(function(){
  function setting(){
    $('.banner ul li').each(function(i){
      $(this).css('left',200*(i-1)+"px");
    });
  }
  setting();
  $('.prev').click(function() {
    setting();
    var class1=$(this).attr('class');
      //각각 li 를 left 값을 이용해 animate 처리후 맨앞 li 를 맨뒤로 이동
      $('.banner ul li').stop().animate({left :'-=200px'}, 400,'easeOutBounce');
      $('.banner ul').append($('.banner ul li').first())
  });
  setting();
  $('.next').click(function() {
    setting();
    /* Act on the event */
    $('.banner ul li').stop().animate({left :'+=200px'}, 400,'easeOutBounce');
    $('.banner ul').prepend($('.banner ul li').last())
  });
});
