const express = require('express')
const cors = require('cors')

const routes = require('./routes/index.routes')
const getDetail = require('./services/services')

const app = express()

const PORT = 3001 || 5000

app.use(cors())
app.use('/api/items', routes)

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})