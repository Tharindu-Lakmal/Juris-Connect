// use to add user details in the database

import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken"; //create authentication
import bcrypy from "bcrypt"; // encrypt the passwords
import validator from "validator"; // validate the email
import fs from 'fs'


// login user -----------------------------------
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success:false, message:"User doesn't exist"})
        }

        const isMatch = await bcrypy.compare(password, user.password);

        if (!isMatch) {
            return res.json({success:false, message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// create an unique token for each users by getting their id
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET) // data will be encrypted
}

// register user -----------------------------------
const registerUser = async (req, res) => {
    const {name, email, user_image, password, phone} = req.body;

    try {
        const exists = await userModel.findOne({email}); // checking user already exists
        if (exists) {
            return res.json({success:false, message:"User already exists"})
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }

        // checking password lenght
        if (password.length < 8) {
            return res.json({success:false, message:"Please enter a strong email"})
        }

        // hashing user password
        const salt = await bcrypy.genSalt(10) // the number can be between 5-10
        const hashedPassword = await bcrypy.hash(password, salt)

        // creating a new user
        const newUser = new userModel({
            name:name,
            email:email,
            user_image:user_image,
            password:hashedPassword,
            phone:phone
        })

        // save the user in the database
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {loginUser, registerUser}



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