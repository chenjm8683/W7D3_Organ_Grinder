var KeyStore = require('../stores/KeyStore.js');
var React = require('react');
var TONES = require('../constants/tones.js');
var Note = require('../util/Notes.js');

var Key = React.createClass({
  getInitialState: function() {
    return({
      note: new Note(TONES[this.props.noteName]),
      isPlaying: false
    });
  },

  _keysChanged: function() {
    if(KeyStore.all().indexOf(this.props.noteName) !== -1){
      this.play();
      this.setState({isPlaying: true});
    } else if(this.state.isPlaying === true) {
      this.stop();
      this.setState({isPlaying: false});
    }
  },
  play: function(){
    this.state.note.start();
  },
  stop: function(){
    this.state.note.stop();
  },
  componentWillUnmount: function() {
    // KeyStore.removeListener(this._keysChanged);
    this.aToken.remove();
  },

  componentDidMount: function() {
    this.aToken = KeyStore.addListener(this._keysChanged);
  },

  render: function () {
    return(
      <div className={this.state.isPlaying ? "revealed" : "hidden"}>
        {this.props.noteName}
      </div>
    );
  }

});

module.exports = Key;
