import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import route from './routes/route.js'
dotenv.config();

const app=express()
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const db= mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('connected',()=>console.log('Connection to Database Success'))

app.use('/', route);

app.listen(3000,()=>{
    console.log("Server is running at Localhost:3000")
}
)