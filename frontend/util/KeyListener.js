var KeyActions = require('../actions/KeyActions.js');

var KeyListener = function(){
  $(document).on("keydown", function(e){
    if(e.target.className !== "input"){
      KeyActions.pressed(e);
    }
  });

  $(document).on("keyup", function(e){
    if(e.target.className !== "input"){
      KeyActions.released(e);
    }
  });
};

module.exports = KeyListener;
