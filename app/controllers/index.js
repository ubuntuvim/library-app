// app/controller/index.js

import Ember from 'ember';

export default Ember.Controller.extend({

    headerMessage: 'Coming Soon',

    responseMessage: '',  // 设置默认值为空字符串

    emailAddress: '',  // 设置默认值为空字符串
    //  使用正则表达式判断邮箱格式，如果正确则返回true反之返回false
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    // 把计算属性isValid绑定到isDisabled上
    isDisabled: Ember.computed.not('isValid'),  //当`disabled=false`时按钮可用，所以正好需要取反

    actions: {
        saveInvitation: function() {
            const email = this.get('emailAddress');
            //  创建一个模型对象
            const newInvitaction = this.store.createRecord('invitation', { email: email });

             //保存模型对象到store中
            newInvitaction.save().then((response) => {
                console.log('id = ' + response.get('id'));
                console.log('email = ' + response.get('email'));
                this.set('responseMessage', `Thank you! We've just saved your email address: ${response.get('id')}`);
                //  情况输入框内容
                this.set('emailAddress', '');
            }, (reason) => {
                this.set('responseMessage', `Saved: ${this.get('emailAddress')} failed！`);
                //  情况输入框内容
                this.set('emailAddress', '');
            });
        }
    }

});
