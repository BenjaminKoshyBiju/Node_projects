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

router.get('/getOne/:id', async (req, res) => {
    
     const data=await model.findById(req.params.id).exec();             // code to fetch data by id, got through documentation
     try{
     res.status(200).json(data)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }

})

router.patch('/update/:id',bodyParser.json(), async (req, res) => {
    
    const doc= await model.findById(req.params.id);
    doc.name=req.body.name;                                     //use body parser json when trying to take incoming requests
    doc.age=req.body.age;
    try{
    await doc.save();
    res.status(200).json(doc)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

router.delete('/delete/:id', async (req, res) => {
    try{
        await model.deleteOne({ _id: req.params.id });
        res.status(200).send('record deleted successfully')
    }
    catch(error)
    {
        res.status(404).json({error:error.message})
    }
    
})

export default router;