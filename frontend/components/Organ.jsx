var KeyStore = require('../stores/KeyStore.js');
var React = require('react');
var Key = require('./Key.jsx');
var KEYMAP = require('../constants/KeyMap.js');

var Organ = React.createClass({
  getInitialState: function(){
    var notes = Object.keys(KEYMAP).map(function(key){
      return KEYMAP[key];
    });

    return({notes: notes});
  },

  render: function(){
    console.log(this.state.notes);
    return(
      <div>
      {
        this.state.notes.map(function(name){
          return(<Key noteName={name} key={name} />);
        })
      }
    </div>
  );
  }
});

module.exports = Organ;
