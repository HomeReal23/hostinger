import express from 'express';
const propertyRouter = express.Router()
import fs from 'fs';
import path from 'path';
import { deleteProperty, getPropertys, postProperty, updateProperty } from '../controllers/propertys.controller';
import multer from "multer";

const dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let dir = path.resolve(__dirname,"../../public/uploads","propertys", String(req.body.address).trim().replace(/\s+/g, ''))
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        cb(null, dir)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage:dest});

propertyRouter.get("/", getPropertys)
propertyRouter.post("/", [upload.any()] , postProperty)
propertyRouter.put("/update/:id", updateProperty)
propertyRouter.delete("/:id", deleteProperty)

export default propertyRouter