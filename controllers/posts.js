import Post from "../models/postModels.js";
 export const post= async (req,res) => {
     try{
         const createdPost= await Post.create({
             title: req.body.title,
             description:req.body.description,
             like:req.body.like,
             comment:req.body.comment,
             posted:Date.now(),
         });
         createdPost.save((err) => {
            if (err) {
                console.log(err);
            } else {
                res.send(newArticle);
            }
        })
         res.status(201).json({
            success: true,
          });
     }
     catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "failed to create a post",
        });
      }
 }
 // get all posts
export const find =async(req,res)=>{
try {
    const posts= await Post.find();
    res.status(200).json({
        success:true,
        posts:posts,
    });
} catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "failed to find posts "});
}

};
//get one post
export const getOnePost=async (req,res)=>{
    try {
        
        const onePost = await Post.findOne( {_id:req.params.postId});
        res.status(200).json({
            success:"true",
            onePost:onePost
        });
    } 
    catch (error) {
        console.log(error);
    return errorRes(res, 404, 'not found on posts list', error);
    }
}

export const deletePost = async (req,res)=>{
    try {
        const deletePost = await Post.findOne({ _id: req.params.postId }); 
        await deletePost.deleteOne();
        res.status(200).json({
            success:"true",
          
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to delete post",
          });
    }
}
export const updatePost = async (req,res)=>{
    try {
        const updatePost = await Post.findOneAndUpdate(
            { _id: req.params.postId},
            req.body,
        {
             new :true,  
        } 
        );
        res.status(200).json({
            success:"true ",

            
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to update post ",
          });
    }
}
