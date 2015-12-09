var Dispatcher = require('../dispatcher/Dispatcher.js');
console.log(Dispatcher);
var KeyMap = {
		90:'C2',
    88:'D2',
    67:'E2',
    86:'F2',
    66:'G2',
    78:'A2',
    77:'B2',
    65:'C3',
    83:'D3',
    68:'E3',
    70:'F3',
    71:'G3',
    72:'A3',
    74:'B3',
    75:'C4',
    76:'D4',
    81:'E4',
    87:'F4',
    69:'G4',
    82:'A4',
    84:'B4',
    89:'C5',
    85:'D5',
    73:'E5',
    79:'F5'
	};

var KeyActions = {
  pressed: function (event) {
    Dispatcher.dispatch({
      actionType: "PRESS",
      note: KeyMap[event.keyCode]
    });
  },

  released: function (event) {
    Dispatcher.dispatch({
      actionType: "RELEASE",
      note: KeyMap[event.keyCode]
    });
  }
};

module.exports = KeyActions;
