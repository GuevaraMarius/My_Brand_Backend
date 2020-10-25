import express from "express"; 
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import userRouter from './routes/userRouter.js'
import   "./configs/database.js"
import bodyParser from "body-parser";
dotenv.config();
import postRoutes from "./routes/posts.js";
const url =process.env.DATABASE_URL
mongoose.connect(url, {useCreateIndex: true,useNewUrlParser: true ,useUnifiedTopology: true})
const db=mongoose.connection
db.once('open', _ => {
console.log('Database connected:', url)
})
db.on('error', err => {
console.error('connection error:', err)
})

const server = express();
server.use(express.urlencoded({extended:true}))
server.set('view engine', 'ejs')
server.use(express.json())
server.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  } ));
  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
server.use(postRoutes)
server.use('/user',userRouter)




server.listen(process.env.PORT,
    console.log(`server is running on port  ${process.env.PORT}`));