var TrackStore = require('../stores/TrackStore.js');
var Track = require('./Track.js');

var TrackApi = {
  fetch: function(){
    $.get("/tracks", {}, function(tracks){
      TrackStore._tracks = tracks.map(function(track) {
        return new Track(track);
      });
    });
  },
  create: function(data) {
    $.post("/tracks", {track: data}, function(track) {
      TrackStore.push(new Track(track));
    });
  }
};

module.exports = TrackApi;
