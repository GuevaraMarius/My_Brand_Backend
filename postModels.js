import mongoose from "mongoose";




const postSchema=mongoose.Schema({
    posted:{type: Date ,required:true},
    title:{type:String,required:true, unique: true },
    description:{type:String,required:true,unique: true },
    like:{type:Number},
    comment:{type:Number},
    
});
export default mongoose.model("Post",postSchema);