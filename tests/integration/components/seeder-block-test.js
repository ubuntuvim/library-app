import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('seeder-block', 'Integration | Component | seeder block', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{seeder-block}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#seeder-block}}
      template block text
    {{/seeder-block}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
