// app/routes/admin/seeder.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
        // 返回三个模型对象列表
        return Ember.RSVP.hash({
          libraries: this.store.findAll('library'),
          books: this.store.findAll('book'),
          authors: this.store.findAll('author')
      });
  },

  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
  }
});
