const fs=require('fs');
fs.readFile('./docs/hello.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

fs.writeFile('./docs/hello.txt','hello world?',()=>{
    console.log('file written')
})