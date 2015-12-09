var ReactDOM = require('react-dom');
var React = require('react');
var Organ = require('./components/Organ.jsx');

var KeyListener = require('./util/KeyListener.js');
var KeyActions = require('./actions/KeyActions.js');
var KeyStore = require('./stores/KeyStore.js');

KeyListener();



document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#root');
  ReactDOM.render(<Organ />, root);
});
