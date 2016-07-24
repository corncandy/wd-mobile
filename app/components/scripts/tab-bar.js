'use strict';

WUI.TabBar = (function() {
  var create = function(options) {
    var $el = options.$el;
    var tabs = options.tabs;

    $el.html(WUI.templates['tab-bar'](options));

    $el.find('.tab-button').click(function() {
      $(this).click(tabs[$(this).index()].callback);
    });
  };

  return {
    create: create
  };
})();
