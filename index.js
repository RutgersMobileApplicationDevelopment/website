console.log("hello")

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > $(".section1").offset().top-120) {
         $(".navbar").addClass("navChangeColor");
         $(".navbar-toggler").addClass("custom-toggler");
         $("#bootstrap-overrides .navbar-dark .navbar-nav .nav-link").addClass("navLinkChangeColor");
      }
      if ($(this).scrollTop() < $(".section1").offset().top-120) {
         $(".navbar").removeClass("navChangeColor");
         $(".navbar-toggler").removeClass("custom-toggler");
         $("#bootstrap-overrides .navbar-dark .navbar-nav .nav-link").removeClass("navLinkChangeColor");
      }
   });
});
