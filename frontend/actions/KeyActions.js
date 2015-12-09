var Dispatcher = require('../dispatcher/Dispatcher.js');
var KEYMAP = require('../constants/KeyMap.js');



var KeyActions = {
  pressed: function (event) {
    Dispatcher.dispatch({
      actionType: "PRESS",
      note: KEYMAP[event.keyCode]
    });
  },

  released: function (event) {
    Dispatcher.dispatch({
      actionType: "RELEASE",
      note: KEYMAP[event.keyCode]
    });
  }
};

module.exports = KeyActions;
