import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./route/user.route.js";
import companyRoute from "./route/company.route.js"
import jobRoute from "./route/job.route.js"
import applicationRoute from "./route/application.route.js"
import path from "path";

dotenv.config({});

const app=express();

// app.get("/home",(req,res)=>{
//     return res.status(200).json({
//         message:"I am coming from backend",
//         success:true
//     })
// })
const _dirname = path.resolve();
//middleware
app.use(express.json());// req -> res-> json data
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOpations={
    origin:'https://sync-vp51.onrender.com',
    credentials:true
}
app.use(cors(corsOpations));

const PORT=process.env.PORT || 3000;

//API's 
app.use("/api/v1/user", userRoute);

app.use("/api/v1/company", companyRoute);

app.use("/api/v1/job", jobRoute);

app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
});

app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running at port ${PORT}`);
})
