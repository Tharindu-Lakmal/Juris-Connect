import express from "express"
import { addUserDetails } from "../controllers/UserControllerAPI.js"
import multer from "multer" //create image storage system

const userRouter = express.Router(); //using this create get, post, delete, update methods

// logic to save image in uploads folder
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`) //rename the image name
    }
})

const upload = multer({storage:storage}) // store the image in uploads folder



userRouter.post("/add",upload.single("user_image"),addUserDetails) //use to send the data on server and get the responce




export default userRouter;