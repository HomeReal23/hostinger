import express from 'express';
import { postMail } from '../controllers/mail.controller';
const userRouter = express.Router()

userRouter.post("/", postMail)

export default userRouter