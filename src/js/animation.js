'use strict';

var app = {

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'container';
    document.body.appendChild(app.container);
  },

  add: function () {
  },

  animate: function () {
  },

};

document.addEventListener('DOMContentLoaded', app.init);
