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

  // select role
  $('#submitRole').click(function(){
    var checkedRadio = $('input[type=radio][name=role]:checked');
    if (checkedRadio) {
      var checkedValue = $(checkedRadio).val();
      $('#selectRole').text(checkedValue);
      $('#selectRole').addClass('select-custom__bold');
    }
  });

  $('#submitSport').click(function(){
    var checkedRadio = $('input[type=radio][name=sport]:checked');
    if (checkedRadio) {
      var checkedValue = $(checkedRadio).val();
      $('#selectSport').text(checkedValue);
      $('#selectSport').addClass('select-custom__bold');
    }
  });

  $('select.select-custom').each(function() {
    $(this).change(function() {
      $(this).addClass('select-custom__bold');
    })
  })

})(jQuery);
