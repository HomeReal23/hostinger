"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const userRouter = express_1.default.Router();
userRouter.put("/update", users_controller_1.updateUser);
userRouter.get("/get-users", users_controller_1.getUsers);
userRouter.get("/user/:id", users_controller_1.getUser);
exports.default = userRouter;
