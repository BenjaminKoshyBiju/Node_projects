import express from 'express';
import model from '../Model/mode.js'
import bodyParser from 'body-parser';

const router = express.Router()


router.get('/', (req, res) => {
    res.send('Get All API')
})

router.get('/api', (req, res) => {
    res.send('no API')
})

router.post('/post',bodyParser.json(), async (req,res)=>{
    const data= new model({
        name:req.body.name,
        age:req.body.age       
    });
    try{

        const dataSaved= await data.save();
        res.status(200).json(dataSaved)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
})

router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

export default router;