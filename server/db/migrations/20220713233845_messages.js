exports.up = function (knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id'); // integer ++
    table.string('name');
    table.string('message');
    table.string('image');
    table.integer('card_id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('messages');
};
