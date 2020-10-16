import express from "express";
import mongoose from "mongoose";
 mongoose.connect("mongodb://localhost:27017/mybrand",{useCreateIndex: true,useNewUrlParser: true ,useUnifiedTopology: true})
 .then((results)=>console.log('connected to database')).catch((err)=>console.log(err));
