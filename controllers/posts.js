import Post from "../postModels.js";
 export const post= async (req,res) => {
     try{
         const createdPost= await Post.create({
             title: req.body.title,
             description:req.body.description,
             imageUrl:req.body.imageUrl,
             like:req.body.like,
             comment:req.body.comment,
             posted:req.body.posted
         });
         res.status(201).json({
            success: true,
            user: createdPost,
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
export const deletePost = async (req,res)=>{
    try {
        const deletePost = await Post.findOneAndDelete({ _id:req.params.postId}); 
        res.status(200).json({
            success:"true",
            post: deletePost,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to delete user",
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
            post: updatePost,
            
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to update post ",
          });
    }
}