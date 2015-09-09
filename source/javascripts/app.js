$(function(){

  function stickyScroll(container){
    var scroll = $(this).scrollTop();
    container.css('top', scroll);
  }

  function parallaxBackground(background){
    var scroll = $(this).scrollTop();
    var speed = 50;
    var animate = scroll/speed;

    background.css({
      'background-position-y': -animate
    });

  }



  $(window).on('scroll', function(){
    
    stickyScroll($('.work__summary'));
    parallaxBackground($('.work__detail'));

  });


})