import '@babel/polyfill'
import express from "express"; 
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import userRouter from './routes/userRouter.js'
import   "./configs/database.js"
import bodyParser from "body-parser";
dotenv.config();
import postRoutes from "./routes/posts.js";
const url =process.env.MONGO_URI
const tesurl=process.env.MONGO_URI_TEST

mongoose.connect(process.env.NODE_ENV === 'test' ? tesurl :url, {useCreateIndex: true,useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify: false})
const db=mongoose.connection
db.once('open', _ => {
console.log('Database connected:')
})
db.on('error', err => {
console.error('connection error:', err)
})

const server = express();
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors());
server.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin' , '*');
  res.header('Access-Control-Allow-Methods' , 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers' , 'Content-Type');
  next();
});
server.use(postRoutes)
server.use('/user',userRouter)

 server.listen(process.env.PORT,
    console.log(`server is running on port  ${process.env.PORT}`));
    export default server