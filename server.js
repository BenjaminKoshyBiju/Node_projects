import * as http from 'http';

const port=process.env.PORT || 3000
const server= http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1> The server is running</h1><p> for any clarifications check documentation</p>');
})
server.listen(port,()=>{
    console.log(`SERVER IS LISTNING AT PORT ${port}`);
})