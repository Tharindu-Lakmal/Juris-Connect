// create logic to connect with the database | database configurations

import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://JurisConnect:JurisConnectSE5104@cluster0-miniproject.mrber33.mongodb.net/JurisConnect').then(() => {
    console.log("DB Connected")})
}