$(function(){
  /*
  $('.prev').click(function() {//이전버튼 클릭시 맨앞 li 를 맨뒤로 이동

    $('.banner ul li').first().appendTo('.banner ul');
  $('.next').click(function(event) {

    $('.banner ul').prepend($('.banner ul li').last());
  });
  */
  $('button').click(function(event) {
    /* Act on the event */
    var title=$(this).attr('class');
    if(title=="prev") $('.banner')
  });
  });
});
