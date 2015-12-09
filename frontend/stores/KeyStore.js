var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');

var KeyStore = new Store(Dispatcher);

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
var _keys = [];

var addNote = function (note) {
  _keys.pushUnique(note);
  KeyStore.__emitChange();
};

var removeNote = function (note) {
  _keys.remove(note);
  KeyStore.__emitChange();
};


KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "PRESS":

      addNote(payload.note);
      break;
    case "RELEASE":
      removeNote(payload.note);
      break;
  }
};

module.exports = KeyStore;
