"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const propertyRoutes_1 = __importDefault(require("./routes/propertyRoutes"));
const mongo_1 = __importDefault(require("./config/mongo"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const mailRouter_1 = __importDefault(require("./routes/mailRouter"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
/* Config */
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, morgan_1.default)("combined"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
/* Routes */
app.use("/email", mailRouter_1.default);
app.use("/propertys", propertyRoutes_1.default);
app.use("/users", usersRoutes_1.default);
/* Images */
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../public/uploads/propertys")));
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../client")));
/* DataBase */
(0, mongo_1.default)();
