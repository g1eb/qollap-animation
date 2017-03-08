'use strict';

var app = {

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
    element.style.background = '#'+Math.random().toString(16).substr(2,6);
    element.classList.add('hidden');
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
      element.style.background = '#'+Math.random().toString(16).substr(2,6);
      app.animate(element);
    }, timeout, element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);
