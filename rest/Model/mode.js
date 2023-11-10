import mongoose from "mongoose";

const dataSchema=new mongoose.Schema(
{
    name: String,
    age: Number
}
    
)

const Data = mongoose.model('Data', dataSchema);

export default Data