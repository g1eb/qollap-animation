'use strict';

var app = {

  colors: [
    'rgb(205, 35, 39)',
    'rgb(0, 175, 220)',
    'rgb(242, 112, 35)',
    'rgb(191, 205, 63)',
    'rgb(152, 0, 212)',
  ],

  items: new Array(15),

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'container';
    document.body.appendChild(app.container);

    for ( var i = 0; i < app.items.length; i++ ) {
      app.add(app.items[i]);
    }
  },

  add: function () {
    var element = document.createElement('div');
    element.classList.add('hidden');
    element.addEventListener('mouseover', app.setColor, false);
    element.addEventListener('mouseout', app.setColor, false);
    element.appendChild(document.createElement('span'));
    element.appendChild(document.createElement('span'));
    app.container.appendChild(element);

    var timeout = Math.round(Math.random() * 1000);
    window.setTimeout(app.show, timeout, element);
  },

  show: function (element) {
    element.classList.remove('hidden');
    app.animate(element);
  },

  animate: function (element) {
    var timeout = Math.ceil(Math.random() * 15) * 1000;
    window.setTimeout(function (element) {
      element.classList.toggle('animate');
      app.animate(element);
    }, timeout, element);
  },

  setColor: function (event) {
    var element = event.target;
    if ( element.style.background ) {
      element.style.background = '';
    } else {
      element.style.background = app.getRandomColor();
    }
  },

  getRandomColor: function () {
    return app.colors[Math.floor(Math.random() * app.colors.length)];
  },

};

document.addEventListener('DOMContentLoaded', app.init);
