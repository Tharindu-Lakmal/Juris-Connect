//configure the express server

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoutes.js"
import lawyerRouter from "./routes/lawyerRoutes.js"


// app config
const app = express()
const port = 4000

//middleware
app.use(express.json()) //requests from the frontend to backend pass using the middleware
app.use(cors()) //can be accessed backend from frontend

//DB connection
connectDB();

// api endpoints
// 1. api endpoints for userRoutes
app.use("/api/user", userRouter)
app.use("/api/lawyer", lawyerRouter)
app.use("/images", express.static('uploads')) // access uploaded images from the frontend


//a http:// method | request data from the server
app.get("/", (req,res) => {  //req-request | res-responce
    res.send("API Working")
}) 

app.listen(port, () => {  //run the express server
    console.log(`Server Started on http://localhost:${port}`)
})



// mongodb+srv://JurisConnect:JurisConnectSE5104@cluster0-miniproject.mrber33.mongodb.net/?