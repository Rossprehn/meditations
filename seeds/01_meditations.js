exports.seed = function(knex, Promise) {
  return knex('meditations')
    .del()
    .then(function() {
      return knex('meditations').insert([
        {
          id: 1,
          uri: 'https://www.youtube.com/watch?v=taxs_vhlxgs',
          type: 'morning',
          length: 'short'
        },
        {
          id: 2,
          uri: 'https://www.youtube.com/watch?v=WYP_W49o1vQ',
          type: 'morning',
          length: 'medium'
        },
        {
          id: 3,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'morning',
          length: 'long'
        }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE meditations_id_seq RESTART WITH 4;')
    })
}
