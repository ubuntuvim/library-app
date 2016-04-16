// app/models/contact.js

//  记得要手动导入Ember
import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  responseMessage: '',

  //  判断信息长度是否大于5
  msgLen: Ember.computed.gte('message.length', 5),

  //  使用正则表达式判断邮箱格式，如果正确则返回true反之返回false
  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  //  判断长度和邮件格式同时符合
  disabled: Ember.computed.and('msgLen', 'isValid'),
  //当`disabled=false`时按钮可用，所以正好需要取反
  isDisabled: Ember.computed.not('disabled')  //当`disabled=false`时按钮可用，所以正好需要取反
});
