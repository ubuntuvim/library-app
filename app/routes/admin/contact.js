// app/routes/contact.js

import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.findAll('contact');
    },
    actions: {
        deleteContact: function(contact) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
              contact.destroyRecord();
            }
        }
    }
});
