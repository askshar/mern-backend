import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n DB Connected: ${connectionInstance.connection.host} \n`);
    } catch (error) {
       console.error("MONGODB Connection error: ", error);
       process.exit(1); 
    }
}