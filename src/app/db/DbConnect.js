import mongoose from "mongoose";

export const DbConnect=async()=>{
    try {
        await mongoose.connect("your connection string")
        console.log("Db connected")
    } catch (error) {
        console.log(error)
    }
}