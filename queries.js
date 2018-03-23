const database = require('./database-connection')

//yo

module.exports = {
  list(meditations) {
    return database('meditations').select()
  },
  read(meditations, id) {
    return database('meditations')
      .select('*')
      .where('id', id)
      .first()
  },
  create(meditations, item) {
    return database('meditations')
      .insert(item)
      .returning('*')
      .then(record => record[0])
  },
  update(id, meditations) {
    return database('meditations')
      .update(meditations)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  },
  delete(meditations, id) {
    return database('meditations')
      .delete()
      .where('id', id)
  }
}
