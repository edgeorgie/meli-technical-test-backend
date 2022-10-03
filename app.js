const express = require('express')
const cors = require('cors')

const routes = require('./routes/index.routes')

const app = express()

app.use(cors())
app.use((req, res) => {
  res.send('Backend desplegado para producción: PRUEBA TÉCNICA (FRONT-END DEVELOPER) DE EDWIN JORGE PARA MELI.')
})
app.use('/api/items', routes)

module.exports = app