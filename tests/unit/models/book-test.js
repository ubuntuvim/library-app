import { moduleForModel, test } from 'ember-qunit';

moduleForModel('book', 'Unit | Model | book', {
  // Specify the other units that are required for this test.
  needs: ['model:library', 'model:author']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
