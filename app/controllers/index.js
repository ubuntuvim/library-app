// app/controller/index.js

import Ember from 'ember';

export default Ember.Controller.extend({
    // isDisabled: true, //设置默认值为true

    emailAddress: '',  // 设置默认值为空字符串

    // isDisabled: Ember.computed('emailAddress', function() {
    //     return '' === this.get('emailAddress');  //判断输入框内容是否为空
    // })

    emailAddress: '',  // 设置默认值为空字符串
    //  使用正则表达式判断邮箱格式，如果正确则返回true反之返回false
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    // 把计算属性isValid绑定到isDisabled上
    isDisabled: Ember.computed.not('isValid'),  //当`disabled=false`时按钮可用，所以正好需要取反

    actions: {
        saveInvitation: function() {
            //  注意alert中字符串两边使用的是 `  不是单引号或者双引号
            // alert(`Saving of the following email address is in propgress: ${this.get('emailAddress')}`);
            // 模拟保存操作
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            //  情况输入框内容
            this.set('emailAddress', '');
        }
    }

    // 定义一个计算属性，当属性emailAddress发生变化时会被执行不是主动执行的，是要有人调用才执行，
    // 比如执行：this.get('actualEmailAddress')去调用这个属性才会执行
    // actualEmailAddress: Ember.computed('emailAddress', function() {
    //     console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    // }),
    // 定义一个观察器，当属性emailAddress发生变化时会自动执行，也就是说观察器会检测属性emailAddress值的变化
    // emailAddressChanged: Ember.observer('emailAddress', function() {
    //     console.log('observer is called: ', this.get('emailAddress'));
    // })
});
