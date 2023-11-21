import express from 'express';
import model from '../Model/mode.js'
import bodyParser from 'body-parser';
import { deleteData, getData,getOneData,insertData, updateData } from '../controller/crud.controller.js';

const router = express.Router()


router.get('/', getData)

router.get('/api', (req, res) => {
    res.send('no API')
})

router.post('/post',bodyParser.json(),insertData)

router.get('/getOne/:id', getOneData)

router.patch('/update/:id',bodyParser.json(), updateData)

router.delete('/delete/:id', deleteData)

export default router;