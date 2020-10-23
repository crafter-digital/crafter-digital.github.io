(function ($) {
  "use strict";

  $(".list-dropdown > a").on("click", function() {
    $(".list-submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
      $(".list-dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".list-dropdown").removeClass("active");
      $(this).next(".list-submenu").slideDown(200);
      $(this).parent().addClass("active");
      $('html, body').animate({
        scrollTop: $(this).parent().offset().top
      }, 500);
    }
  });

  lazyLoadImage();

  function lazyLoadImage() {
    $(".lazy-wrapper").each(function(i, wrapper) {
      var img = $(wrapper).children('img');
      $(img).attr("src", $(wrapper).data("src"))

      $(img).on("load", function() {
        $(img).show();
        $(wrapper).css("background", "unset");
        $(wrapper).css("filter", "none");
      });
    });
  }
})(jQuery);
