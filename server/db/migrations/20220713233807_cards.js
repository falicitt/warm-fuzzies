exports.up = function (knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id') // integer ++
    table.text('name')
    table.text('person_name')
    table.timestamps('created_at')
    table.boolean('complete').defaultsTo(false)
    table.text('card_string')
    table.text('added_by_user')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('cards')
}
