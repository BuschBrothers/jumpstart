

$(document).ready(function() {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false,
    dots: true,
    infinite: true
  });

  var $scrollx = 0;
  $(window).scroll(function() {
    var $scrolly = $(this).scrollTop();
    if ($scrolly - $scrollx > 50) {
      var $scrollz = $('nav').css('height');
      $('nav').animate({top: '-' + $scrollz}, 150);
      $scrollx = $scrolly;
    } else if ($scrollx - $scrolly > 50) {
      $('nav').animate({top: '0px'}, 150);
      $scrollx = $scrolly;
    }
    // console.log($scrollx, $scrolly, $scrollz);
  });
});
