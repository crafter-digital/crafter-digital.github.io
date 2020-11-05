(function ($) {
  "use strict";

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
