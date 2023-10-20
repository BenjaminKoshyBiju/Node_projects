import express from 'express'
import blogData from '../data/blogs.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router=express.Router()

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

// router.get('/blogs',(req,res)=>{
//     // blogData.forEach((e)=>{
//     //     console.log(e.title)
//     // })

//     res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
// })

router.get('/blogPost/:slug',(req,res)=>{
    const myBlog=blogData.filter((e)=>{
    return e.slug==req.params.slug
    })
    console.log(myBlog);
    res.sendFile(path.join(__dirname,'../templates/blogPage.htm'))
})

export default router;
