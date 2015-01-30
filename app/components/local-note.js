import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['local-notes'],

  actions: {
    deleteNote: function(id) {
      this.sendAction('deleteNote', id);
    }
  }
});
