//configure the express server

import express from "express"
import cors from "cors"


// app config
const app = express()
const port = 4000

//middleware
app.use(express.json) //requests from the frontend to backend pass using the middleware
app.use(cors()) //can be accessed backend from frontend


//a http:// method | request data from the server
app.get("/", (req,res) => {  //req-request | res-responce
    res.send("API Working")
}) 

app.listen(port, () => {  //run the express server
    console.log(`Server Started on http://localhost:${port}`)
})
