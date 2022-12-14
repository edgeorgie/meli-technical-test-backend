const express = require('express')
const cors = require('cors')

const routes = require('./routes/index.routes')

const app = express()

app.use(cors())
app.use('/api/items', routes)

module.exports = app