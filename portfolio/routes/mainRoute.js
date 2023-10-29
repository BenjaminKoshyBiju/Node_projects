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

router.get('/:slug',(req,res)=>{
    const skill=skills.filter((e)=>{
        
        return e.slug==req.params.slug
        
        })
    res.render('./work',{
        framework:skill[0].framework,
        project_title:skill[0].project_title,
        desc:skill[0].description,
        skl1:skill[0].tool1,
        skl2:skill[0].tool2,
        skl3:skill[0].tool3,
        skl4:skill[0].tool4,
        img:skill[0].img,
        img1:skill[0].img1,
        img2:skill[0].img2,
        img3:skill[0].img3,
        link:skill[0].link

        // skills:skills,

    });
    

})


export default router;