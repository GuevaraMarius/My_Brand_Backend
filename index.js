import express from "express"; 
import dotenv from "dotenv";
import "./configs/database.js"
dotenv.config();
import postRoutes from "./routes/posts.js";
const server = express();
server.use(express.json());
server.use(postRoutes);
server.listen(process.env.PORT,(res,req)=>{
    console.log(`server is running on port  ${process.env.PORT}`)});