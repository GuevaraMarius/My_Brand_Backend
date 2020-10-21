import express from 'express'
import { getUsers, postUser } from '../controllers/users.js'

const userRouter = express.Router()

userRouter.get('/',getUsers)
userRouter.post('/',postUser)
export default userRouter