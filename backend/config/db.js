// create logic to connect with the database | database configurations

import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://JurisConnect:JurisConnectSE5104@cluster0-miniproject.mrber33.mongodb.net/JurisConnect').then(() => {
//     console.log("DB Connected")})
// }


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Stop the application if the DB connection fails
    }
};
