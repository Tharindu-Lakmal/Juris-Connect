//use to store data in the database

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    user_image: {type:String,required:true},
    city: {type:String,required:true},
    phone: {type:String,required:true},
    password: {type:String,required:true},
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;