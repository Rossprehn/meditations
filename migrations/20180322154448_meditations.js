exports.up = function(knex, Promise) {
  return knex.schema.createTable('meditations', table => {
    table.increments('id').primary()
    table.string('uri')
    table.text('type')
    table.text('length')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('meditations')
}
