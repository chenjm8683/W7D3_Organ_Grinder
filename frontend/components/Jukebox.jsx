var TrackStore = require('../stores/TrackStore.js');
var TrackActions = require('../actions/TrackActions.js');
var React = require('react');
var TrackPlayer = require('./TrackPlayer.jsx');

var Jukebox = React.createClass({

  getInitialState: function() {
    return ({
      tracks: TrackStore.all()
    });
  },

  _tracksChanged: function() {
    this.setState({
      tracks: TrackStore.all()
    });
  },

  componentWillUnmount: function() {
    // KeyStore.removeListener(this._keysChanged);
    this.aToken.remove();
  },

  componentDidMount: function() {
    this.aToken = TrackStore.addListener(this._tracksChanged);

  },

  render: function(){

    return(
      <ul>
        {
          this.state.tracks.map(function(track, idx) {
            return(
              <li key={idx}>
                <TrackPlayer track={track}/>
              </li>
            );
          })
        }
      </ul>

    );
  }
});

module.exports = Jukebox;
