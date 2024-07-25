
import mongoose from "mongoose";
import { db_Name } from "../constant.js";

const dbConnection = async()=>{
    try {
        await mongoose.connect(`${process.env.DB_URL}/${db_Name}`);
        console.log("db connected successfully")
    } catch (error) {
        console.log("error in dbconnectin", error)

    }
}

export {dbConnection}