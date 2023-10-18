import * as http from 'http';
import * as fs from 'fs';

const port=process.env.PORT || 3000
const server= http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('Content-Type','text/html')

    if (req.url=='/')
    {    res.statusCode=200;
        const data=fs.readFileSync('index.html',"utf8")
        res.end(data);}


    else if (req.url=='/about')
    {res.statusCode=200;
    res.end('<h1> This is the About page</h1><p> for any clarifications check documentation</p>');}

    else
    {res.statusCode=404;
    res.end('<h1> Page not found in Server</h1><p> for any clarifications check documentation</p>');}
})
server.listen(port,()=>{
    console.log(`SERVER IS LISTNING AT PORT ${port}`);
})