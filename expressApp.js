import express from 'express';
const app = express()
const port = 3000
//__dirname not available in Es module scope so doing this!
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/about', (req, res) => {
    res.send('Hello World! this is about page')
  })
  

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})