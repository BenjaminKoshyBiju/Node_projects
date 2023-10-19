import express from 'express';
const app = express()
const port = 3000
//__dirname not available in Es module scope so doing this!
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// we can create our own middleware but generally opt to use instead of creating new ones.
const firstMiddleware=(req,res,next)=>{
  console.log(req)
  next()
}
// app.use(firstMiddleware)
app.use(express.static(path.join(__dirname,'public' )))

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname,'index.html'))
})

//req params 
app.get('/test/:name', (req, res) => {
  res.send('hello' + req.params.name)
  })

app.get('/about', (req, res) => {
    res.json({
      name:'Benjamin',
      age:'24'
    })
  })
  

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})