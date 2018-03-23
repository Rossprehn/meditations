const express = require('express')
const app = express()
const cors = require('cors')
const queries = require('./queries')
const bodyParser = require('body-parser')
const database = require('./database-connection')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (request, response) => {
  queries.list('meditations').catch(console.error)
})

app.get('/meditations', (request, response) => {
  queries
    .list('meditations')
    .then(meditations => {
      response.json({ meditations })
    })
    .catch(console.error)
})

app.get('/meditations/:id', (request, response) => {
  queries
    .read('meditations', request.params.id)
    .then(meditations => {
      meditations ? response.json({ meditations }) : response.sendStatus(404)
    })
    .catch(console.error)
})

app.post('/meditations', (request, response) => {
  queries
    .create('meditations', request.body)
    .then(meditations => {
      response.status(201).json({ meditations: meditations })
    })
    .catch(console.error)
})

app.post('/meditations/:id', (request, response) => {
  queries
    .create('meditations', request.body)
    .then(meditations => {
      response.status(201).json({ meditations: meditations })
    })
    .catch(console.error)
})

app.delete('/meditations/:id', (request, response) => {
  queries
    .delete('meditations', request.params.id)
    .then(() => {
      response.sendStatus(204)
    })
    .catch(console.error)
})

app.put('/meditations/:id', (request, response) => {
  queries
    .update('meditations', request.params.id, request.body)
    .then(meditations => {
      response.json({ meditations: meditations[0] })
    })
    .catch(console.error)
})

app.use((request, response) => {
  response.send(404)
})

module.exports = app
