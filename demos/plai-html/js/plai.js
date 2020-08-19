(function ($) {
  "use strict";

  $(".datepicker").datepicker({
    format: "dd/mm/yyyy"
  });

  // Select with image
  var items = [];

  $(".select-with-image select option").each(function () {
    var img   = $(this).attr("data-thumbnail");
    var value = $(this).val();
    var item  = '<li><img src="' + img + '" alt="" value="' + value + '"/></li>';

    items.push(item);
  })

  var item = $(".item")[0];

  $(item).html(items);

  //Set the button value to the first el of the array
  $(".btn-select").html(items[0]);

  //change button on click
  $(item).children("li").click(function () {
    var img = $(this).find("img").attr("src");
    var value = $(this).find("img").attr("value");
    var item = '<li><img src="' + img + '" alt="" /></li>';

    $(".btn-select").html(item);
    $(".btn-select").attr("value", value);
    $(".item-list").toggle();
  });

  $(".btn-select").click(function () {
    $(".item-list").toggle();
  });
})(jQuery);
