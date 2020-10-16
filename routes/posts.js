import express from "express";
import {
    post ,find,deletePost,updatePost,

}from "../controllers/posts.js"

const router = express.Router();
router.post("/addPost",post);
router.get("/findPosts",find);
router.delete("/deletePost/:postId",deletePost);
router.patch("/updatePost/:postId", updatePost);
export default router;
