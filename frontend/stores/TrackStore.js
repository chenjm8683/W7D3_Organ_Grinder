var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');

var TrackStore = new Store(Dispatcher);

Array.prototype.pushUnique = function (item){
    if(this.indexOf(item) === -1) {
    //if(jQuery.inArray(item, this) == -1) {
        this.push(item);
        return true;
    }
    return false;
};

Array.prototype.remove = function (item){
  var i = this.indexOf(item);
  if(i !== -1) {
    this.splice(i, 1);
  }
};

//After initial testing these lines can be removed
//window.RecipeStore = RecipeStore;
//window.AppDispatcher = AppDispatcher;
var _tracks = [];

var addTrack = function (track) {
  console.log(track);
  _tracks.pushUnique(track);
  TrackStore.__emitChange();
};

var removeTrack = function (track) {
  _tracks.remove(track);
  TrackStore.__emitChange();
};


TrackStore.all = function () {
  return _tracks.slice();
};

TrackStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "SAVE":
      addTrack(payload.track);
      break;
    case "DELETE":
      removeTrack(payload.track);
      break;
  }
};

module.exports = TrackStore;
