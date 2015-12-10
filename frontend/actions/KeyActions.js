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
  },

  playback: function (toRelease, toPress) {
    toRelease.map(function(note) {
      Dispatcher.dispatch({
        actionType: "RELEASE",
        note: note
      });
    });

    toPress.map(function(note) {
      Dispatcher.dispatch({
        actionType: "PRESS",
        note: note
      });
    });
  }
};

module.exports = KeyActions;
