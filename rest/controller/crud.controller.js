import bodyParser from 'body-parser';
import model from '../Model/mode.js'
const getData=( async (req,res)=>{
    try{
        const data=await model.find({});
        res.status(200).json(data)
        }
        catch(error)
        {
            console.log(error)
        }
})


const insertData=( async (req,res)=>{
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

const getOneData=( async (req,res)=>{
    const data=await model.findById(req.params.id).exec();             // code to fetch data by id, got through documentation
     try{
     res.status(200).json(data)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
})

const updateData=(async (req, res) => {
    
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

const deleteData=(async (req, res) => {
    try{
        await model.deleteOne({ _id: req.params.id });
        res.status(200).send('record deleted successfully')
    }
    catch(error)
    {
        res.status(404).json({error:error.message})
    }
    
})


export {getData,insertData,getOneData,updateData,deleteData}