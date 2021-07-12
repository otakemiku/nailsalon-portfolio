$(function(){
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    aroow: true,
    dots: true,
    centerMode: true,
    centerPadding: "15rem"
  });
});

$(function () {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  });
});