var KeyActions = require('../actions/KeyActions.js');

var KeyListener = function(){
  $(document).on("keydown", function(e){
    KeyActions.pressed(e);
  });

  $(document).on("keyup", function(e){
    KeyActions.released(e);
  });
};

module.exports = KeyListener;
