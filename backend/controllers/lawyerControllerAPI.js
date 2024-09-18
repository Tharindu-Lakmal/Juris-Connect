// use to add user details in the database

import lawyerModel from "../models/lawyerModel.js";
import fs from 'fs'


// add user details API | controller function to add details in the database
const addLawyerDetails = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const lawyer = new lawyerModel({ //from the userModel
        name:req.body.name,
        email:req.body.email,
        city:req.body.city,
        phone:req.body.phone,
        password:req.body.password,
        lawyer_image:image_filename
    })
    try {
        await lawyer.save();
        res.json({success:true, message: "Lawyer Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }

}

// all lawyer list
const listlawyer = async (req, res) => {
    try {
        const lawyer = await lawyerModel.find({});
        res.json({success:true, data:lawyer})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//remove lawyers
const removeLawyer = async (req, res) => {
    try {
        const lawyer = await lawyerModel.findById(req.body.id);
        fs.unlink(`uploads/${lawyer.image}`, () => {})

        await lawyerModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Lawyer Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addLawyerDetails, listlawyer, removeLawyer}