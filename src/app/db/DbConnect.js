import mongoose from "mongoose";

export const DbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Db connected")
    } catch (error) {
        console.log(error)
    }
}