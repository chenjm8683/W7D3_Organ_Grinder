var TrackStore = require('../stores/TrackStore.js');
var TrackActions = require('../actions/TrackActions.js');
var React = require('react');

var TrackPlayer = React.createClass({
  play: function(){
    this.props.track.play();
  },
  delete: function(){
    TrackActions.delete(this.props.track);
  },
  render: function(){
    return(
      <div>
        <span>{this.props.track.name}</span>
        <button onClick={this.play}>Play</button>
        <button onClick={this.delete}>Delete</button>
      </div>
    );
  }
});
module.exports = TrackPlayer;
