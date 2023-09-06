"use strict";
// import User from "../models/client.model"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = void 0;
const User_model_1 = __importDefault(require("../models/User.model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_model_1.default.find();
        res.send(users);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_model_1.default.findById(id);
        res.send(user);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.getUser = getUser;
// export const postUser = async (req: Request, res: Response) => {
//     try{
//         const {name, email, role, picture,number} = req.body
//         console.log(req.body, "req.body")
//         if(!email || !name ) res.status(404).json("Missing required values")
//         const newUser = new User({email, name,picture,number, role})
//         await newUser.save();
//         res.status(201).json(newUser)
//     }catch(e){
//         console.log(e);
//         res.status(500).json({ message: (e as Record<string,string>).message });
//     }
// }
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, role, surname, movil } = req.body;
        const Surname = surname.charAt(0).toUpperCase() + surname.slice(1);
        const user = yield User_model_1.default.findOne({ email });
        if (user) {
            user.role = role;
            user.surname = Surname;
            user.movil = movil;
            const update = yield (user === null || user === void 0 ? void 0 : user.save());
            return res.json(update);
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield User_model_1.default.deleteOne({ _id: id });
        res.send({ message: 'Member deleted successfully' });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
});
exports.deleteUser = deleteUser;
