import express from "express";
import {
    post ,find,deletePost,updatePost,getOnePost

}from "../controllers/posts.js"

const router = express.Router();
router.post("/articles",post);
router.get("/articles",find);
router.get("/articles/:postId",getOnePost);
router.delete("/articles/delete/:postId",deletePost);
router.patch("/articles/update/:postId", updatePost);
export default router;
