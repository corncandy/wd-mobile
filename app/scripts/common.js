'use strict';

// var WUI = window.WUI || {};

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    if (FastClick) {
      FastClick.attach(document.body);
    }
  }, false);
}
