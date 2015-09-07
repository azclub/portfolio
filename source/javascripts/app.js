$(function(){
  $(window).on('scroll', function(){
    var summary = $('.work__summary');
    var scroll = $(this).scrollTop();
    
    summary.css('top', scroll);
  });
})