import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {

      if('noteCopy' !== "") {
        var body = this.get('noteCopy');
        var title = this.get('noteTitle');

        var note = this.store.createRecord('note', { body: body, title: title });
        this.set('noteCopy', '');
        this.set('noteTitle', '');

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
