const app = require('./app')

const PORT = 3001 || 5000

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})