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
         createdPost.save((err,result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(201).json({
                    success: true,
                    result
                  });
            }
        })
         
        
     }
     catch (error) {
        console.log(error);
       return res.status(500).json({
          success: false,
          message: "failed to create a post",
        });
      }
 }
 // get all posts
export const find =async(req,res)=>{
try {
    const posts= await Post.find((err)=>{
        if(err){
            return res.status(404).json({
                success:false,
                message:"articles not found "
            });
        }

    });
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
        
        const onePost = await Post.findOne( {_id:req.params.postId},(err)=>{
            if(err){
                return res.status(404).json({
                    success:false,
                    message:"the article not found "
                });
            }
        });
        res.status(200).json({
            success:"true",
            onePost:onePost
        });
    } 
    catch (error) {
        console.log(error);
   
    }
}

export const deletePost = async (req,res)=>{
    try {
        const deletePost = await Post.findOne({ _id: req.params.postId }); 
        await deletePost.deleteOne((err)=>{
            if(err){
                return res.status(404).json({
                    success:false,
                    message:"the article not found "
                });
            }
            else{
                res.status(201).json({
                    success:"true ",
                    
                });
            }
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
            req.body,(err)=>{
                if(err){
                    return res.status(404).json({
                        success:false,
                        message:"the article not found "
                    });
                }
                else{
                    res.status(201).json({
                        success:"true ",
                        
                    });

                }
            }
        );

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to update post ",
          });
    }
}
