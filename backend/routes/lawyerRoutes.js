import express from "express"
import { addLawyerDetails, listlawyer, removeLawyer } from "../controllers/lawyerControllerAPI.js"
import multer from "multer" //create image storage system

const lawyerRouter = express.Router(); //using this create get, post, delete, update methods

// logic to save image in uploads folder
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`) //rename the image name
    }
})

const upload = multer({storage:storage}) // store the image in uploads folder



lawyerRouter.post("/add",upload.single("lawyer_image"),addLawyerDetails) //use to send the data on server and get the responce
lawyerRouter.get("/list", listlawyer)
lawyerRouter.post("/remove", removeLawyer);




export default lawyerRouter;