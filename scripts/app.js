'use strict';
$(function (){
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
  // Tabs
  $(".tab-switch li").click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    $("#tabs .tabs-content > div").hide();
    let dclass = $(this).data("class");
    $("." + dclass).show();
  });
});