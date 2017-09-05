'use strict';
$(function (){
  //Trigger Nice Scroll Plugin
  $("html").niceScroll({
    cursorcolor: '#ff8b38',
    cursorwidth: 10,
    cursorborderradius: 0,
    cursorborder: '1px solid #ff8b38'
  });
  // Scroll
  $(window).scroll(function(){
    let navbar = $(".navbar");
    if($(window).scrollTop() >= navbar.height()){
      if(!navbar.hasClass("scrolled")){
        navbar.addClass("scrolled");
      }
    }
    else{
      if(navbar.hasClass("scrolled")){
        navbar.removeClass("scrolled");
      }
    }
  });
  $(".nav a").click(function(){
    let dest = $(this).data("go");
    $("html, body").animate({
      scrollTop: $(dest).offset().top
    }, 1000);
  })
  $(".top").click(function(){
    $("html, body").animate({
      scrollTop: $("body").offset().top
    }, 1000);
  })
  // Tabs
  $(".tab-switch li").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    $("#tabs .tabs-content > div").hide();
    let dclass = $(this).data("class");
    $("." + dclass).show();
  });
});