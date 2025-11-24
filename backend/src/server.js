import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import {connectDB} from "./lib/db.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

const PORT=process.env.PORT || 3000;

app.use(express.json()); // req.body

app.use("/api/auth",authRoutes); //we can also do this same for messages(for messaging)
app.use("/api/messages",messageRoutes);

//Make ready for deployment (from this code we can get frontend output on port 3000)
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
    });//Any other file means other than api it will open frontend's output
}

app.listen(PORT,()=>{
    console.log("Server is running on port: "+PORT);
    connectDB();
}
);
