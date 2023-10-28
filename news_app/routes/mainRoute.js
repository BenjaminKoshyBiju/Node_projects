import express from 'express';
import path from 'path';
import config from '../config.js'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const router=express.Router()
router.get('/',(req,res)=>{
    
    res.render('./home',{news_apikey:config.news_api,
                        weather_key:config.weather_api

    });
})

export default router;