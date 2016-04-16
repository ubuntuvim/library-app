// app/routes/libraries/index.js

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('library');
  },
  actions: {
      // 删除一个library记录
      deleteLibrary(library) {  //参数library已经在模板中传递过来
          let confirmation = confirm('Are you sure?');

          if (confirmation) {
            library.destroyRecord();
          }
    }
  }
});
