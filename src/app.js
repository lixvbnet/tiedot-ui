let  Node = require('basis.ui').Node;
let Menu = require('app.components.menu.collection.index');
let router = require('basis.router');

module.exports = require('basis.app').create({
  title: 'Tiedot',
  init: function(){
    return new Node({
      template: resource('./app/template/layout.tmpl'),
      binding: {
        menu: 'satellite:',
      },
        satellite: {
            menu: Menu,
        }
    });
  }
}).ready(() => {
    router.route('*page').param('page').as(page => page || router.navigate('', true));
});