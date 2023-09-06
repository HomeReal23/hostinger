import express from 'express';
import { getUsers, updateUser, getUser } from '../controllers/users.controller';
const userRouter = express.Router()

userRouter.put("/update", updateUser)
userRouter.get("/get-users", getUsers)
userRouter.get("/user/:id", getUser)

export default userRouter