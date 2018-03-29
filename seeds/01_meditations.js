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
          voice: 'Spoken'
        },
        {
          id: 2,
          uri: 'https://www.youtube.com/watch?v=WYP_W49o1vQ',
          type: 'Morning',
          length: 'Medium',
          voice: 'Spoken'
        },
        {
          id: 3,
          uri: 'https://www.youtube.com/watch?v=OboD7JrT0NE',
          type: 'Morning',
          length: 'Long',
          voice: 'Spoken'
        },
        {
          id: 4,
          uri: 'https://www.youtube.com/watch?v=KZHSR5VG0uU',
          type: 'Morning',
          length: 'Short',
          voice: 'Music'
        },
        {
          id: 5,
          uri: 'https://www.youtube.com/watch?v=K-McnOai_Zo',
          type: 'Morning',
          length: 'Medium',
          voice: 'Music'
        },
        {
          id: 6,
          uri: 'https://www.youtube.com/watch?v=nrXuS5czlF8',
          type: 'Morning',
          length: 'Long',
          voice: 'Music'
        },
        {
          id: 7,
          uri:
            'https://www.youtube.com/watch?v=cFfP7N8wpMA&t=0s&index=2&list=PLZf3NUXeOhUuWVnux1k6u6aGBh9_iqo0u',
          type: 'Motivation',
          length: 'Short',
          voice: 'Spoken'
        },
        {
          id: 8,
          uri: 'https://www.youtube.com/watch?v=_Ub9kncj5J0&t=72s',
          type: 'Motivation',
          length: 'Medium',
          voice: 'Spoken'
        },
        {
          id: 9,
          uri:
            'https://www.youtube.com/watch?v=sP7CChezoN4&t=0s&index=5&list=PLZf3NUXeOhUuWVnux1k6u6aGBh9_iqo0u',
          type: 'Motivation',
          length: 'Long',
          voice: 'Spoken'
        },
        {
          id: 10,
          uri: 'https://www.youtube.com/watch?v=8IjzV3mt2T8',
          type: 'Motivation',
          length: 'Short',
          voice: 'Music'
        },
        {
          id: 11,
          uri: 'https://www.youtube.com/watch?v=yQLCWiekZV0',
          type: 'Sleep',
          length: 'Short',
          voice: 'Spoken'
        },
        {
          id: 12,
          uri:
            'https://www.youtube.com/watch?v=y8LIbeKQ60U&t=0s&index=8&list=PLZf3NUXeOhUuWVnux1k6u6aGBh9_iqo0u',
          type: 'Sleep',
          length: 'Medium',
          voice: 'Spoken'
        },
        {
          id: 13,
          uri:
            'https://www.youtube.com/watch?v=q76bMs-NwRk&t=0s&index=11&list=PLZf3NUXeOhUuWVnux1k6u6aGBh9_iqo0u',
          type: 'Sleep',
          length: 'Long',
          voice: 'Spoken'
        },
        {
          id: 14,
          uri: 'https://www.youtube.com/watch?v=asg8XMzOvCE',
          type: 'Sleep',
          length: 'Short',
          voice: 'Music'
        },
        {
          id: 15,
          uri:
            'https://www.youtube.com/watch?v=N4qCFFBrrgk&t=0s&index=12&list=PLZf3NUXeOhUuWVnux1k6u6aGBh9_iqo0u',
          type: 'Sleep',
          length: 'Medium',
          voice: 'Music'
        },
        {
          id: 16,
          uri:
            'https://www.youtube.com/watch?v=CVvdAWp37jw&t=0s&index=10&list=PLZf3NUXeOhUuWVnux1k6u6aGBh9_iqo0u',
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
