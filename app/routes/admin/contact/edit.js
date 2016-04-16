// app/routes/admin/contact/edit.js

import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    // 获取动态段library_id的值
    return this.store.findRecord('contact', params.contact_id);
  },

  actions: {

    saveContact(newContact) {
      newContact.save().then(() => this.transitionTo('admin.contact'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
