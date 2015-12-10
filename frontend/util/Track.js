var KeyActions = require('../actions/KeyActions.js');

var Track = function(options) {
  this.name = options.name;
  this.roll = options.roll;
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = new Date();
};

Track.prototype.addNotes = function (notes) {
  var currentTime = new Date();

  this.roll.push({
    timeSlice: currentTime - this.startTime,
    notes: notes
  });
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);

  console.log(this.roll);
};

Track.prototype.play = function () {
  if (typeof this.interval === 'undefined' || this.interval === null){
    var playbackStartTime = new Date();
    var currentSample = 0;
    var justPlayed = [];
    var toPlayNow = [];
    this.interval = setInterval(function(){
      //if current sample within roll
      if (currentSample < this.roll.length){
        //if time elapsed since playbackStart = timeslice of sample
        if(this.roll[currentSample]["timeSlice"] < new Date() - playbackStartTime){
          justPlayed = toPlayNow;
          toPlayNow = this.roll[currentSample]["notes"];

          KeyActions.playback(justPlayed, toPlayNow);
          currentSample++;
        }
      } else {
        clearInterval(this.interval);
        this.interval = null;
      }
    }.bind(this), 10);
  } else {
    return;
  }



};

module.exports = Track;
