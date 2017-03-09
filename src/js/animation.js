'use strict';

var app = {

  themes: [{
    name: 'Stamkracht',
    color: 'rgb(205, 35, 39)',
    image: '/dist/img/sk.png',
  }, {
    name: 'Qollap',
    color: 'rgb(0, 175, 220)',
    image: '/dist/img/qollap.png',
  }, {
    name: 'Whatsbizz',
    color: 'rgb(242, 112, 35)',
    image: '/dist/img/whatsbizz.png',
  }, {
    name: 'The Cloud Company',
    color: 'rgb(191, 205, 63)',
    image: '/dist/img/tcc.png',
  }, {
    name: 'Dasboard',
    color: 'rgb(152, 0, 212)',
    image: '/dist/img/dasboard.png',
  }],

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
    var timeout = Math.ceil(Math.random() * 25) * 1000;
    for ( var i = 0; i < element.children.length; i++ ) {
      element.children[i].style.transitionDuration = timeout + 'ms';
      var rotation = Math.round(Math.random()) * 4 - 2;
      element.children[i].style.transform = 'rotate('+rotation+'deg)';
    }

    window.setTimeout(function (element) {
      element.classList.toggle('animate');
      app.animate(element);
    }, timeout, element);
  },

  setColor: function () {
    if ( this.style.background ) {
      this.style.background = '';
    } else {
      this.style.background = app.getRandomColor();
    }
  },

  getRandomColor: function () {
    return app.themes[Math.floor(Math.random() * app.themes.length)].color;
  },

};

document.addEventListener('DOMContentLoaded', app.init);
