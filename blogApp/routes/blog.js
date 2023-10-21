import express from 'express'
import blogData from '../data/blogs.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router=express.Router()

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('./home');
})

router.get('/blogs',(req,res)=>{
    // blogData.forEach((e)=>{
    //     console.log(e.title)
    // })

    // res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
    res.render('./blogHome',{
        blogData:blogData
    });
})

router.get('/blogPost/:slug',(req,res)=>{
    const myBlog=blogData.filter((e)=>{
    return e.slug==req.params.slug
    })
    // console.log(myBlog);
    res.render('./blogPage',{
        title:myBlog[0].title,
        content:myBlog[0].content
    });
    // res.sendFile(path.join(__dirname,'../templates/blogPage.htm'))
})

export default router;
