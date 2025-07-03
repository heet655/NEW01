require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Heet Shah')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login successfully</h1>')
})

app.get('/Youtube', (req, res) => {
    res.send('<h2>Heet 2 </h2>')
})

app.get('/Instgram', (req, res) => {
    res.send('<h3> Heet 3 </h3>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
