// use to add user details in the database

import userModel from "../models/UserModel.js";
import fs from 'fs'


// add user details API | controller function to add details in the database
const addUserDetails = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const user = new userModel({ //from the userModel
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        phone:req.body.phone,
        password:req.body.password,
        user_image:image_filename
    })
    try {
        await user.save();
        res.json({success:true, message: "User Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }

}

// all user list
const listuser = async (req, res) => {
    try {
        const user = await userModel.find({});
        res.json({success:true, data:user})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//remove user
const removeUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.id);
        fs.unlink(`uploads/${user.image}`, () => {})

        await userModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"User Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addUserDetails, listuser, removeUser}