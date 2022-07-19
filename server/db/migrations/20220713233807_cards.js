exports.up = function (knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id') // integer ++
    table.string('name')
    table.string('person_name')
    table.timestamps('created_at')
    table.boolean('complete').defaultsTo(false)
    table.string('card_string')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('cards')
}
