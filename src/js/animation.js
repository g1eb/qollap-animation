'use strict';

var app = {

  themes: [{
    name: 'Stamkracht',
    color: 'rgb(205, 35, 39)',
    image: '/dist/img/stamkracht.png',
    link: 'http://www.stamkracht.com/',
  }, {
    name: 'Qollap',
    color: 'rgb(0, 175, 220)',
    image: '/dist/img/qollap.png',
    link: 'http://www.qollap.com/',
  }, {
    name: 'Whatsbizz',
    color: 'rgb(242, 112, 35)',
    image: '/dist/img/whatzbiz.png',
    link: 'http://www.whatz.biz/',
  }, {
    name: 'The Cloud Company',
    color: 'rgb(191, 205, 63)',
    image: '/dist/img/thecloudcompany.png',
    link: 'http://www.thecloudcompany.nl/',
  }, {
    name: 'Dasboard',
    color: 'rgb(152, 0, 212)',
    image: '/dist/img/dasboard.png',
    link: 'http://dasboard.co/',
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
    element.addEventListener('mouseover', app.showItem, false);
    element.addEventListener('mouseout', app.showItem, false);
    element.appendChild(document.createElement('span'));
    element.appendChild(document.createElement('span'));
    app.container.appendChild(element);

    var timeout = Math.round(Math.random() * 1000);
    window.setTimeout(function () {
      element.classList.remove('hidden');
      app.animate(element);
    }, timeout, element);
  },

  animate: function (element) {
    var timeout = Math.ceil(Math.random() * 25) * 1000;
    for ( var i = 0; i < element.children.length; i++ ) {
      if ( element.children[i].nodeName.toLowerCase() !== 'img' ) {
        element.children[i].style.transitionDuration = timeout + 'ms';
        var rotation = Math.round(Math.random()) * 4 - 2;
        element.children[i].style.transform = 'rotate('+rotation+'deg)';
      }
    }

    window.setTimeout(function (element) {
      element.classList.toggle('animate');
      app.animate(element);
    }, timeout, element);
  },

  showItem: function () {
    var theme = app.getRandomTheme();
    if ( this.style.background ) {
      this.style.background = '';
      for ( var i = 0; i < this.children.length; i++ ) {
        if ( this.children[i].nodeName.toLowerCase() === 'img' ) {
          this.removeChild(this.children[i]);
        }
      }
    } else {
      this.style.background = theme.color;
      var image = document.createElement('img');
      image.setAttribute('src', theme.image);
      this.appendChild(image);
    }
  },

  getRandomTheme: function () {
    return app.themes[Math.floor(Math.random() * app.themes.length)];
  },

};

document.addEventListener('DOMContentLoaded', app.init);
