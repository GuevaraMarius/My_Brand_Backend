import express from "express";
import {
    post ,find,deletePost,updatePost,

}from "../controllers/posts.js"

const router = express.Router();
router.post("/articles",post);
router.get("/articles",find);
router.delete("/articles/:postId",deletePost);
router.patch("/articles/:postId", updatePost);
export default router;
