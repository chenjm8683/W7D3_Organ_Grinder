var KeyStore = require('../stores/KeyStore.js');
var React = require('react');
var TONES = require('../constants/tones.js');
var Note = require('../util/Notes.js');

var Key = React.createClass({
  getInitialState: function() {
    return({
      note: new Note(TONES[this.props.noteName]),
      beenPlayed: false
    });
  },

  _keysChanged: function() {
    if(KeyStore.all().indexOf(this.props.noteName) !== -1){
      this.play();
      this.state.beenPlayed = true;
    } else if(this.state.beenPlayed === true) {
      this.stop();
      this.state.beenPlayed = false;
    }
  },
  play: function(){
    this.state.note.start();
  },
  stop: function(){
    this.state.note.stop();
  },
  componentWillUnmount: function() {
    KeyStore.removeListener(this._keysChanged);
  },

  componentDidMount: function() {
    KeyStore.addListener(this._keysChanged);
  },

  render: function () {
    return(<div>{this.props.noteName}</div> );
  }

});

module.exports = Key;
