// app/models/author.js

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Faker from 'faker';

export default Model.extend({

  name: attr('string'),
  // async设置为true：在获取book的同时会把关联的author也加载出来
  books: hasMany('book', {inverse: 'author', async: true}),

  randomize() {
    this.set('name', Faker.name.findName());
    return this;
  }

});
