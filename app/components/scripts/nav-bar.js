'use strict';

WUI.NavBar = (function() {
  var create = function(options) {
    var $el = options.$el;

    $el.html(WUI.templates['nav-bar'](options));

    if (options.rightCallback) {
      $el.find('.right-button').click(options.rightCallback);
    }
  };

  return {
    create: create
  };
})();
