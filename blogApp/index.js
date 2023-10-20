import express from 'express';
import blogRoute from './routes/blog.js';
const app = express()
const port = 3000
//__dirname not available in Es module scope so doing this!
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'static' )))
app.use('/', blogRoute);


app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
  })