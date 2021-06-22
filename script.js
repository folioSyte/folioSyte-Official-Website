$(window).scroll(function(){
    $("#Head").css("opacity", 1 - $(window).scrollTop() / 250);
  });
