import Comment from '../models/comments.js'
import Blog from '../models/postModels.js'


export const postcomment=function(req,res){
    const name=req.body.name;
    const comment=req.body.comment;
    
    Comment.create({name,comment
    })
    .then((output)=>{
        res.status(201).json({meassage:"created successful!", comment:output})
        Blog.findById(req.params.postId)
        .then(foundPost=>{
            foundPost.comments.push(output._id)
            foundPost.commentNumber +=1
            foundPost.save()
     })
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({message:"comment failed"})
    })

.catch(error=>{
    console.log(error)
    res.status(404).json({message:"there was an error creating comment"})
})
    
 

}
export const getcomment= function(req,res){
    Comment.find().then((cmt)=>{
        res.status(200).json({message:"Message found",message:cmt})
    }).catch((err)=>{
        console.log(err)
        res.status(500).json({message:"comment failed"})
    })
}

export const findcomment= function(req,res){
    Blog.findById(req.params.postId).then((output)=>{
    res.status(200).json({meassage:"post found!",comment:output})
    })
    }