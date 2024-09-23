import express from "express"
import { addUserDetails, listuser, loginUser, registerUser, removeUser } from "../controllers/UserControllerAPI.js"
import multer from "multer" //create image storage system

const userRouter = express.Router(); // define a router object | using this create get, post, delete, update methods

// logic to save image in uploads folder
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`) //rename the image name
    }
})

const upload = multer({storage:storage}) // store the image in uploads folder

// end points for login and registration
userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

// end points for modifing data
userRouter.post("/add",upload.single("user_image"),addUserDetails) //use to send the data on server and get the responce
userRouter.get("/list", listuser)
userRouter.post("/remove", removeUser);




export default userRouter;