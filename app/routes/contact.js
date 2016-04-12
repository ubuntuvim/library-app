import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('contact');
    },
    willTransition() {
      //  重置model，当发生路由切换的时候清空输入框的内容以及提示信息
      let model = this.controller.get('model');

      if (model.get('isNew')) {
         model.destroyRecord();
      }
    }
});
