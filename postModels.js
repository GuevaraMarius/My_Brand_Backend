import mongoose from "mongoose";
import "json.date-extensions";



const postSchema=mongoose.Schema({
    posted:{type: Date ,required:true},
    imageUrl:{
        type: String,required:true
    },
    title:{type:String,required:true, unique: true },
    description:{type:String,required:true,unique: true },
    like:{type:Number},
    comment:{type:Number},
    
});
export default mongoose.model("Post",postSchema);