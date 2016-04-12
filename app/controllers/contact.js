import Ember from 'ember';

export default Ember.Controller.extend({

        // emailAddress: '',  // 设置默认值为空字符串
        // message: '', // 信息内容
        //
        // //  判断信息长度是否大于5
        // msgLen: Ember.computed.gte('message.length', 5),
        //
        // //  使用正则表达式判断邮箱格式，如果正确则返回true反之返回false
        // isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
        // //  判断长度和邮件格式同时符合
        // disabled: Ember.computed.and('msgLen', 'isValid'),
        // //当`disabled=false`时按钮可用，所以正好需要取反
        // isDisabled: Ember.computed.not('disabled'),  //当`disabled=false`时按钮可用，所以正好需要取反
        //
        // // 不适用Ember封装的方法，手动写判断
        // isDisabled2: Ember.computed('message', 'emailAddress', function() {
        //     var msg = this.get('message');
        //     var email = this.get('emailAddress');
        //     var re = /^.+@.+\..+$/;
        //     //当`disabled=false`时按钮可用，所以正好需要取反
        //     return !(msg.length >= 5 && re.test(email));
        // }),

        actions: {
            saveInvitation: function(newContact) {
                //  注意alert中字符串两边使用的是 `  不是单引号或者双引号
                // alert(`Saving of the following email address is in propgress: ${this.get('emailAddress')}`);
                // 模拟保存操作
                // this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}message is ${this.get('message')}`);
                // //  清空输入内容
                // this.set('emailAddress', '');
                // this.set('message', '');

                // 保存数据到firebase
                newContact.save().then((responseMessage) => {
                    this.set('model.responseMessage', `Thank you! We've just saved your email address: ${responseMessage.get('email')}message is ${responseMessage.get('message')}`);
                    //  清空输入内容
                    // this.set('model.email', '');
                    // this.set('model.message', '');
                    // 或者
                    let model = this.get('model');
                    if (model.get('isNew')) {
                      model.destroyRecord();
                    }
                });
            }
        }

});
