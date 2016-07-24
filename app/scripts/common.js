'use strict';

var WUI = window.WUI || {};

WUI.init = function() {
  WUI.ready();
};

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    if (FastClick) {
      FastClick.attach(document.body);
    }
  }, false);
}
