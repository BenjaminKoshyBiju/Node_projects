import express from 'express';
import path from 'path';
import {skills} from '../data/skills.js';
import {keywords} from '../data/skills.js';
import edu from '../data/education.js';
import work from '../data/work.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const router=express.Router()
router.get('/',(req,res)=>{
    
    res.render('./home',{
        skills:skills,
        keywords:keywords,
        edu:edu,
        work:work
    });
    

})


export default router;