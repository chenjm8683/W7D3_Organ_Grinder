var KeyStore = require('../stores/KeyStore.js');
var React = require('react');
var Key = require('./Key.jsx');
var KEYMAP = require('../constants/KeyMap.js');
var Track = require('../util/Track.js');

var Recorder = React.createClass({
  getInitialState: function() {
    return ({
      isRecording: false,
      track: new Track({
        name: "sample",
        roll: []
      })
    });
  },

  _keysChanged: function(){
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all());
    }
  },


  componentWillUnmount: function() {
    // KeyStore.removeListener(this._keysChanged);
    this.removeToken.remove();
  },

  componentDidMount: function() {
    this.removeToken = KeyStore.addListener(this._keysChanged);
  },

  startRecording: function() {
    var track = new Track({
        name: "sample",
        roll: []
      });
    track.startRecording();
    this.setState({
      isRecording: true,
      track: track
    });
  },

  stopRecording: function() {
    this.state.track.stopRecording();
    this.setState({
      isRecording: false
    });
  },

  play: function() {
    this.state.track.play();
  },

  render: function() {
    return(
      <div>
        <button onClick={this.startRecording}>Start Recording</button>
        <button onClick={this.stopRecording}>Stop Recording</button>
        <button onClick={this.play}>Play</button>
      </div>
    );
  }
});

module.exports = Recorder;
