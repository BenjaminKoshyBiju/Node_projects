import express from 'express';
import route from './routes/mainRoute.js';
const app = express()
const port = 3000

import { engine } from 'express-handlebars';
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'static' )))
app.use('/', route);

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
  })
