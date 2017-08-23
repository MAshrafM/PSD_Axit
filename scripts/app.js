'use strict';
$(function (){
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
});