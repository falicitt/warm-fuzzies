exports.up = function (knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id'); // integer ++
    table.text('name');
    table.text('message');
    table.text('image');
    table.integer('card_id').references("cards.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('messages');
};
