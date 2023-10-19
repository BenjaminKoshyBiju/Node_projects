import express from 'express';
import * as fs from 'fs';
const app = express()
const port = 3000

app.get('/', (req, res) => {
const data=fs.readFileSync('index.html','utf8')
  res.send(data)
})

app.get('/about', (req, res) => {
    res.send('Hello World! this is about page')
  })
  

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})