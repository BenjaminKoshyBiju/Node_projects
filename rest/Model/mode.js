import mongoose, { Types } from "mongoose";

const dataSchema=new mongoose.Schema(
{
    name: String,
    age: Number
}
    
)

export default dataSchema