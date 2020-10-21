import express from 'express'
import{ findcomment, getcomment, postcomment,} from '../controllers/comment.js'

const commentRouter=express.Router();

commentRouter.post('/',postcomment)
commentRouter.get('/',getcomment)
commentRouter.get('/',findcomment)

export default commentRouter;