"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const propertyRouter = express_1.default.Router();
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const propertys_controller_1 = require("../controllers/propertys.controller");
const multer_1 = __importDefault(require("multer"));
const dest = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        let dir = path_1.default.resolve(__dirname, "../../public/uploads", "propertys", String(req.body.address).trim().replace(/\s+/g, ''));
        if (!fs_1.default.existsSync(dir)) {
            fs_1.default.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({ storage: dest });
propertyRouter.get("/", propertys_controller_1.getPropertys);
propertyRouter.post("/", [upload.any()], propertys_controller_1.postProperty);
propertyRouter.put("/update/:id", propertys_controller_1.updateProperty);
propertyRouter.delete("/:id", propertys_controller_1.deleteProperty);
exports.default = propertyRouter;
