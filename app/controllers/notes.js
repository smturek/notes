import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {

      if('noteCopy' !== "") {
        var body = this.get('noteCopy');

        var note = this.store.createRecord('note', { body: body });
        this.set('noteCopy', '');

        note.save();
      }

    },

    deleteNote: function (id) {
      var note = this.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save();
      });
    }
  }
});
