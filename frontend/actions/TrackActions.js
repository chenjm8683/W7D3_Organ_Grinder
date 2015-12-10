var Dispatcher = require('../dispatcher/Dispatcher.js');

var TrackActions = {
  save: function (track) {
    Dispatcher.dispatch({
      actionType: "SAVE",
      track: track
    });
  },
  delete: function (track) {
    Dispatcher.dispatch({
      actionType: "DELETE",
      track: track
    });
  }
};

module.exports = TrackActions;
