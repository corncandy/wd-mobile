'use strict';

$(function() {
  var total = 950;
  var current = 0;
  var $progress = $('.progress .fill');
  var $point = $('.point-value');

  $('.raise-button').click(function() {
    current += 50;
    if (current > 950) {
      current = 0;
    }
    $progress.css('transform', 'rotate(' + current * 180 / 950 + 'deg)');
    $point.text(current);
  });
});
