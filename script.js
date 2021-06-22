<<<<<<< Updated upstream
//sroll down fade effect.

//new copied code.
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".title").css({
        "opacity": "0"
      })

    } else {
      $(".title").css({
        "opacity": "1"
      })


    }
  })

//for smoothe scroll effect. Not working
$(document).ready(function(){

  $(".icon").on('click', function(event) {


    if (this.hash !== "") {

      event.preventDefault();


      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){


        window.location.hash = hash;
      });
    }
  });
});
=======
$(window).scroll(function(){
    $("#Head").css("opacity", 1 - $(window).scrollTop() / 250);
  });
>>>>>>> Stashed changes
