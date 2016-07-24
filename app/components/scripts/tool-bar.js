'use strict';

WUI.ToolBar = (function() {
  var create = function(options) {
    var $el = options.$el;
    var buttons = options.buttons;

    $el.html(WUI.templates['tool-bar'](options));

    $el.find('.tool-button').click(function() {
      $(this).click(buttons[$(this).index()].callback);
    });
  };

  return {
    create: create
  };
})();
