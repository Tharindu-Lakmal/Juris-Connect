//use to store data in the database

import mongoose from "mongoose";

const lawyerSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    lawyer_image: {type:String,required:true},
    city: {type:String,required:true},
    phone: {type:String,required:true},
    password: {type:String,required:true},
})

const lawyerModel = mongoose.models.lawyer || mongoose.model("lawyer", lawyerSchema);

export default lawyerModel;