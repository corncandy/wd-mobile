'use strict';

$(function() {
  var low = 350;
  var high = 950;
  var amount = 600;
  var current = 350;
  var $progress = $('.progress .fill');
  var $point = $('.point-value').text(current);

  $('.raise-button').click(function() {
    current += 50;
    if (current > high) {
      current = low;
    }
    $progress.css('transform', 'rotate(' + (current - 350) * 180 / amount + 'deg)');
    $point.text(current);
  });
});
