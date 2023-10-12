const fs=require('fs');
// fs.readFile('./docs/hello.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// fs.writeFile('./docs/hello.txt','hello world?',()=>{
//     console.log('file written') 
// })
// if (!fs.existsSync('./Asset'))
//     {fs.mkdir('./Asset',()=>{
//     console.log('Directory created')
//     })
//     }
// else{
//     {fs.rmdir('./Asset',()=>{
//         console.log('Directory removed')
//         })}
//     }

if (fs.existsSync('./docs/hello.txt')){

    fs.unlink('./docs/hello.txt',(err)=>{
        if(err)
        {
            console.log(err)
        }
        console.log('file removed');
    })
}

else {
    fs.writeFile('./docs/hello.txt','hello world?',()=>{
            console.log('file written')})

}
