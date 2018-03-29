exports.seed = function(knex, Promise) {
  return knex('meditations')
    .del()
    .then(function() {
      return knex('meditations').insert([
        {
          id: 1,
          uri: 'https://www.youtube.com/watch?v=taxs_vhlxgs',
          type: 'Morning',
          length: 'Short',
          voice: 'Vocal'
        },
        {
          id: 2,
          uri: 'https://www.youtube.com/watch?v=WYP_W49o1vQ',
          type: 'Morning',
          length: 'Medium',
          voice: 'Vocal'
        },
        {
          id: 3,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Morning',
          length: 'Long',
          voice: 'Vocal'
        },
        {
          id: 4,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Morning',
          length: 'Short',
          voice: 'Music'
        },
        {
          id: 5,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Morning',
          length: 'Medium',
          voice: 'Music'
        },
        {
          id: 6,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Morning',
          length: 'Long',
          voice: 'Music'
        },
        {
          id: 7,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Motivation',
          length: 'Short',
          voice: 'Vocal'
        },
        {
          id: 8,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Motivation',
          length: 'Medium',
          voice: 'Vocal'
        },
        {
          id: 9,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Motivation',
          length: 'Long',
          voice: 'Vocal'
        },
        {
          id: 10,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Motivation',
          length: 'Short',
          voice: 'Vocal'
        },
        {
          id: 11,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Sleep',
          length: 'Short',
          voice: 'Vocal'
        },
        {
          id: 12,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Sleep',
          length: 'Medium',
          voice: 'Vocal'
        },
        {
          id: 13,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Sleep',
          length: 'Long',
          voice: 'Vocal'
        },
        {
          id: 14,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Sleep',
          length: 'Short',
          voice: 'Music'
        },
        {
          id: 15,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Sleep',
          length: 'Medium',
          voice: 'Music'
        },
        {
          id: 16,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Sleep',
          length: 'Long',
          voice: 'Music'
        }
      ])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE meditations_id_seq RESTART WITH 17;')
    })
}
