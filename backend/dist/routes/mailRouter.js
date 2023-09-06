"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mail_controller_1 = require("../controllers/mail.controller");
const userRouter = express_1.default.Router();
userRouter.post("/", mail_controller_1.postMail);
exports.default = userRouter;
