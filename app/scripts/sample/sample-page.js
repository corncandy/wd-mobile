'use strict';

WUI.ready = function() {
  WUI.NavBar.create({
    $el: $('.nav-bar'),
    title: '信用生活',
    rightButton: '登录',
    rightCallback: function() {}
  });

  WUI.ToolBar.create({
    $el: $('.tool-bar'),
    buttons: [{
      icon: '../images/sample/sample-page-timeline@2x.png',
      name: '时光刻度',
      callback: function() {}
    }, {
      icon: '../images/sample/sample-page-salary@2x.png',
      name: '工资测评',
      callback: function() {}
    }, {
      icon: '../images/sample/sample-page-phone@2x.png',
      name: '手机号估值',
      callback: function() {}
    }, {
      icon: '../images/sample/sample-page-developing@2x.png',
      name: '开发中',
      callback: function() {}
    }]
  });

  WUI.TabBar.create({
    $el: $('.tab-bar'),
    tabs: [{
      icon: '../images/sample/sample-page-person@2x.png',
      name: '查个人',
      callback: function() {}
    }, {
      icon: '../images/sample/sample-page-company@2x.png',
      name: '查企业',
      callback: function() {}
    }, {
      icon: '../images/sample/sample-page-life@2x.png',
      name: '信用生活',
      active: true,
      callback: function() {}
    }, {
      icon: '../images/sample/sample-page-mine@2x.png',
      name: '我的',
      callback: function() {}
    }]
  })

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
};

$(function() {
  WUI.init();
});
