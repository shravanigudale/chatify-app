import mongoose from "mongoose"

export const connectDB = async()=>{
    try{
        const {MONGO_URI} = process.env;
        if(!MONGO_URI) throw new Error("MONGO_URI not set");
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected successfully: ",conn.connection.host);
    }catch(error){
        console.error("Error in connecting to mongodb:",error);
        process.exit(1);//1 status code means fail, 0 means success
    }
}